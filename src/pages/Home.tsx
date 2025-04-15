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
    <div className="home-bg">
      <div className="home-card">
        <h1 className="home-title">Welcome to <span className="brand">Digital Menu</span></h1>
        <p className="home-subtitle">
          Discover our menu!
        </p>
        <div className="language-row">
          <label htmlFor="language" className="language-label">Language:</label>
          <select
            id="language"
            value={language}
            onChange={e => setLanguage(e.target.value)}
            className="language-select"
          >
            <option value="English">English</option>
            <option value="French">Français</option>
            <option value="Spanish">Español</option>
            <option value="German">Deutsch</option>
          </select>
        </div>
        <button className="start-order-btn" onClick={() => navigate("/menu")}>
          Start Your Order
        </button>
      </div>
      <footer className="home-footer">
        <span>© 2025 Digital Menu</span>
      </footer>
    </div>
  );
};

export default Home;
