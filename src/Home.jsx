
//Home.jsx

import React from "react";
import "./App.css"
import { Parallax } from "react-parallax";
import { useMediaQuery } from 'react-responsive';
import C47 from "./assets/C47.jpg";
import P51 from "./assets/P51.jpg";
import B17 from "./assets/B17.jpg";
import F86 from "./assets/F86.jpg";


const Home = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });  // Detect mobile screen

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Makes the scroll smooth
        });
    };


    return (
        <div>
            <div id={"top"}>
                <div className="App-header">
                    <h1 style={{ textAlign: "center", color: "light grey" }}>
                        Antique Military Aircraft in Parallax
                    </h1>

                    <h5 style={{ textAlign: "center", color: "light gray" }}>
                        A Small Webite built by Jonathan Fausset in 2023
                    </h5>
                </div>
            </div>

            <div class="topnav">
                <a href="#airplane">Airplane</a>
                <a href="#jet">Jet</a>
                <a href="#fighter">Fighter Plane</a>
                <a href="#bomber">Bomber</a>
            </div>

            <div className="container">
                {/* C-47 Parallax or Static Image based on screen size */}
                {isMobile ? (
                    <div style={{ backgroundImage: `url(${C47})`, height: "20vh" }}>
                        <div className="parallax">
                            <div style={{ color: "white" }}>
                                <button className="btn" onClick={scrollToTop}>This is an Airplane.</button>
                                <div className="skytrain-text-block">
                                    <h4>Douglas C-47 Skytrain</h4>
                                    <p>This was the workhorse of the 101st Airborne and was converted into DC-3 for civilian use after the war.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Parallax
                        bgImage={C47}
                        strength={200} class="responsive" style={{
                            height: "100vh",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}>
                        <div id="airplane">
                            <div class="parallax">
                                <div style={{ color: "white" }}>
                                    <button class="btn" onClick={scrollToTop}>This is an Airplane.</button>
                                    <div class="skytrain-text-block">
                                        <h4>Douglas C-47 Skytrain</h4>
                                        <p>This was the workhorse of the 101st Airborne and were converted into DC-3 for civilian use after the war.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                )}

                {/* F-86 Parallax */}
                {isMobile ? (
                    <div style={{ backgroundImage: `url(${F86})`, height: "20vh" }}>
                        <div className="parallax">
                            <div style={{ color: "white" }}>
                                <button className="btn" onClick={scrollToTop}>This is a jet.</button>
                                <div className="text-block">
                                    <h4>North American F-86 Sabre</h4>
                                    <p>One of the first fighter jets of post-WWII that brought in the jet age.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Parallax
                        bgImage={F86}
                        strength={200} class="responsive" style={{
                            marginTop: "-1px",
                            height: "100vh",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}>
                        <div id="jet">
                            <div class="parallax">
                                <div style={{ height: 100, color: "white" }}>
                                    <button class="btn" onClick={scrollToTop}>This is a jet.</button>
                                    <div class="text-block">
                                        <h4>North American F-86 Sabre</h4>
                                        <p>One of the first fighter jets of post WWII that brought in the jet age.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                )}

                {/* P-51 Parallax */}
                {isMobile ? (
                    <div style={{ backgroundImage: `url(${P51})`, height: "20vh" }}>
                        <div className="parallax">
                            <div style={{ color: "white" }}>
                                <button className="btn" onClick={scrollToTop}>This is a fighter plane.</button>
                                <div className="text-block">
                                    <h4>North American P-51D Mustang</h4>
                                    <p>Arguably, mainly against Spitfire enthusiasts, the finest fighter plane of the Second World War.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Parallax
                        bgImage=
                        {P51}
                        strength={200} class="responsive" style={{
                            marginTop: "-1px",
                            height: "100vh",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }} >
                        <div id="fighter">
                            <div class="parallax">
                                <div style={{ height: 400, color: "white" }}>
                                    <button class="btn" onClick={scrollToTop}>This is a fighter plane.</button>
                                    <div class="mustang-text-block">
                                        <h4>North American P-51D Mustang</h4>
                                        <p>Arguably, mainly against Spitfire enthusiasts, the finest fighter plane of the Second World War.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                )}

                {/* B-17 Parallax */}
                {isMobile ? (
                    <div style={{ backgroundImage: `url(${B17})`, height: "20vh" }}>
                        <div className="parallax">
                            <div style={{ color: "white" }}>
                                <button className="btn" onClick={scrollToTop}>This is a bomber.</button>
                                <div className="text-block">
                                    <h4>Boeing B-17G Flying Fortress</h4>
                                    <p>Arguably, mainly against Spitfire enthusiasts, the finest fighter plane of the Second World War.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Parallax
                        bgImage=
                        {B17}
                        strength={200} class="responsive" style={{
                            marginTop: "-1px",
                            height: "100vh",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}>
                        <div id="bomber"></div>
                        <div class="parallax">
                            <div style={{ height: 400, color: "white" }}>
                                <button class="btn" onClick={scrollToTop}>This is a bomber.</button>
                                <div class="skytrain-text-block">
                                    <h4>Boeing B-17G Flying Fortress</h4>
                                    <p>Arguably, mainly against Spitfire enthusiasts, the finest fighter plane of the Second World War.</p>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                )}

                <div class="icon-bar">
                    <a href="#top" class="home"><i class="float_button">Back to the Top</i></a>
                </div>

            </div >
            <h3 style={{ textAlign: "center", color: "black", marginTop: "25px" }}>
                This has been an example of Parallax scrolling in React.js. Thanks for stopping by!
            </h3>
        </div >
    );
};

export default Home;


