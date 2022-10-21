import "./TheHerbs.css";
import OgKing from "../../../assets/images/og_king.jpg";
import DevilKing from "../../../assets/images/devil_king.jpg";
import { Link, Outlet } from "react-router-dom";

function TheHerbPage() {
  return (
    <div className="herb-container">
      <Link to="/og-herbs">
        <img src={OgKing} alt="" />
      </Link>
      <Link to="/abstract-herbs">
        <img src={DevilKing} alt="" />
      </Link>
      <Outlet />
    </div>
  );
}

export default TheHerbPage;
