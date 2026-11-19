import React from "react";
import "./health.css";
import Img from "../assert/image/faq15.webp";
import Logo from "../assert/image/logo.svg";
// import Back from "../assert/image/back.webp";
import Pic from "../assert/image/pic.webp";
import Pic1 from "../assert/image/pic1.jpg";
import Video from "../assert/video/video1.mp4";
import Photo from "../assert/image/photo.webp";
import Pic2 from "../assert/image/pic2.jpg";
import Pic3 from "../assert/image/pic3.jpg";
import Logo1 from "../assert/image/logo1.svg";
import Logo2 from "../assert/image/logo2.svg";
import Logo3 from "../assert/image/logo3.svg";
import Logo4 from "../assert/image/logo4.svg";
import Logo5 from "../assert/image/logo5.svg";
import Logo7 from "../assert/image/logo7.svg";

export default function Health() {
  return (
    <div>
      
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
      <div>
        <img className="img" src={Img} alt="" />
      </div>
      <div className="h1">
        <h1
          className="animate__animated animate__backInDown wow"
          data-wow-offset="400"
        >
          AI-Powered Personalized Interactive <br></br> Healthcare Education
          Platform
        </h1>
      </div>
      <p className="p">
        Our cutting-edge solution is designed to empower medical professionals
        with skill enhancement and <br></br>
        development opportunities, ultimately enhancing the quality of life
        through cost optimization. <br></br>
        We leverage AI, enable transformation, and improve patient outcomes.
      </p>

      <div className="emailbox">
        <div className="box">
          <div className="box1">
            Stay on Top of AI-Driven Industry News & Updates
          </div>
          <div>
            <input className="box2" type="Email" placeholder="Email Address" />
            <button className="submit" type="">
              <span className="animate__animated animate__flipInX wow">
                Register
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="twoback">
        <div className="container1">
          <div className="animate__animated animate__fadeInDown">
            <div className="onegrid">
              <div>
                <img className="img1" src={Pic} alt="" />
              </div>
              <div>
                <h6 className="oneh6">
                  Revolutionizing Healthcare <br></br> Education: HEALTHIQ a
                  Pioneer in<br></br> Personalized Learning
                </h6>
                <p className="onep">
                  Experience the future of healthcare education with HEALTHIQ.
                  We are at the forefront of a revolution, transforming the way
                  healthcare professionals learnand grow. Our commitment to
                  innovation is reshaping the landscape of healthcare education.
                </p>
                <a className="onelink" href="blank">
                  View more
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="animate__animated animate__fadeInUp wow" data-wow-offset="400">
              <div className="onegrid1">
                <div>
                  <h6 className="oneh61">
                    Elevating Healthcare Learning:<br></br> HEALTHIQ Sets the
                    Standard
                  </h6>
                  <p className="onep">
                    At HEALTHIQ, we're not just transforming healthcare
                    education; we're setting the gold standard for<br></br>{" "}
                    personalized learning in the healthcare industry. Our
                    <br></br> commitment to excellence and innovation is at the
                    <br></br> core of everything we do.
                  </p>
                  <a className="onelink" href="blank">
                    View more
                  </a>
                </div>
                <div>
                  <img className="img1" src={Pic1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="secondback">
        <div className="container1">
          <div>
            <video
              src={Video}
              width="1038.21px"
              height="584px"
              controls
            ></video>
          </div>
        </div>
      </div>
      <div className="twoback">
        <div className="container">
          <div className="animate__animated animate__fadeInDown wow" data-wow-offset="400">
            <div className="onegrid">
              <div>
                <img className="img1" src={Pic2} alt="" />
              </div>
              <div>
                <h6 className="oneh6">
                  Redefining Healthcare Education:<br></br> HEALTHIQ at the
                  Forefront
                </h6>
                <p className="onep">
                  Welcome to HEALTHIQ, where we're reshaping the<br></br> future
                  of healthcare education. Our mission is to<br></br> provide
                  innovative solutions that meet the evolving<br></br> needs of
                  healthcare professionals, from medical<br></br>{" "}
                  representatives and medical science liaisons to<br></br>{" "}
                  marketing specialists and healthcare practitioners.
                </p>
                <a className="onelink" href="blank">
                  View more
                </a>
              </div>
            </div>
          </div>
          <div>
            <div
              className="animate__animated animate__fadeInUp wow"
              data-wow-offset="400   "
            >
              <div className="onegrid1">
                <div>
                  <h6 className="oneh61">The Future of Healthcare Learning</h6>
                  <p className="onep">
                    The future of healthcare learning is unfolding before
                    <br></br> us, and HEALTHIQ is leading the way. We envision a
                    <br></br> future where healthcare professionals have access
                    to<br></br> the most advanced tools, knowledge, and
                    resources,<br></br> all designed to improve patient outcomes
                    and <br></br>elevate the quality of care.
                  </p>
                  <a className="onelink" href="blank">
                    View more
                  </a>
                </div>
                <div>
                  <img className="img1" src={Pic3} alt="" />
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
