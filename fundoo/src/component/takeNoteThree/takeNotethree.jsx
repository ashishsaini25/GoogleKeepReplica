import React from "react";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ColorPopper from "../colorPopper/colorPopper";
import "./takeNotethree.css";
import { updateArchieve,updateNotess, updateTrash } from "../../services/dataService";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteIcon from '@mui/icons-material/Delete';
const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function Takenotethree(props) {
  console.log("update wala",props);
  const listenToColorPopper = (color) => {
    console.log(color);
  };
  const update = (id) => {
    updateArchieve(id)
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error));
  };
  const updateTras = (id) => {
    updateTrash(id)
      .then((resp) => console.log(resp))
      .catch((error) => console.log(error));
  };
  const [updateNote,setUpdate]=React.useState({title:props.notes.title,description:props.notes.description})
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const titleUpdate=(event)=>{
     setUpdate(prevState=>({...prevState,title:event.target.value}))
  }

  const descriptionUpdate =(event)=>{
    setUpdate(prevState=>({...prevState,description:event.target.value}))
  }



  const handleClose=()=>{
      updateNotess(props.notes._id,updateNote).then((resp) => {console.log(resp);setOpen(false);})
      .catch((error) => console.log(error));



  }

  return (
    <div>
      <div
        style={{ backgroundColor: props.notes.color }}
        className="parentNoteThree" onClick={handleOpen}
      >
        <div className="boxContent">
          <div className="noteBoxThree">
            <div className="titleDescreptionThree">
              <input
                style={{ backgroundColor: props.notes.color }}
                type="text"
                class="textHerethree"
                defaultValue={props.notes.title}
              />
              <input
                style={{ backgroundColor: props.notes.color }}
                type="text"
                class="textHerethree"
                defaultValue={props.notes.description}
              />
            </div>
            <div className="pinIconThree">
              <PushPinOutlinedIcon
                fontSize="small"
                htmlColor="black"
                style={{ position: "relative", top: "14px" }}
              />
            </div>
          </div>
          <div className="iconContentThree">
            <div className="iconThree">
              <AddAlertOutlinedIcon fontSize="small" htmlColor="black" />
              <PersonAddAltIcon fontSize="small" htmlColor="black" />
              <ColorPopper
                listenToColorPopper={listenToColorPopper}
                action="update"
                id={props.notes._id}
              />
              <ImageOutlinedIcon fontSize="small" htmlColor="black" />
              <ArchiveOutlinedIcon
                onClick={() => update(props.notes._id)}
                fontSize="small"
                htmlColor="black"
              />
                 <DeleteIcon onClick={() => updateTras(props.notes._id) }/>
              <MoreVertIcon fontSize="small" htmlColor="black" />
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <input  onChange={titleUpdate}  type="text"  class='textHere' defaultValue={props.notes.title} />
        <input  onChange={descriptionUpdate}  type="text" class='textHere'  defaultValue={props.notes.description} />
        <div className="iconContentThree">
            <div className="iconThree">
              <AddAlertOutlinedIcon fontSize="small" htmlColor="black" />
              <PersonAddAltIcon fontSize="small" htmlColor="black" />
              <ColorPopper
                listenToColorPopper={listenToColorPopper}
                action="update"
                id={props.notes._id}
              />
              <ImageOutlinedIcon fontSize="small" htmlColor="black" />
              <ArchiveOutlinedIcon
                onClick={() => update(props.notes._id)}
                fontSize="small"
                htmlColor="black"
              />
                 <DeleteIcon onClick={() => updateTras(props.notes._id) }/>
              <MoreVertIcon fontSize="small" htmlColor="black" />
              <button onClick={handleClose}>close</button>
            </div>
          </div>
     
        </Box>
      </Modal>
    </div>
  );
}
export default Takenotethree;
