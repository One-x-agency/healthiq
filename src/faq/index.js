import React from "react";
import "./faq.css";
import Faq1 from "../assert/image/faq.png";
import Flag from '../assert/image/flag.svg'
import Massage from '../assert/image/massage.svg'
import Flag1 from '../assert/image/flag1.svg'
import Flag2 from '../assert/image/flag2.svg'
import Flag3 from '../assert/image/flag3.svg'
import Last from '../assert/image/last.webp'
import Logo1 from '../assert/image/logo1.svg'
import Logo2 from '../assert/image/logo2.svg'
import Logo3 from '../assert/image/logo3.svg'
import Logo4 from '../assert/image/logo4.svg'
import Logo5 from '../assert/image/logo5.svg'
import Logo7 from '../assert/image/logo7.svg'



export default function Faq() {
  return (
    <div>
      <div className="mainback">
        <div className="container">
          <h1 className="mainh1">Overview</h1>
        </div>
      </div>
      <div className="faqmainbox">
        <div className="faqconatiner">
          <div>
            <p className="faqmainp">
              {" "}
              <b className="faqmainh1">Business Name:</b>
              HEALTHIQ Inc.
            </p>
            <p className="faqmainp">
              {" "}
              <b className="faqmainh1">Address:</b>
              1-1-1-930, Higashisuna, Koto-ku, Tokyo 136-0074, JAPAN
            </p>
            <p className="faqmainp">
              {" "}
              <b className="faqmainh1">Contact Information:</b>
              +81 90 3248 0007
            </p>
            <p className="faqmainp">
              {" "}
              <b className="faqmainh1">President and CEO:</b>
              Hemant Kumar Setya
            </p>
          </div>
          <div>
            <h1 className="faqmainh11">Our Innovative Platform</h1>
            <p className="faqmainp1">
              Our innovative platform addresses the significant challenges faced
              by the Healthcare Professionals, Pharma Companies, Medical Device
              Companies and Wholesalers:
            </p>
            <p className="faqmainp11">
              • Information Overload and exponentially expanding Synthetic Data
            </p>
            <p className="faqmainp11">
              • Medical Reps (MR)/Medical Science Liaisons (MSL)/Marketing
              Specialists (MS) skill mismatch with HCP needs
            </p>
            <p className="faqmainp11">
              • Periodic non-personalized carte blanche competency trainings
            </p>
            <p className="faqmainp11">• High burnout/high attrition rates</p>
            <p className="faqmainp11">
              • Inefficiencies/Excessive Costs/Redundancies
            </p>
          </div>
          <div>
            <p className="faqmainp12">
              Using Al to curate the content, leverage feedback, make
              data-driven recommendations to personalize
              Pharma/Wholesaler/Distributors engagements with healthcare
              professionals (HCPs) and promote an improved continuous learning
              journey.
            </p>
            <p className="faqmainp12">
              Our groundbreaking approach elevates the role of Medical Reps
              (MR), MSLs, and Marketing Specialists (MS) leading to enhanced
              opportunities, and higher quality of care through ongoing
              education and skill-building, leading to improved patient
              outcomes.
            </p>
          </div>

          <div className="faqmaingridbox">
            <div>
              <img src={Faq1} alt="" />
            </div>
            <div>
              <h4 className="faqgridh1">
                Global Professional Healthcare <br></br> Education
              </h4>
              <p className="faqgridp">
                Our dedication to empowering healthcare professionals extends{" "}
                <br></br> across the globe, from the vibrant streets of Delhi
                and Tokyo to the <br></br> dynamic urban centers of New York,
                California, and the nation's <br></br> capital, Washington D.C.
                We truly embrace the international <br></br> landscape of modern
                healthcare. At HEALTHIQ, we have embarked on <br></br> a mission
                to redefine the way healthcare professionals learn and <br></br>{" "}
                grow. Our groundbreaking platform leverages the capabilities of{" "}
                <br></br> artificial intelligence to deliver a learning
                experience that is <br></br> personalized, interactive, and
                ever-evolving.
              </p>
            </div>
            <div className="boxlg">
              <p className="faqgridp1">
                We firmly believe that education should be both captivating and
                adaptable, tailored precisely to your individual requirements.
                Join us in embracing the future of healthcare education. Through
                immersive content, real-time data analysis, and adaptive
                learning pathways, HEALTHIQ empowers you to take control of your
                learning journey. Gain access to the latest insights on drugs,
                therapies, diagnostics, and personalized education. Engage with
                a network of like-minded professionals, fostering collaboration
                and opening doors to new opportunities.
              </p>
            </div>
          </div>
        <div className="secondfaqmainbox">
            <div className="secondfaqcontainer">
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
        
        <div className="faqmaingridbox">
            <div>
              <img className="last" src={Last} alt="" />
            </div>
            <div>
              <h4 className="faqgridh1">
                Global Professional Healthcare <br></br> Education
              </h4>
              <p className="faqgridp">
                Our dedication to empowering healthcare professionals extends{" "}
                <br></br> across the globe, from the vibrant streets of Delhi
                and Tokyo to the <br></br> dynamic urban centers of New York,
                California, and the nation's <br></br> capital, Washington D.C.
                We truly embrace the international <br></br> landscape of modern
                healthcare. At HEALTHIQ, we have embarked on <br></br> a mission
                to redefine the way healthcare professionals learn and <br></br>{" "}
                grow. Our groundbreaking platform leverages the capabilities of{" "}
                <br></br> artificial intelligence to deliver a learning
                experience that is <br></br> personalized, interactive, and
                ever-evolving.
              </p>
            </div>
            <div className="boxlg">
              <p className="faqgridp1">
                We firmly believe that education should be both captivating and
                adaptable, tailored precisely to your individual requirements.
                Join us in embracing the future of healthcare education. Through
                immersive content, real-time data analysis, and adaptive
                learning pathways, HEALTHIQ empowers you to take control of your
                learning journey. Gain access to the latest insights on drugs,
                therapies, diagnostics, and personalized education. Engage with
                a network of like-minded professionals, fostering collaboration
                and opening doors to new opportunities.
              </p>
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
