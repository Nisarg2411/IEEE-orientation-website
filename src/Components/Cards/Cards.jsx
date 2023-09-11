import React from "react";
import "./Cards.css";
import Hetanshi from "../../Assets/member-img/HetanshiAcharya.jpeg";
import Arjun from "../../Assets/member-img/ArjunKargathara.jpg";
import Athira from "../../Assets/member-img/AthiraRajeev.png";
import Chaitanya from "../../Assets/member-img/ChaitanyaParmar.jpg";
import Darshan from "../../Assets/member-img/DarshanMakvana - Darshan Makwana.png";
import Dev from "../../Assets/member-img/Dev Makwana - Dev Makwana.png";
import Mahek from "../../Assets/member-img/MahekShah.jpg";
import Manav from "../../Assets/member-img/ManavMehta.jpg";
import Meet from "../../Assets/member-img/MeetDhandhukiya.png";
import Mitali from "../../Assets/member-img/MitaliSonar.png";
import Naisargi from "../../Assets/member-img/NaisargiSharma.jpeg";
import Nandini from "../../Assets/member-img/NandaniNagar.png";
import Netri from "../../Assets/member-img/NetriTrivedi.jpg";
import Parth from "../../Assets/member-img/ParthKadiya.png";
import Poonam from "../../Assets/member-img/PoonamSonawane.png";
import Rahil from "../../Assets/member-img/Prajapati Rahil.jpg";
import Rudra from "../../Assets/member-img/RudraJogani.png";
import Tirth from "../../Assets/member-img/TIRTHGAJERA.png";
import Yash from "../../Assets/member-img/YashShah.jpg";
import Tirthb from "../../Assets/member-img/tirthbhayani.jpeg";
import Nisarg from "../../Assets/member-img/Nisarg Kansara.png";
import Amit from "../../Assets/member-img/Amit Gohel.jpg";
import Ansh from "../../Assets/member-img/Ansh Patel.JPG";
import Stuti from "../../Assets/member-img/STUTI DAVE.jpg";
import Tushar from "../../Assets/member-img/Tushar kalathiya.jpg";
import Vikash from "../../Assets/member-img/VIKASH KUMAVAT.png";
import Yashaswi from "../../Assets/member-img/Yashaswi Garg.jpg";
import kamal from  "../../Assets/member-img/kamal Majethiya.jpg";
import Hirva from "../../Assets/member-img/Hirva Mehta.png";
import Darpan from "../../Assets/member-img/Darpan.jpg";
import Dalal from "../../Assets/member-img/H N Dalal.jpg";
import kaul from "../../Assets/member-img/Kamakshi Kaul.jpg";
import Jashvant from "../../Assets/member-img/Jashvant.JPG";
import Naresh from "../../Assets/member-img/Naresh Patel.jpg";
import Jigna from "../../Assets/member-img/Jigna jadav.jpg";
import unknown from "../../Assets/member-img/unknown.png"
import Hiren from "../../Assets/member-img/Hiren Mehta.jpg";
import Bhavin from "../../Assets/member-img/bhavin patel.jpg";

