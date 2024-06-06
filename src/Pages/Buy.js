import React from 'react';
import '../style/BuyPage.css';
import buyimg1 from "../assests/img_6.PNG"
const BuyPage = () => {
  return (
    <div className="buy-page">
      <div className="buyfirst-section">
        <div className="columns">
          <div className="column left-column">
            <div className="image-container">
              <img src={buyimg1} alt="Product" className="product-image" />
              <div className="card" id="buycard">
                <div className="card-content" id='card-content'>
                  <h3> Current Phase</h3>
                  <h3 className="stage-title">Presale Stage 1</h3>
                  <p className="description">
                    It's Time to Punish the Dictators inMeme!<br />
                    Listing at 782.35%
                  </p>
                  <div className="button-container">
                  <button className="join-button">How to Buy</button>
                <button className="white-button">Whitepaper</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column right-column">
            <div className="details-container">
              <h2>Product Title</h2>
              <p>Product description goes here. Include features, benefits, and any other relevant information.</p>
              <button className="buy-button">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyPage;
