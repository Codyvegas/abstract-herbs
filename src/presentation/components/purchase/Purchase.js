import "./Purchase.css";
import { Link, Outlet } from "react-router-dom";
import * as helpers from "./helpers.js";

function Purchase() {
  const renderPurchase = () => {
    return <Link to="/"></Link>;
  };

  const purchaseContainer = () => {
    return (
      <div className="purchase-container">
        <h2>BUY HERBS</h2>
        <p>{helpers.buyHerbsText}</p>
        <div className="purchase-button-container">
          <button onClick={helpers.onOgClick}>OG HERBS</button>
          <button onClick={helpers.onAbstractClick}>ABSTRACT HERBS</button>
        </div>
      </div>
    );
  };

  return (
    <div className="purchase">
      {renderPurchase()}
      <div className="purchase-container-buttons">{purchaseContainer()}</div>
      <Outlet />
    </div>
  );
}

export default Purchase;