const Cards = () => {
  return (
    <div>
      <div className="row">
        <div id="portfolio">
          <div className="container">
          <h1 className="text-center text-zinc-50 hover:underline cursor-pointer">
            VGEC IEEE Executive Members
            </h1>
            <div className="work-list">
              <div className="work">
                <img src={Hiren} alt="" className="img-2" height="300px" width="200px" />
                <div className="layer">
                  <h3 className="text-slate-200">Prof. Hiren Mehta</h3>
                  <p>Electrical Engineering</p>
                </div>
              </div>
              <div className="work">
                <img src={Jigna} alt="" className="img-2" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Ms. Jigna jadav</h3>
                  <p>Computer Engineering</p>
                </div>
              </div>
            </div>

          <h1 className="text-center text-zinc-50 hover:underline cursor-pointer">
            VGEC IEEE Faculty Coordinators
            </h1>
            <div className="work-list">
              <div className="work">
                <img src={Jashvant} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Prof. jashvant Dave</h3>
                  <p>Information and Technology</p>
                </div>
              </div>
              <div className="work">
                <img src={kaul} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Prof. Kamakshi Kaul</h3>
                  <p>Electronics and Instrumentation </p>
                </div>
              </div>
              <div className="work">
                <img src={Bhavin} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Mr. Bhavin Patel</h3>
                  <p>Computer Engineering</p>
                </div>
              </div>
            </div>
            <div className="work-list">
              <div className="work">
                <img src={Dalal} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Prof. Hetal Dalal</h3>
                  <p>Information and Communication</p>
                </div>
              </div>
              <div className="work">
                <img src={Naresh} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Prof. Naresh Patel</h3>
                  <p>Electronics and Communication</p>
                </div>
              </div>
              <div className="work">
              <img src={unknown} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Prof. N. D. Mehta</h3>
                  <p>Computer and engineering</p>
                </div>
                </div>
            </div>
            <h1 className="text-center text-zinc-50 hover:underline cursor-pointer">
            VGEC IEEE Student Members
            </h1>
            <div className="work-list">
              <div className="work">
                <img src={Hetanshi} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Hetanshi Acharya</h3>
                  <p>IEEE - Vgec sb chair</p>
                </div>
              </div>
              <div className="work">
                <img src={Arjun} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Arjun Kargathara</h3>
                  <p>IEEE - Vgec sb treasurer</p>
                </div>
              </div>
              <div className="work">
                <img src={Naisargi} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Naisargi Sharma</h3>
                  <p>IEEE - Vgec sb Vice chair</p>
                </div>
              </div>
            </div>
            <div className="work-list">
              <div className="work">
                <img src={Hirva} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Hirva Mehta</h3>
                  <p>CE</p>
                </div>
              </div>
              <div className="work">
                <img src={Darpan} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Darpan Sarda</h3>
                  <p>CE</p>
                </div>
              </div>
              <div className="work">
                <img src={Amit} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Amit Gohel</h3>
                  <p>CE</p>
                </div>
              </div>
            </div>
            <div className="work-list">
              <div className="work">
                <img src={Nisarg} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Nisarg Kansara</h3>
                  <p>CE</p>
                </div>
              </div>
              <div className="work">
                <img src={Mitali} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Mitali Sonar</h3>
                  <p>CE</p>
                </div>
              </div>
              <div className="work">
                <img src={unknown} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Karan Lodha</h3>
                  <p>CE</p>
                </div>
              </div>
            </div>
            <div className="work-list">
              <div className="work">
                <img src={Manav} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Manav Mehta</h3>
                  <p>CE</p>
                </div>
              </div>
              <div className="work">
                <img src={Parth} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Parth Kadiya</h3>
                  <p>CE</p>
                </div>
              </div>
              <div className="work">
                <img src={Poonam} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Poonam Sonawane</h3>
                  <p>CE</p>
                </div>
              </div>
            </div>
            <div className="work-list">
              <div className="work">
                <img src={Chaitanya} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Chaitanya Parmar</h3>
                  <p>CE</p>
                </div>
              </div>
              <div className="work">
                <img src={Dev} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Dev Makwana</h3>
                  <p>CE</p>
                </div>
              </div>
              <div className="work">
                <img src={Athira} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Athira Rajeev</h3>
                  <p>EC</p>
                </div>
              </div>
            </div>
            <div className="work-list">
              <div className="work">
                <img src={Darshan} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Darshan Makwana</h3>
                  <p>EC</p>
                </div>
              </div>
              <div className="work">
                <img src={Netri} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Netri Trivedi</h3>
                  <p>EC</p>
                </div>
              </div>
              <div className="work">
                <img src={Nandini} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Nandani Nagar</h3>
                  <p>EC</p>
                </div>
              </div>
            </div>
            <div className="work-list">
              <div className="work">
                <img src={Mahek} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Mahek Shah</h3>
                  <p>EC</p>
                </div>
              </div>
              <div className="work">
                <img src={Yash} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Yash Shah</h3>
                  <p>EC</p>
                </div>
              </div>
              <div className="work">
                <img src={Stuti} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Stuti Dave</h3>
                  <p>EC</p>
                </div>
              </div>
            </div>
            <div className="work-list">
              <div className="work">
                <img src={Yashaswi} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Yashaswi Garg</h3>
                  <p>EC</p>
                </div>
              </div>
              <div className="work">
                <img src={Tirthb} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Tirth Bhayani</h3>
                  <p>IT</p>
                </div>
              </div>
              <div className="work">
                <img src={kamal} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Kamal Majethiya</h3>
                  <p>IT</p>
                </div>
              </div>
            </div>
            <div className="work-list">
              <div className="work">
                <img src={Rahil} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Prajapati Rahil</h3>
                  <p>IT</p>
                </div>
              </div>
              <div className="work">
                <img src={Rudra} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Rudra jogani</h3>
                  <p>IT</p>
                </div>
              </div>
              <div className="work">
                <img src={Tirth} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Tirth Gajera</h3>
                  <p>IT</p>
                </div>
              </div>
            </div>
            <div className="work-list">
              <div className="work">
                <img src={Tushar} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Tushar Kalthiya</h3>
                  <p>IT</p>
                </div>
              </div>
              <div className="work">
                <img src={Meet} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Meet Dhandhukiya</h3>
                  <p>IT</p>
                </div>
              </div>
              <div className="work">
                <img src={Ansh} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Ansh Patel</h3>
                  <p>IT</p>
                </div>
              </div>
            </div>
            <div className="work-list">
              <div className="work">
                <img src={Vikash} alt="" height="300px" />
                <div className="layer">
                  <h3 className="text-slate-200">Vikas Kumavat</h3>
                  <p>E&I</p>
                </div>
              </div>
              <div className="work">
              </div>
              <div className="work">
              </div>
            
    </div>
    </div>
    </div>
    </div>
    </div>
       
  );
};

export default Cards;
