import "./hero.css";
import Header from "../header/header";
import SignIn from "../signIn/signIn";
import { Link } from "react-router-dom"
function Hero() {
  return (
    <div className="HeroSection">
      <Header />
      <div className="heroContent">
        <div className="dashbordData">
            <ul className="dashbordLinks">
              <li><Link to="/DashBord">dashbord</Link></li>
              <li><Link to="/Contracts">cotracts</Link></li>
              <li><Link to="/Engineers">Engineers</Link></li>
              <li><Link to="/Projects">projects</Link></li>
            </ul>
        </div>
        <div className="data-analysis">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Voluptatum facilis veniam voluptatem omnis, vitae reprehenderit molestiae nostrum perferendis, tempora deserunt eum quam.
           Eveniet earum magni neque reiciendis repudiandae animi pariatur!</div>
        <SignIn/>

      </div>
    </div>
  );
}

export default Hero;
