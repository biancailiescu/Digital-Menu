import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "style/Home.css"; 

const Home: React.FC = () => {
  const [language, setLanguage] = useState<string>("English"); 
  const navigate = useNavigate(); 

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value); 
  };

  return (
    <div className="home-container">
      {/* Greeting */}
      <h1 className="welcome-title">Welcome to Our Digital Menu!</h1>
      <p className="welcome-message">
        Choose your preferred language and start your order.
      </p>

      {/* Language Selector */}
      <div className="language-selector">
        <label htmlFor="language">Select Language:</label>
        <select id="language" value={language} onChange={handleLanguageChange}>
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="German">German</option>
        </select>
      </div>

      {/* Start Order Button */}
      <button className="start-order-button" onClick={() => navigate("/menu")}>
        Start Order
      </button>
    </div>
  );
};

export default Home;
