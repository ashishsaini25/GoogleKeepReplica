import React from 'react'
import '../takenote2/tkktwo.css'
import PushPinIcon from '@mui/icons-material/PushPin';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ImageIcon from '@mui/icons-material/Image';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import { Button, Paper } from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import ColorPopper from '../colorPopper/colorPopper';

import {addNote} from '../../services/dataService'
function Takenotetwo(props) {

    const [noteObj, setNoteObj] = React.useState({title: '',  description: '', color: '',isArchieve:false,isTrash:false})
    const handleClickAway = () => {
        props.listenToTakeNoteTwo()
    } 
    
    const listenToColorPopper = (color) => {
        console.log(color);
        setNoteObj({...noteObj, color: color})
    }


    const takeTitle = (event) => {
        setNoteObj({...noteObj, title: event.target.value})
    }
    const takeDescreption = (event) => {
        setNoteObj({...noteObj,  description: event.target.value})
    }

    const submit = () => {
        addNote(noteObj).then((resp) => {console.log(resp)}).catch((error) => {console.log(error)})
    }
    const createArchieve=()=>{
        setNoteObj(prevState=>({...prevState,isArchieve:true}));

    }
   
    
    
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div  class="parent-notetwo" style={{backgroundColor:noteObj.color}} >
                <Paper elevation={4}>
                <div class="title-name">
                    <input   style={{backgroundColor:noteObj.color}} onChange={takeTitle} type="text"  class='textHere' placeholder="Title" />
                    <PushPinIcon />
                </div>
                <div class="description">
                    <input  style={{backgroundColor:noteObj.color}} onChange={takeDescreption} type="text" class='textHere' placeholder="Description" />
                </div>
                <div className='close' style={{backgroundColor:noteObj.color}}  >
                    <div className='diff-icon'>
                        <AddAlertIcon />
                        <PersonAddAltIcon />
                        <ColorPopper listenToColorPopper={listenToColorPopper} action="create"/>
                        <ImageIcon />
                        <ArchiveIcon onClick={createArchieve} />
                     
                        <UndoIcon />
                        <RedoIcon />
                    </div>
                    <Button variant="text" onClick={submit}  >Close</Button>
                </div>
                </Paper>
            </div>
        </ClickAwayListener>
    )
}

export default Takenotetwo