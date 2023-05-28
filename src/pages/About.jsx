import { Link } from "react-router-dom";


export default function About() {
  return (
    <div className="about-page-container">
      <img src="public/images/about-hero.png" alt="" className="about-page-image"/>
      <div className="about-page-content">
        <h3>Don’t squeeze in a sedan when you could relax in a van.</h3>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className="about-page-cta">
        <h4>Your destination is waiting.<br/>Your van is ready.</h4>
        <Link className= "link-button" to = "/vans">Explore our vans</Link>
      </div>
    </div>
  );
}
