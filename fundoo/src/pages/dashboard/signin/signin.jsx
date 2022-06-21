import React from "react";
import { Link, TextField } from "@mui/material";
import "./signin.css";
import { Button } from "@mui/material";
import google from "../images/google.png";
import { signIn } from "../../../services/userService";
const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
function Signin() {
  const [signInObj, setSignInObj] = React.useState({ email: "", password: "" });
  const [objRegex, setObjRegex] = React.useState({
    emailBorder: false,
    emailHelper: "",
    passwordBorder: false,
    passwordHelper: "",
  });

  const submitFunction = () => {
    let emailTest = emailRegex.test(signInObj.email);
    let passwordTest = passwordRegex.test(signInObj.password);
    if (emailTest === true) {
      setObjRegex((previousState) => ({
        ...previousState,
        emailBorder: false,
        emailHelper: "",
      }));
    } else {

      setObjRegex((previousState) => ({
        ...previousState,
        emailBorder: true,
        emailHelper: "Enter Correct Email",
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
          passwordHelper: "Enter Correct Email",
        }));
      }


      if (emailTest === true && passwordTest === true) {
        signIn(signInObj)
        .then( (resp) => {console.log(resp); localStorage.setItem('token', resp.data.data)})
        .catch( (error) => {console.log(error)})

    } 

  };

  const takeEmail=(event)=>{
      setSignInObj({...signInObj, email:event.target.value})


  }

  const takePassword=(event)=>{
    setSignInObj({...signInObj, password:event.target.value})
  }
  return (
    <div className="signinContainer">
      <div className="sectionContentOne">
        <div>
          <img src={google} width="80px"></img>
        </div>
        <div>
          <h3>Sign In</h3>
        </div>
        <div>
          <h2>Use Your Google Account</h2>
        </div>
      </div>
      <div className="sectionContentTwo">
        <div>
          <TextField
            style={{ width: "80%" }}
            onChange={takeEmail}
            error={objRegex.emailBorder}
            helperText={objRegex.emailHelper}
            size="medium"
            id="outlined-basic"
            label="Email or Phone"
            variant="outlined"
          />
          <div
            style={{
              textAlign: "start",
              marginLeft: "3rem",
              paddingTop: "0.5rem",
            }}
          >
            <Link href="#">Forget email?</Link>
          </div>
        </div>
        <div style={{ paddingTop: "2rem" }}>
          <TextField
            style={{ width: "80%" }}
            onChange={takePassword}
            error={objRegex.passwordBorder}
            helperText={objRegex.passwordHelper}
            size="medium"
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
          <div
            style={{
              textAlign: "start",
              marginLeft: "3rem",
              paddingTop: "0.5rem",
            }}
          >
            <Link href="#">Forget password?</Link>
          </div>
        </div>
        <div className="noteComputer">
          <p>Not your computer? Use Guest mode to sign in privately.</p>
          <Link href="#">Learn more</Link>
        </div>
        <div   className="btn-container">
          <div className="create-btn">
            <Link href="#">Create Account</Link>
          </div>
          <div className="create-btntwo">
            <Button variant="contained" onClick={submitFunction}>
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
