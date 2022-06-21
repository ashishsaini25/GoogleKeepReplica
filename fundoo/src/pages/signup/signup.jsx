import React from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import './signup.css';
import  image from'../dashboard/images/account.svg'
import google from '../dashboard/images/google.png'
import {signUp} from '../../services/userService'
const userNameRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const firstNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const lastNameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const Signup=()=>{
  const [signUpObj, setSignUpObj] = React.useState({ firstname:"",lastname:"", password: "",email: "" });
  const [objRegex, setObjRegex] = React.useState({
    firstNameBoarder:false,
    firstNameHelper:"",
    lastNameBorder:false,
    lastNameHelper:"",
    usernameBorder:"",
    usernameHelper:"",
    passwordBorder: false,
    passwordHelper: "",

  });

  const submitFunction = () => {

    let firstNameTest=firstNameRegex.test(signUpObj.firstname);  
    let lastNameTest=lastNameRegex.test(signUpObj.lastname);
    let usernameTest = userNameRegex.test(signUpObj.email);
    let passwordTest = passwordRegex.test(signUpObj.password);
    if (firstNameTest === true) {
      setObjRegex((previousState) => ({
        ...previousState,
        firstNameBoarder: false,
        firstNameHelper: "",
      }));
    } else {

      setObjRegex((previousState) => ({
        ...previousState,
        firstNameBoarder: true,
        firstNameHelper: "Enter Correct firstname",
      }));
    }
    if (lastNameTest === true) {
      setObjRegex((previousState) => ({
        ...previousState,
        lastNameBorder: false,
        lastNameHelper: "",
      }));
    } else {

      setObjRegex((previousState) => ({
        ...previousState,
        lastNameBorder: true,
        lastNameHelper: "Enter Correct lastname",
      }));
    }
    if (usernameTest === true) {
      setObjRegex((previousState) => ({
        ...previousState,
        usernameBorder: false,
        usernameHelper: "",
      }));
    } else {

      setObjRegex((previousState) => ({
        ...previousState,
        usernameBorder: true,
        usernameHelper: "Enter Correct Username",
      }));
    }

    if (passwordTest === true) {
        setObjRegex((previousState) => ({
          ...previousState,
          passwordBorder: false,
          passwordHelper: "",
        }));
      } else {
        setObjRegex((previousState) => ({
          ...previousState,
          passwordBorder: true,
          passwordHelper: "Enter correct Password",
        }));
      }

  if(firstNameTest === true && lastNameTest === true && usernameTest === true && passwordTest === true ) {
            signUp(signUpObj).then( (resp) => {console.log(resp)}).catch( (error) => {console.log(error)})
        } 

    }
  const takePassword=(event)=>{
    setSignUpObj({...signUpObj, password:event.target.value})
  }
  const takefirstName=(event)=>{
    setSignUpObj({...signUpObj, firstname:event.target.value})

  }
  const takelastName=(event)=>{
    setSignUpObj({...signUpObj, lastname:event.target.value})

  }
  const takeUserName=(event)=>{
    setSignUpObj({...signUpObj, email:event.target.value})
  }

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return(
        <div>
            <div className='Box'>
                <div className='firstChild'>
                    <div className='tp-child'><img src={google} width='80px'></img></div>
                    <div className='tp2-child'><h2>Create Your Google Account {'\n'}</h2></div>
                    <div className='fn-child'>
                    <TextField id="outlined-basic"  onChange={takefirstName} error={objRegex.firstNameBoarder} helperText={objRegex.firstNameHelper}  label="firstname" style={{width:150,marginRight:30}} size='small' variant="outlined" />
                    <TextField id="outlined-basic" label="lastname" onChange={takelastName} error={objRegex.lastNameBorder} helperText={objRegex.lastNameHelper} size='small' style={{width:150}} variant="outlined" />

                    </div>
                    <div className='em-child'>
                    <TextField id="outlined-basic" label="Username" onChange={takeUserName} error={objRegex.usernameBorder} helperText={objRegex.usernameHelper}  defaultValue={"@gmail.com"}  style={{width:330}}  size='small' variant="outlined" />
                    </div>
                    <div className='fn-child'>
                    <TextField id="outlined-basic" label="Password" style={{width:150,marginRight:30}} onChange={takePassword} error={objRegex.passwordBorder} helperText={objRegex.passwordHelper} size='small' variant="outlined" />
                    <TextField id="outlined-basic" label="confirm" size='small' style={{width:150}} onChange={takePassword} error={objRegex.passwordBorder} helperText={objRegex.passwordHelper} variant="outlined" />
                    </div>
                    <div className='ch-child'>
                    <Checkbox {...label} defaultChecked  />
                    <label>Show password</label>
                    </div>
                    <div className='bt-child'>
                    <Link href="#" style={{marginRight:171}}>Sign in Insted</Link>

                    <Button variant="contained" size='small' onClick={submitFunction} >Next</Button>
                    </div>

                </div>
                <div className='secondChild'>
                <div className='image1'>
                <img src={image} ></img>
                </div>
                </div>

            </div>
        </div>
        )
    
}
export default Signup;