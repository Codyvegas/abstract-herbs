import "./artistPage.css";
import artistDavidImg from "../../../assets/images/artist_david.jpg";
import artistHerbImg1 from "../../../assets/images/artist_herb1.jpg";
import artistHerbImg2 from "../../../assets/images/artist_herb2.jpg";
import {david, description, endingParagraph} from "./constants";

// import Header from "./presentation/components/header/Header";
// import Footer from "./presentation/components/footer/Footer";

function ArtistPage() {
  return (
  <div className="artist-page">
    <img className="welcome-img" src={artistDavidImg} alt="" />
    <h1>{david}</h1>
        <p>{description}</p> 
    <br />
    
    <p>{endingParagraph}</p>
    <img className="herb-img-1" src={artistHerbImg1} alt="" />
    <img className="herb-img-2" src={artistHerbImg2} alt="" />    
  </div>; 

)}

export default ArtistPage;
