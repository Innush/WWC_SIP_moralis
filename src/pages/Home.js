import React from "react";
import "./Home.css";
//import { Link } from "react-router-dom";
import bg from "../images/frontpagebg3.png";
//import logo from "../images/airbnbRed3.png";
import { ConnectButton } from "web3uikit";

const Home = () => {

  return (
    <>
      <div className="container" style={{ backgroundImage: `url(${bg})` }}>
        <div className="containerGradient"></div>
      </div>
      <div className="topBanner">
        {/* <div>
          <img className="logo" src={logo} alt="logo"></img>
        </div> */}
        <div className="tabs">
          <div className="selected">USDT Pairs</div>
          <div>Deposit</div>
          <div>Withdraw</div>
          <div>About US</div>
        </div>
        <div className="lrContainers">
          <ConnectButton />
        </div>
      
      </div>
    </>
  );
};

export default Home;
