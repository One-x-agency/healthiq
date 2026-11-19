import React from "react";
import './sign.css'
import Login1 from '../assert/image/login.webp'
import Logo1 from '../assert/image/logo1.svg'
import Logo2 from '../assert/image/logo2.svg'
import Logo3 from '../assert/image/logo3.svg'
import Logo4 from '../assert/image/logo4.svg'
import Logo5 from '../assert/image/logo5.svg'
import Logo7 from '../assert/image/logo7.svg'
import Logo from "../assert/image/logo.svg";


export default function Sign() {
    return(
        <div>
            <div className="mainheader">
           <div className="mainflex123">
        <div className="mainback123">
          <img className="logo" src={Logo} alt="" />
        </div>
        <div className="mainflex1">
          <div>
            <p className="mainp">
              <b><a className="a" href="">Home</a></b>{" "}
            </p>
          </div>
          <div>
            <p className="mainp1">
              <b>Solutions</b>{" "}
            </p>
          </div>
          <div>
            <p className="mainp1">
              <b>Events</b>{" "}
            </p>
          </div>
          <p className="mainp1">
            <b>FAQ</b>{" "}
          </p>
          <p className="mainp1">
            <b>About Us</b>{" "}
          </p>
          <p className="mainp1">
            <b>Contact Us</b>{" "}
          </p>
          <div className="mainflex2">
            <div>
              <button className="mainbox" type="">
                Login
              </button>
            </div>
            <div>
              <button className="mainbox" type="">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
           <div className="logingrid">
                <div>
                  <img className="login" src={Login1} alt="" />  
                </div>
                <div className="loginpage">
                    <div>
                        <h1 className="loginh1">Sign UP</h1>
                        <label for="email" className="loginp">Full Name*</label>
                        <input type="email" label="email" className="inputlogin" placeholder="Enter your full name"/>
                        <label for="email" className="loginp23">Email *</label>
                        <input type="email" label="email" className="inputlogin" placeholder="Enter your email"/>
                       </div>
                       <label for="password" className="loginp23">password*</label>
                       <input type="password" id="pwd" name="pwd" minlength="8"  className="inputlogin" placeholder="Enter your password"/>
                       <label for="password" className="loginp23">confirm password*</label>
                       <input type="password" id="pwd" name="pwd" minlength="8"  className="inputlogin"placeholder="Confirm your password"/>
                      <div>
                      <label for="password" className="loginp23">Select Role*</label>
                      <input type="select" className="inputlogin" placeholder="select"/>
                    </div>
                    <div className="signcheckbox">
                    <input className="signcheckbox1" type="checkbox" name ="" value=""/>
                    <span className="signcheckbox2">I agree with the <a className="signlink" href="">Terms & Conditions & Privacy & Cookies Policy</a> </span>
                    </div>
                   <button className="signbutton" type="submit">Login</button>
                    <div>
                        <p className="signp">Already have an account? <a href="" className="signlink">Login</a></p>
                    </div>
                </div>
       </div>
       <div className="footer">
        <div className="container3">
            <div className="footerback">
            <div className="footergrid">
           <div>
              <img className="footerlogo1" src={Logo1} alt="" />
              <p className="footerp">
                HEALTHIQ is an AI-powered healthcare <br></br> education platform,
                providing<br></br> personalized learning and real-time<br></br> industry insights
                for healthcare <br></br>professionals.
              </p>
            </div>
            <div className="footergrid1">
           <div>
            <p className="footerp23">Home</p>
            <p className="footerp23">Services</p>
            <p className="footerp23">Vision & Mission</p>
            <p className="footerp23">Blogs</p>
            <p className="footerp23">Doctor Consultation</p> 
            </div>
            <div>
                <p className="footerp23">Courses</p>
                <p className="footerp23">FAQ</p>
                <p className="footerp23">About</p>
                <p className="footerp23">Investor Relations</p>
                <p className="footerp23">Cookie preferences</p>
            </div>
            <div>
                <p  className="footerp23">Jobs</p>
                <p  className="footerp23">Legal Notices</p>
                <p  className="footerp23">Speed Test</p>
                <p  className="footerp23">Help Center</p>
                <p  className="footerp23">Account</p>
                </div>
                <div>
                <p className="footerp23">Follow us</p>
                <div className="footergrid2"> 
                <div><p><img src={Logo2} alt=""/></p> </div>
                <div><p><img src={Logo3} alt=""/></p></div> 
                <p><img src={Logo4} alt=""/></p>
                <p><img src={Logo5} alt=""/></p>
                <p><img src={Logo7} alt=""/></p>
                 </div>
                </div> 
              </div>
             </div>
             </div>
             <div>
           <p className="footerp1">HEALTHIQ Inc. All Rights Reserved © Copyright | Privacy Policy | Website Disclaimer |  </p>  
             </div>
        </div>
      </div>
       
       
        </div>
    )
}