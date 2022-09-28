import { useEffect, useState } from "react";
import { validate } from "email-validator";
import "./Footer.css";

// This is our footer functional component
function Footer() {
  const [inputValue, setInputValue] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  useEffect(() => {
    const validateCheck = validate(inputValue);

    if (validateCheck !== isEmailValid) {
      setIsEmailValid(validate(inputValue));
    }
  }, [inputValue]);

  const openTermsAndConditions = () => {
    console.log("opens terms and conditions");
  };

  const updateInput = (e) => {
    setInputValue(e.target.value);
  };

  const saveEmailAddress = () => {
    if (isEmailValid) {
      console.log("should save this email address: ", inputValue);
    }
  };

  const renderEmailInput = () => {
    return (
      <div className="email-input-container">
        <h3>GET ON THE LIST</h3>
        <div className="email-input">
          <input
            placeholder="Email Address"
            value={inputValue}
            onChange={updateInput}
          />
          <button
            className={`${isEmailValid ? "" : "disabled"}`}
            onClick={saveEmailAddress}
          >
            <span className="material-icons">arrow_forward</span>
          </button>
        </div>
      </div>
    );
  };

  const renderLinksContainer = () => {
    return (
      <div className="footer-links-container">
        <div className="info">
          <p>
            <strong>&copy; 2022 The Herbs</strong>
          </p>
          <button onClick={openTermsAndConditions}>
            Terms &amp; Conditions
          </button>
        </div>
      </div>
    );
  };

  /*
  -container for icons
    -icons
    -copyright + terms and conditions
*/

  return (
    <div className="footer">
      <div className="footer-inner">
        {renderEmailInput()}
        {renderLinksContainer()}
      </div>
      <div className="footer-border"></div>
    </div>
  );
}

export default Footer;
