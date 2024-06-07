import React, { useState } from 'react';
import '../style/BuyPage.css';
import buyimg1 from "../assests/img_6.PNG"
import buyimg2 from "../assests/bullet.PNG"
import { TextField } from '@material-ui/core';
const BuyPage = () => {
  const progress = 70; // Progress percentage
  const total = 1000000; // Total data
  const current = (progress / 100) * total; // Current progress in data units\

  const [showSection, setShowSection] = useState(false);

  const toggleSection = () => {
    setShowSection(!showSection);
  };

  const sectionContent = (
    <div className="additional-info">
      <div className="scrollable-section">
        <p>XRP</p>
        <p>TON</p>
        <p>AVAX</p>
        <p>BCH</p>
      </div>
    </div>
  );
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
              <div className="box-row">

                <div className="box">Box 1</div>
                <div className="box">Box 2</div>
                <div className="box">Box 3</div>
                <div className="box">Box 4</div>


              </div>
              <div className="info-card">
                <div className="progress-info">
                  <div className="data-used"> {current}/{total}</div>
                  <div className="progress-percentage">{progress}%</div>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-inner" style={{ width: `${progress}%` }}>
                    <img src={buyimg2} alt="Progress End" className="progress-end-image" />
                  </div>
                </div>
                <div className="exchange-rate">
                  -----------------------------------------<spam className="nan"> $1 USDT = 7,692.30769231 $PUN </spam>-------------------------------------------
                </div>
                <div className="additional-info">
                  <div className="box" style={{ backgroundColor: '#F8F4E3', color: 'black', border: '1px solid black', boxShadow: '0 3px 1px 0px black' }}>Box 1</div>
                  <div className="box" style={{ backgroundColor: '#F8F4E3', color: 'black', border: '1px solid black', boxShadow: '0 3px 1px 0px black' }}>Box 2</div>
                  <div className="box" style={{ backgroundColor: '#F8F4E3', color: 'black', border: '1px solid black', boxShadow: '0 3px 1px 0px black' }}>Box 3</div>
                  <div className="box" style={{ backgroundColor: '#F8F4E3', color: 'black', border: '1px solid black', boxShadow: '0 3px 1px 0px black' }}>Box 4</div>
                  <div className="box" onClick={toggleSection} style={{ backgroundColor: '#DE1E37', width: '100px', color: 'black', border: '1px solid black', boxShadow: '0 3px 1px 0px black' }}>
                    More
                    <span className={`arrow ${showSection ? 'arrow-down' : 'arrow-right'}`}></span>
                  </div>
                  {showSection && sectionContent}

                </div>
                <div className="row-container">
                    <div className="column left-column1">
                      <div className='row-1'>
                      <p>SQL You Pay</p>
                      </div>
                      <div className='row-2'>
                      <input type="text" placeholder="Textbox 1" className="textbox" />
                      </div>
                    </div>
                    <div className="column right-column1">
                    <div className='row-1'>
                      <p>$PUN you recived</p>
                      </div>
                      <div className='row-2'>
                      <input type="text" placeholder="Textbox 1" className="textbox" />
                      </div>
                    </div>
                  </div>
                  <div className="new-section">
                    <div className="new-section-row">
                      <p>Add referal code(optional)</p>
                    </div>
                    <div className="new-section-row">
                      <div className="col-8 half-left">
                        <input type="text" placeholder="Enter text" className="textbox-1" />
                      </div>
                      <div className="col-4 half-right">
                        <button className="action-button">Submit</button>
                      </div>
                    </div>
                  </div>
                  <div className="button-container1">
                    <button className="join-button">How to Buy</button>
                    <button className="white-button">Whitepaper</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='fluid-container'>
      <div className="presale-overview">
          <h1 className='section_header'>Presale Overview</h1>
          <div className="table-container">
              <table>
                  <thead>
                      <tr>
                          <th>Stages</th>
                          <th>SPUN Allocation</th>
                          <th>Stage Price</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Presale Stage I</td>
                          <td>400 Million</td>
                          <td>$0.00270</td>
                      </tr>
                      <tr>
                          <td>Presale Stage II</td>
                          <td>800 Million</td>
                          <td>$0.00300</td>
                      </tr>
                      <tr>
                          <td>Presale Stage III</td>
                          <td>1 Billion</td>
                          <td>$0.00350</td>
                      </tr>
                      <tr>
                          <td>Presale Stage IV</td>
                          <td>1 Billion</td>
                          <td>$0.00400</td>
                      </tr>
                      <tr>
                          <td>Presale Stage V</td>
                          <td>800 Million</td>
                          <td>$0.00500</td>
                      </tr>
                      <tr>
                          <td>Total</td>
                          <td>4 Billion</td>
                         
                      </tr>
                  </tbody>
                  <tfoot>
                      <tr>
                          <td colSpan="3">
                              The listing price of the Punisher Coin (SPUN) after the final Stage V of the presale is set at <strong>$0.0150</strong>
                          </td>
                      </tr>
                  </tfoot>
              </table>
          </div>
         
      </div>
      <div class="ft">
      <footer>
              <a href="#liquidity-locked">Liquidity Locked</a>
              <a href="#buyback-burn">Buyback & Burn</a>
              <a href="#audit-report">Audit Report</a>
          </footer>
      </div>
      </section>
     
      <div className="second-sectionbuy">
        <div className="row-center">
          <p className="red-text">Earn More With Referals</p>
        </div>
        <div className="row-split">
          <div className="card_buy" id="left-card">
            <div className='row'>
            <p>Step1</p>
            <p>Secure connect your wallet</p>
            </div>
           
          </div>
          <div className="card_buy" id="right-card">
            <p>Right Card Content</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BuyPage;
