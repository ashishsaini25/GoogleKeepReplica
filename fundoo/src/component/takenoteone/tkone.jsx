import React from 'react'
import '../takenoteone/tkone.css'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import BrushIcon from '@mui/icons-material/Brush';
import ImageIcon from '@mui/icons-material/Image';
import Paper from '@mui/material/Paper';

function Takenoteone(props) {

    const click = () => {
        props.listenToTakeNoteOne()
    }

    return (
       
        <div onClick={click} class="parent-noteone">
             <Paper elevation={7}>
            <div class="note-childone">

                <input type="text" class='textHere' placeholder="Take a note..." />
                <div className='noteone-icon'>
                    <CheckBoxIcon />
                    <BrushIcon />
                    <ImageIcon />
                </div>
            </div>
            </Paper>
        </div>
        
    )
}

export default Takenoteone