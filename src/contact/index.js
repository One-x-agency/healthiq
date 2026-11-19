import React from "react";
import "./contact.css";
import Flag1 from '../assert/image/flag1.svg'
 import Flag2 from '../assert/image/flag2.svg'
 import Flag3 from '../assert/image/flag3.svg'
 import Flag from '../assert/image/flag.svg'
import Massage from '../assert/image/massage.svg'
import Logo1 from '../assert/image/logo1.svg'
import Logo2 from '../assert/image/logo2.svg'
import Logo3 from '../assert/image/logo3.svg'
import Logo4 from '../assert/image/logo4.svg'
import Logo5 from '../assert/image/logo5.svg'
import Logo7 from '../assert/image/logo7.svg'


export default function Conatact() {
  return (
    <div>
      <div className="mainback">
        <div className="container">
          <h1 className="mainh1">Contact Us</h1>
          <p className="mainspan">
            We are here to help. Please let us know what you need.
          </p>
        </div>
      </div>
      <div className="contactmain">
        <div className="contactcontainer">
          <div className="contactmaingrid">
            <div>
              <label className="inputlabel" for="">
                Full Name{" "}
              </label>
              <div>
                <input
                  type="name"
                  className="inputbox"
                  placeholder="Enter your full name"
                />
              </div>
            </div>
            <div>
              <label className="inputlabel" for="">
                Phone Number
              </label>
              <div>
                <input
                  type="number"
                  className="inputbox"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div>
              <label className="inputlabel" for="">
                Phone Number
              </label>
              <div>
                <input
                  type="email"
                  className="inputbox"
                  placeholder="Enter your Email"
                />
              </div>
            </div>
            <div>
              <label className="inputlabel" for="">
                Inquiry for*
              </label>
              <div>
                <input
                  type="select"
                  className="inputbox"
                  placeholder="Your question is related to?"
                />
              </div>
            </div>
            <div>
              <label className="inputlabel" for="">
                Timezone*
              </label>
              <div>
                <input
                  type="select"
                  className="inputbox"
                  placeholder="Asia/Calcutta"
                />
              </div>
            </div>
            <div>
              <label className="inputlabel" for="">
                Source*
              </label>
              <div>
                <input
                  type="select"
                  className="inputbox"
                  placeholder="Where did you get to know us ?"
                />
              </div>
            </div>
            <div>
              <label className="inputlabel" for="">
                Tell us about your request *
              </label>
              <div>
                <input
                  type="name"
                  className="inputbox1"
                  placeholder="Enter here..."
                />
              </div>
            </div>

            <div>
              <label className="inputlabel" for="">
                Language*
              </label>
              <div>
                <input
                  type="select"
                  className="inputbox"
                  placeholder="Select your prefered language"/>
              </div>
            </div>
          </div>
        <div className="checkboxgrid">
            <div>
                <input className="checkbox" type="checkbox" name="" value="" />
            </div>
       <div >
       <p className="checkboxp">I agree with the Terms & Conditions and the Privacy & Cookies Policy of and any applicable Terms and Conditions of AI Powered <br></br> Personalized Healthcare Education. This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p> 
       </div>
       </div>
        <div className="buttonflex">
            <div>
                <button className="buttonflexbutton" type="submit">Schedule for Demo</button>
            </div>
            <div>
                <button className="buttonflexbutton1" type="submit">Send</button>
            </div>
        </div>
        </div>
      </div>
      <div className="secondcontactmainbox">
            <div className="secondcontactcontainer">
               <div className="faqmainflex4">
                <div>
                <h2 className="faqmainflexh1">Contacts</h2>     
                </div>
                <div className="faqmainflex2">
                    <div>
                      <img className="faqimage" src={Flag} alt="" />
                    </div>
                    <div className="faqflexp">
                    +1 334 316 0687
                    </div>
                    </div>
                    <div className="faqmainflex2">
                    <div>
                     <img className="faqimage" src={Flag1} alt="" /> 
                    </div>
                    <div className="faqflexp">
                    +81 90 3248 0007
                    </div>
                    </div>
                    <div className="faqmainflex2">
                    <div>
                     <img className="faqimage"  src={Flag2} alt="" /> 
                    </div >
                    <div className="faqflexp">
                    +61 3 9018 6733
                    </div>
                    </div>
                    <div className="faqmainflex2">
                    <div>
                     <img className="faqimage"  src={Flag3} alt="" /> 
                    </div>
                    <div className="faqflexp">
                    +91 98 110 56551
                    </div>
                    </div>
                  </div>
                  <div className="faqmainflex">
                <div>
                <h2 className="faqmainflexh2">E-mails
                </h2>     
                </div>
                <div className="faqmainflex3">
                    <div>
                    <img className="massage" src={Massage} alt="" />
                    </div>
                    <div className="faqflexp">
                    sales@healthiq.plus
                    </div>
                    </div>
                    <div className="faqmainflex3">
                    <div>
                       <img className="massage" src={Massage} alt="" /> 
                    </div>
                    <div className="faqflexp">
                    support@healthiq.plus
                    </div>
                    </div>
                    <div className="faqmainflex3">
                    <div>
                       <img className="massage" src={Massage} alt="" /> 
                    </div>
                    <div className="faqflexp">
                    info@healthiq.plus
                    </div>
                    </div>
                  </div>
             </div>
        </div>
      <div className="contactmain1">
        <div className="contactcontainer1">
            <div>
                <h1 className="lasth1">Availability</h1>
                <p className="lastp">Reps available in most time zones: Tokyo, US, Australia and India</p>
            </div>
        <div className="lastgrid">
           <div className="lastgriditem">
            <p className="lastgridp">Monday</p>
            <p className="lastgridp1"></p>
            <p className="lastgridp3">9:00 AM - 6:00 PM</p>
           </div>
           <div className="lastgriditem">
            <p className="lastgridp">Tuesday</p>
            <p className="lastgridp1"></p>
            <p className="lastgridp3">9:00 AM - 6:00 PM</p>
           </div>
           <div className="lastgriditem">
            <p className="lastgridp">Wednesday</p>
            <p className="lastgridp1"></p>
            <p className="lastgridp3">9:00 AM - 6:00 PM</p>
           </div>
           <div className="lastgriditem">
            <p className="lastgridp">Thursday</p>
            <p className="lastgridp1"></p>
            <p className="lastgridp3">9:00 AM - 6:00 PM</p>
           </div>
           <div className="lastgriditem">
            <p className="lastgridp">Friday</p>
            <p className="lastgridp1"></p>
            <p className="lastgridp3">9:00 AM - 6:00 PM</p>
           </div>
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
  );
}
