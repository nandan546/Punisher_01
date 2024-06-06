// src/pages/Home.js
import React from 'react';
import '../style/Home.css';
import sampleImage from '../assests/img_1.PNG';
import sampleImage1 from '../assests/img_2.PNG';
import crouselimg1 from '../assests/img_3.PNG';
import crouselimg3 from '../assests/img_4.PNG';
import crouselimg2 from '../assests/img_5.PNG';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



const Home = () => (
    <div>
        <section className="first-section">
            <div className="left-part">
                <h1 className="punisher-coin">Punisher Coin</h1>
                <p>
                    <span>IT'S TIME TO PUNISH THE DICTATORS IN MEMS!</span>
                    <span>LISTING AT 782.35%</span>
                </p>
                <button className="join-button">JOIN PRESALE</button>
                <button className="white-button">WHITE PAPER</button>
            </div>
            <div className="right-part">
                <img src={sampleImage} alt="Sample" className="first-section-image" />
            </div>
        </section>
        <section className="second-section">
    <marquee>
        <div className="row">
            <ul className="col-list"> {/* Changed div to ul */}
                <li className="col">
                    <i className="fas fa-star col-icon"></i>
                    <p className='text_c'>Cute</p>
                </li>
                <li className="col">
                    <i className="fas fa-star col-icon"></i>
                    <p className='text_c'>Evil</p>
                </li>
                <li className="col">
                    <i className="fas fa-star col-icon"></i>
                    <p className='text_c'>Energy</p>
                </li>
                <li className="col">
                    <i className="fas fa-star col-icon"></i>
                    <p className='text_c'>Moon</p>
                </li>
                <li className="col">
                    <i className="fas fa-star col-icon"></i>
                    <p className='text_c'>Punisher</p>
                </li>
                <li className="col">
                    <i className="fas fa-star col-icon"></i>
                    <p className='text_c'>Sniper</p>
                </li>
            </ul>
        </div>
    </marquee>
</section>

        <section className="third-section">
            <div className="card">
                <div className="card-left">
                    <img src={sampleImage1} alt="Sample" className="card-image" />
                </div>
                <div className="card-right">
                    <h1>Legend</h1>
                    <p>
                        In the meme world dominated by Doge, Shiba, Floki,
                        <span>PEPE, and WIF, a legend was brewing in the super</span>
                        <span>secret lab - Punisher Coin. Designed for those who</span>
                        <span>missed the early waves of other meme coins that have</span>
                        <span> already exploded, Punisher Coin is finally out of the</span> 
                        <span>bag as your golden opportunity.</span>
                    </p>
                </div>
            </div>
        </section>
        <section className="fourth-section">
            <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true}>
                <div className="slide">
                    <div className="slide-left">
                        <h1>Slide 1 Title</h1>
                        <p>Description for slide 1.</p>
                    </div>
                    <div className="slide-right">
                        <img src={crouselimg1} alt="Slide 1" />
                    </div>
                </div>
                <div className="slide">
                    <div className="slide-left">
                        <h1>Slide 2 Title</h1>
                        <p>Description for slide 2.</p>
                    </div>
                    <div className="slide-right">
                        <img src={crouselimg3} alt="Slide 2" />
                    </div>
                </div>
                <div className="slide">
                    <div className="slide-left">
                        <h1>Slide 3 Title</h1>
                        <p>Description for slide 3.</p>
                    </div>
                    <div className="slide-right">
                        <img src={crouselimg2} alt="Slide 3" />
                    </div>
                </div>
            </Carousel>
        </section>
        <section className="other-sections">
            <h2>Section 5</h2>
            <p>Content for section 5</p>
        </section>
        <section className="other-sections">
            <h2>Section 6</h2>
            <p>Content for section 6</p>
        </section>
        <section className="other-sections">
            <h2>Section 7</h2>
            <p>Content for section 7</p>
        </section>
        <section className="other-sections">
            <h2>Section 8</h2>
            <p>Content for section 8</p>
        </section>
    </div>
);

export default Home;
