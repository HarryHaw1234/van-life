import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page-container">
      <h4 className="home-page-title">You got the travel plans, we got the travel vans.</h4>
      <p className="home-page-text">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link to="/vans" className="home-page-link">Find your van</Link>
    </div>
  );
}
