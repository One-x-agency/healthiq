import React from "react";
import "./event.css";
import Photo2 from "../assert/image/photo2.png";
import Photo3 from "../assert/image/photo3.png";
import Photo4 from "../assert/image/photo4.png";
import Photo5 from "../assert/image/photo5.png";
import Photo6 from "../assert/image/photo6.png";
import Photo7 from "../assert/image/photo7.jpeg";
import Photo8 from "../assert/image/photo8.png";
import Photo9 from "../assert/image/photo9.png";
import Photo10 from "../assert/image/photo10.png";
import Photo11 from "../assert/image/photo11.png";
import Photo12 from "../assert/image/photo12.png";
import Photo13 from "../assert/image/photo13.png";
import Photo14 from "../assert/image/photo14.jpeg";
import Logo1 from '../assert/image/logo1.svg'
import Logo2 from '../assert/image/logo2.svg'
import Logo3 from '../assert/image/logo3.svg'
import Logo4 from '../assert/image/logo4.svg'
import Logo5 from '../assert/image/logo5.svg'
import Logo7 from '../assert/image/logo7.svg'





export default function Event() {
  return (
    <div>
      <div className="mainback">
        <div className="container">
          <h1 className="mainh1">Events</h1>
          <p className="mainspan">Providing the best learning experience.</p>
        </div>
      </div>
      <div className="eventcontainer">
        <div>
          <h2 className="maineventh2">Upcoming Event</h2>
        </div>
        <div className="evemainfelxbox">
          <div className="eventfelx">
            <div>
              <h1 className="eventh1">
                Illinois Medical Oncology Society (IMOS)
              </h1>
              <div className="eveboder"></div>
              <div className="eventsecflex">
                <div>
                  <p className="eventfirstp">Date & time</p>
                </div>
                <p className="eventfirstp1">:</p>
                <p className="eventfirstp2">2025-04-11 08:00 AM EST</p>
              </div>
              <div className="eventsecflex">
                <div>
                  <p className="eventfirstp">Location</p>
                </div>
                <p className="eventfirstp1">:</p>
                <p>Le Méridien Chicago – Oakbrook Center!</p>
              </div>
              <div className="eventsecflex">
                <div>
                  <p className="eventfirstp">About</p>
                </div>
                <p className="eventfirstp1">:</p>
                <p>
                  The IMOS Spring Meeting focuses on AI-driven solutions{" "}
                  <br></br> to improve patient education, adherence, and
                  <br></br> outcomes in oncology practice management.
                </p>
              </div>
              <div className="eventsecflex1">
                <div className="eventflex2">
                  <p className="moreinfo">More details>>></p>
                </div>
                <div className="eventflex21">
                  <p className="eventflex3">Register Here</p>
                </div>
              </div>
            </div>
            <div>
              <img className="eventmainphoto" src={Photo2} alt="" />
            </div>
          </div>
        </div>
        <div className="evemainfelxbox">
          <div className="eventfelx">
            <div>
              <img className="eventmainphoto" src={Photo4} alt="" />
            </div>
            <div>
              <h1 className="eventh1">Imperial Palace Walk or Jog</h1>
              <div className="eveboder"></div>
              <div className="eventsecflex">
                <div>
                  <p className="eventfirstp">Date & time</p>
                </div>
                <p className="eventfirstp1">:</p>
                <p className="eventfirstp2">2025-04-04 10:00 AM JST</p>
              </div>
              <div className="eventsecflex">
                <div>
                  <p className="eventfirstp">Location</p>
                </div>
                <p className="eventfirstp1">:</p>
                <p>Japan</p>
              </div>
              <div className="eventsecflex">
                <div>
                  <p className="eventfirstp">About</p>
                </div>
                <p className="eventfirstp1">:</p>
                <p>
                  A very popular event for volunteers of all ages! <br></br>{" "}
                  Choosing a convenient time, participants walk or jog <br></br>
                  around the Imperial Palace for an hour or more,<br></br>{" "}
                  individually or in groups, and get a lovely souvenir <br></br>
                  t-shirt while supporting kids in care!
                </p>
              </div>
              <div className="eventsecflex1">
                <div className="eventflex22">
                  <p className="moreinfo">More details>>></p>
                </div>
                <div className="eventflex22">
                  <p className="eventflex3">Register Here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="eventcontainer1">
          <div>
            <h1 className="eventsecondh1">Events</h1>
          </div>
          <div className="evemainfelxbox1">
            <div className="eventsecondflex">
              <div className="eventsecondflexpart1">
                <h3 className="evesecondh3">Harnessing AI in Oncology </h3>
                <p className="eveboder1"></p>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>Date & time</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem3">
                    2024-12-04 10:00 AM IST
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>Location</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem3">
                    HOSS Practice Administrators Network (PAN) Event
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>About</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem31">
                    The event focused on the integration of AI in <br></br>{" "}
                    oncology to transform patient engagement and<br></br>{" "}
                    education.
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdmore">
                    <p className="eventthirdmore1">
                      <b>More details>>></b>{" "}
                    </p>
                  </div>
                  <div className="eventthirdmore12">
                    <button className="eventbutton" type="">
                      Event Ended
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <img className="eventphoto2" src={Photo3} alt="" />
              </div>
            </div>
          </div>
          <div className="evemainfelxbox1">
            <div className="eventsecondflex">
              <div>
                <img className="eventphoto2" src={Photo5} alt="" />
              </div>
              <div className="eventsecondflexpart1">
                <h3 className="evesecondh3">
                  MDSCO Dinner: Collaborative Innovations in Healthcare{" "}
                </h3>
                <p className="eveboder1"></p>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>Date & time</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem3">
                    2024-12-04 10:00 AM IST
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>Location</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem3">
                    Washington DC, near the White House, USA{" "}
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>About</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem31">
                    A meaningful gathering of healthcare leaders <br></br>{" "}
                    exploring innovation, collaboration, and patient<br></br>{" "}
                    empowerment.{" "}
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdmore">
                    <p className="eventthirdmore1">
                      <b>More details>>></b>{" "}
                    </p>
                  </div>
                  <div className="eventthirdmore12">
                    <button className="eventbutton" type="">
                      Event Ended
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="evemainfelxbox1">
            <div className="eventsecondflex">
              <div className="eventsecondflexpart1">
                <h3 className="evesecondh3">AAPI YPS Fall Retreat 2024</h3>
                <p className="eveboder1"></p>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>Date & time</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem3">
                    2024-11-22 01:00 PM EST
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>Location</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem3">
                    AC Marriot hotel, National Harbor
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>About</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem31">
                    Explore how AI is transforming patient engagement <br></br>{" "}
                    and empowering providers in the healthcare<br></br>{" "}
                    ecosystem.
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdmore">
                    <p className="eventthirdmore1">
                      <b>More details>>></b>{" "}
                    </p>
                  </div>
                  <div className="eventthirdmore12">
                    <button className="eventbutton" type="">
                      Event Ended
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <img className="eventphoto2" src={Photo6} alt="" />
              </div>
            </div>
          </div>
          <div className="evemainfelxbox1">
            <div className="eventsecondflex">
              <div>
                <img className="eventphoto2" src={Photo7} alt="" />
              </div>
              <div className="eventsecondflexpart1">
                <h3 className="evesecondh3">GWAPI Diwali Gala 2024</h3>
                <p className="eveboder1"></p>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>Date & time</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem3">
                    2024-11-16 06:30 PM EST
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>Location</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem3">
                    Greater Washington Association of Physicians of <br></br>{" "}
                    Indian Heritage (GWAPI), Washington DC, USA
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>About</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem31">
                    Discover how HealthIQ.plus is redefining patient<br></br>{" "}
                    education and personalized care through AI-driven<br></br>{" "}
                    innovations.
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdmore">
                    <p className="eventthirdmore1">
                      <b>More details>>></b>{" "}
                    </p>
                  </div>
                  <div className="eventthirdmore12">
                    <button className="eventbutton" type="">
                      Event Ended
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="evemainfelxbox1">
            <div className="eventsecondflex">
              <div className="eventsecondflexpart1">
                <h3 className="evesecondh3">
                  Today’s AI Case Study: Patient Empowerment in Japan
                </h3>
                <p className="eveboder1"></p>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>Date & time</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem3">
                    2024-11-04 10:00 AM JST
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>Location</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem3">
                    Japan International Cooperation Center (JICE),<br></br>{" "}
                    Tokyo, Japan
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>About</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem31">
                    Explore how AI-driven patient education enhances <br></br>{" "}
                    healthcare learning and boosts patient adherence.
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdmore">
                    <p className="eventthirdmore1">
                      <b>More details>>></b>{" "}
                    </p>
                  </div>
                  <div className="eventthirdmore12">
                    <button className="eventbutton" type="">
                      Event Ended
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <img className="eventphoto2" src={Photo8} alt="" />
              </div>
            </div>
          </div>
          <div className="evemainfelxbox1">
            <div className="eventsecondflex">
              <div>
                <img className="eventphoto2" src={Photo9} alt="" />
              </div>
              <div className="eventsecondflexpart1">
                <h3 className="evesecondh3">
                  AI in Cancer Care: Embrace the Change
                </h3>
                <p className="eveboder1"></p>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>Date & time</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem3">
                    2024-05-16 06:15 PM JST
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>Location</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem3">
                    Virtual (HealthIQ Plus Symposium)
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>About</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem31">
                    Learn how AI improves cancer care by personalizing <br></br>{" "}
                    treatments and enhancing outcomes.
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdmore">
                    <p className="eventthirdmore1">
                      <b>More details>>></b>{" "}
                    </p>
                  </div>
                  <div className="eventthirdmore12">
                    <button className="eventbutton" type="">
                      Event Ended
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="evemainfelxbox1">
            <div className="eventsecondflex">
              <div className="eventsecondflexpart1">
                <h3 className="evesecondh3">MDCSCO 2024 Spring Symposium</h3>
                <p className="eveboder1"></p>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>Date & time</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem3">
                    2024-05-15 06:15 PM JST
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>Location</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem3">
                    Merriweather Lakehouse, 10209 Wincopin Circle, <br></br>{" "}
                    Columbia, MD 21044, USA
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>About</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem31">
                    Gain insights into the latest clinical oncology <br></br>{" "}
                    advancements from top experts in the field.
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdmore">
                    <p className="eventthirdmore1">
                      <b>More details>>></b>{" "}
                    </p>
                  </div>
                  <div className="eventthirdmore12">
                    <button className="eventbutton" type="">
                      Event Ended
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <img className="eventphoto2" src={Photo10} alt="" />
              </div>
            </div>
          </div>

          <div className="evemainfelxbox1">
            <div className="eventsecondflex">
              <div>
                <img className="eventphoto2" src={Photo11} alt="" />
              </div>
              <div className="eventsecondflexpart1">
                <h3 className="evesecondh3">GWAPI Spring Fling</h3>
                <p className="eveboder1"></p>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>Date & time</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem3">
                    2024-05-15 06:15 PM JST
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>Location</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem3">
                    Top of the town, 1400 14th St N Arlington, VA 22209{" "}
                    <br></br> United States
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>About</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem31">
                    GWAPI is a forum to facilitate and enable Indian<br></br>{" "}
                    American Physicians to excel in patient care,<br></br>{" "}
                    teaching and research.
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdmore">
                    <p className="eventthirdmore1">
                      <b>More details>>></b>{" "}
                    </p>
                  </div>
                  <div className="eventthirdmore12">
                    <button className="eventbutton" type="">
                      Event Ended
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="evemainfelxbox1">
            <div className="eventsecondflex">
              <div className="eventsecondflexpart1">
                <h3 className="evesecondh3">
                  Comparison of Vonoprazan with other P-CABs
                </h3>
                <p className="eveboder1"></p>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>Date & time</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem3">
                    2024-05-15 06:15 PM JST
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>Location</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem3">
                    Keio University, Tokyo, Japan
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>About</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem31">
                    Explore the benefits and future of Vonoprazan in acid{" "}
                    <br></br> suppression therapies.
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdmore">
                    <p className="eventthirdmore1">
                      <b>More details>>></b>{" "}
                    </p>
                  </div>
                  <div className="eventthirdmore12">
                    <button className="eventbutton" type="">
                      Event Ended
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <img className="eventphoto2" src={Photo12} alt="" />
              </div>
            </div>
          </div>
          <div className="evemainfelxbox1">
            <div className="eventsecondflex">
              <div>
                <img className="eventphoto2" src={Photo13} alt="" />
              </div>
              <div className="eventsecondflexpart1">
                <h3 className="evesecondh3">
                  Vonoprazan: Unveiling the Future of Acid Suppression
                </h3>
                <p className="eveboder1"></p>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>Date & time</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem3">
                    2024-03-26 09:30 PM JST
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>Location</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem3">
                    Tokai University School of Medicine, Kanagawa,<br></br>{" "}
                    Japan
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>About</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem31">
                    Learn about the revolutionary acid suppression drug,
                    <br></br> Vonoprazan.
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdmore">
                    <p className="eventthirdmore1">
                      <b>More details>>></b>{" "}
                    </p>
                  </div>
                  <div className="eventthirdmore12">
                    <button className="eventbutton" type="">
                      Event Ended
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="evemainfelxbox1">
            <div className="eventsecondflex">
              <div className="eventsecondflexpart1">
                <h3 className="evesecondh3">
                  Establishing a Business in Tokyo from the Perspective of a
                  Foreign Entrepreneur
                </h3>
                <p className="eveboder1"></p>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>Date & time</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem3">
                    2024-02-26 03:00 PM JST
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>Location</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem3">
                    Online (Details will be sent via email)
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdflexitem">
                    <p>About</p>
                  </div>
                  <div className="eventthirdflexitem2">
                    <p> :</p>
                  </div>
                  <div className="eventthirdflexitem31">
                    Learn key steps and insights on establishing a <br></br>{" "}
                    business in Tokyo as a foreign entrepreneur.
                  </div>
                </div>
                <div className="eventthirdflex">
                  <div className="eventthirdmore">
                    <p className="eventthirdmore1">
                      <b>More details>>></b>{" "}
                    </p>
                  </div>
                  <div className="eventthirdmore12">
                    <button className="eventbutton" type="">
                      Event Ended
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <img className="eventphoto2" src={Photo14} alt="" />
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
