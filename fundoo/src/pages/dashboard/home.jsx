import React,{useEffect, useState} from "react";
import TakeNoteOne from "../../component/takenoteone/tkone";
import Header from "../../component/header/head";
import Tktwo from "../../component/takenote2/tktwo";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import './home.css'
import Takenotethree from "../../component/takeNoteThree/takeNotethree";
import { getNotes } from "../../services/dataService";
import Drawer1 from "../../component/drawer/drawer";
const Dashboard=()=>{
    const [noteView,setNoteView]=React.useState(true);
    const [notes,setNotes]=useState([]);
    const [drawertoggle,setDrawerToggle]=useState(false);
    const [typeNotes,setTypeNotes]=useState("Notes");

    const listenToSideNavbar= async (noteChoice)=>{
       await setTypeNotes(noteChoice);
    }


    const listenToTakeNoteOne=()=>{
        setNoteView(false);
    }
    const listenToTakeNoteTwo=()=>{
        setNoteView(true);
    
    }
    const listenToHeader=()=>{
        setDrawerToggle(!drawertoggle)
    }
    useEffect(() => {
        getNotes()
          .then((response) => {
            
        
            let filter =[];
            if(typeNotes==="Notes"){
                filter=response.data.data.filter((note)=>{
                    if(note.isArchieve===false&&note.isTrash===false){
                        return note;
                    }})
            }
            else  if(typeNotes==="Archive"){
                filter=response.data.data.filter((note)=>{
                    if(note.isArchieve===true && note.isTrash===false ){
                        return note;
                    }})
            }
            else if(typeNotes==="Trash"){
                filter=response.data.data.filter((note)=>{
                    if(note.isTrash===true){
                        return note;
                    }})
            }
        
           setNotes(filter);       
        }).catch((err) => console.log(err))
      }, [noteView,typeNotes])


    return(
        <div>
            <Header listenToHeader={listenToHeader} />
            <Drawer1  drawertoggle={drawertoggle} listenToSideNavbar={listenToSideNavbar} />
            <div>
                {
                    noteView ? <TakeNoteOne listenToTakeNoteOne={listenToTakeNoteOne} /> :<Tktwo listenToTakeNoteTwo={listenToTakeNoteTwo}/>
                }
    
            </div>
            {
                
            }


            <div className='notesContainer'>
        {
          notes.map((note) =>
            (<Takenotethree notes={note} />)
          )}
      </div>
        </div>
    )
}
export  default Dashboard; 