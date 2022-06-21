import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensIcon from '@mui/icons-material/ColorLens'
import {updateColor} from '../../services/dataService'
export default function ColorPopper(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const colorArray = ['#e2725b', '#ffae42', '#fefe33', '#77dd77', '#40e0d0', '#a4dded', '#77b5fe', '#ba55d3', '#ffb3de', '#c19a6b', '#d3d3d3'];


  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  const takeColor = (color) => {
    if(props.action=="create"){
  props.listenToColorPopper(color)
    }
    else if(props.action=="update"){
      let obj={color:color};
      updateColor(props.id,obj).then(resp=>console.log(resp)).catch(error=>console.log(error));
    }

    }
  return (
    <div>
        <ColorLensIcon onClick={handleClick} />
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', display: 'flex' }}>
                    {colorArray.map((color) => 
                        <div style={{ backgroundColor: color, height: '30px', width: '30px', borderRadius: '100px', marginLeft: '5px' }} onClick={() => takeColor(color)} >

                        </div>
                    )}
                </Box>
        
</Popper>
    </div>
  );
}
