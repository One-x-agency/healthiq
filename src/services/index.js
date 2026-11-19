import React from "react";
import "./services.css";
import Photo1 from "../assert/image/photo1.png";
import Logo1 from '../assert/image/logo1.svg'
import Logo2 from '../assert/image/logo2.svg'
import Logo3 from '../assert/image/logo3.svg'
import Logo4 from '../assert/image/logo4.svg'
import Logo5 from '../assert/image/logo5.svg'
import Logo7 from '../assert/image/logo7.svg'
import Ser from '../assert/image/ser.webp'
import Ser1 from '../assert/image/ser1.jpg'
import Ser2 from '../assert/image/ser2.jpg'
import Ser3 from '../assert/image/ser3.webp'
import Ser4 from '../assert/image/ser4.jpg'
import Ser5 from '../assert/image/ser5.png'
import Ser6 from '../assert/image/ser6.png'
import Ser7 from '../assert/image/ser7.png'


export default function Services() {
  return (
    <div>
      <div className="mainback">
        <div className="container">
          <h1 className="mainh1">Services</h1>
          <p className="mainspan">All Services</p>
        </div>
      </div>
      <div className="servicesmainback">
        <div className="container">
          <div>
            <h1 className="mainh11">Education & Training Services</h1>
          </div>
          <div className="servicesgrid">
            <div className="servicesgriditem">
              <div>
                <img className="serphoto" src={Photo1} alt="" />
                <div className="sermaindiv">
                  <h3 className="serh3">Healthcare Education Services</h3>
                  <p className="sermainp"><b>
                    In the ever-evolving healthcare landscape,<br></br>{" "}
                    knowledge is your most valuable asset. Our<br></br>{" "}
                    Healthcare Education Services are designed...</b>
                  </p>
                  <span className="serread">
                    <b> Read more >>></b>
                  </span>
                  <p>
                    {" "}
                    <button className="serbutton" type="submit">
                      <b> Reach Out</b>
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="servicesgriditem">
              <div>
                <img className="serphoto" src={Ser} alt="" />
                <div className="sermaindiv">
                  <h3 className="serh3">AI-Powered Learning Solutions</h3>
                  <p className="sermainp"> <b>
                    Our AI-Powered Learning Solutions revolutionize the way
                    knowledge is acquired. Harnessing the potential of
                    artificial intelligence, we offer personalized and...</b>
                  </p>
                  <span className="serread">
                    <b> Read more >>></b>
                  </span>
                  <p>
                    {" "}
                    <button className="serbutton" type="submit">
                      <b> Reach Out</b>
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="servicesgriditem">
              <div>
                <img className="serphoto" src={Ser1} alt="" />
                <div className="sermaindiv">
                  <h3 className="serh3">Pharmaceutical Training</h3>
                  <p className="sermainp">
                    <b>In the fast-paced and highly competitive world of pharmaceuticals, inadequate and suboptimal training can have far-reaching consequences.</b>
                  </p>
                  <span className="serread">
                    <b> Read more >>></b>
                  </span>
                  <p>
                    {" "}
                    <button className="serbutton" type="submit">
                      <b> Reach Out</b>
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="servicesgriditem1">
              <div>
                <img className="serphoto" src={Ser2} alt="" />
                <div className="sermaindiv">
                  <h3 className="serh3">Continuing Medical Education <br></br> (CME)</h3>
                  <p className="sermainp">
                   <b> At HEALTHIQ , we understand the importance of ongoing professional development for healthcare practitioners. We're dedicated to providing high-...
                   </b>
                  </p>
                  <span className="serread">
                    <b> Read more >>></b>
                  </span>
                  <p>
                    {" "}
                    <button className="serbutton1" type="submit">
                      <b> Reach Out</b>
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="servicesgriditem1">
              <div>
                <img className="serphoto" src={Ser3} alt="" />
                <div className="sermaindiv">
                  <h3 className="serh3">Industry Experts Endorsed <br></br> Content</h3>
                  <p className="sermainp"><b>At HEALTHIQ, we understand that each <br></br> pharmaceutical company has unique training  <br></br>needs. That's why we've revolutionized the way </b>
                  </p>
                  <span className="serread">
                    <b> Read more >>></b>
                  </span>
                  <p>
                    {" "}
                    <button className="serbutton1" type="submit">
                      <b> Reach Out</b>
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="servicesgriditem1">
              <div>
                <img className="serphoto" src={Ser4} alt="" />
                <div className="sermaindiv">
                  <h3 className="serh3">Round-the-clock service, 365 days,<br></br> 7 days a week</h3>
                  <p className="sermainp">
                   <b>At HEALTHIQ, our commitment to your success knows no boundaries. Our platform is available 24 hours a day, 365 days a year, ensuring you have access to </b>
                  </p>
                  <span className="serread">
                    <b> Read more >>></b>
                  </span>
                  <p>
                    {" "}
                    <button className="serbutton1" type="submit">
                      <b> Reach Out</b>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="mainh11">Project Consulting Services</h1>
          </div>
        <div className="servicesgrid">
          <div className="servicesgriditem">
          <div>
                <img className="serphoto" src={Ser5} alt="" />
                <div className="sermaindiv">
                  <h3 className="serh3">Content Creational Services</h3>
                  <p className="sermainp"><b>
                  Content lies at the core of effective healthcare education. At HEALTHIQ, we blend cutting-edge AI technology with human expertise to craft ...</b>
                  </p>
                  <span className="serread">
                    <b> Read more >>></b>
                  </span>
                  <p>
                    {" "}
                    <button className="serbutton" type="submit">
                      <b> Reach Out</b>
                    </button>
                  </p>
                </div>
              </div>
          </div>
          <div className="servicesgriditem">
          <div>
                <img className="serphoto" src={Ser6} alt="" />
                <div className="sermaindiv">
                  <h3 className="serh3">Content Delivery Management</h3>
                  <p className="sermainp"><b>
                  At HEALTHIQ, we understand the critical role content plays in healthcare education. Our platform offers comprehensive solutions for content delivery and...</b>
                  </p>
                  <span className="serread">
                    <b> Read more >>></b>
                  </span>
                  <p>
                    {" "}
                    <button className="serbutton" type="submit">
                      <b> Reach Out</b>
                    </button>
                  </p>
                </div>
              </div>
          </div>
          <div className="servicesgriditem">
          <div>
                <img className="serphoto" src={Ser7} alt="" />
                <div className="sermaindiv">
                  <h3 className="serh3">Ongoing Adoption Management</h3>
                  <p className="sermainp"><b>
                  At HEALTHIQ, we understand that the successful adoption of our solutions is just as crucial as their implementation. Our Ongoing Adoption &...</b>
                  </p>
                  <span className="serread">
                    <b> Read more >>></b>
                  </span>
                  <p>
                    {" "}
                    <button className="serbutton" type="submit">
                      <b> Reach Out</b>
                    </button>
                  </p>
                </div>
              </div>
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
