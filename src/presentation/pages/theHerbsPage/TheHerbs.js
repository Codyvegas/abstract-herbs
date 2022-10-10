import "./TheHerbs.css";
import TheHerb1 from "../../../assets/images/theHerb1.jpg";
import TheHerb2 from "../../../assets/images/theHerb2.jpg";

function TheHerbPage() {
  return (
    <div className="the-herb-page">
      <img src={TheHerb1} alt="" />
      <img src={TheHerb2} alt="" />
    </div>
  );
}

export default TheHerbPage;
