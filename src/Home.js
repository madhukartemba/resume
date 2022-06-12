import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import mountains_behind from './images/mountains_behind.png';
import stars from './images/stars.png';
import myimage from './images/mypic.png'

import reactlogo from './images/reactlogo.png';

function Home(props) {

    let mountains_style = {};

    let stars_style = {};

    let p_move = "";


    function limitRange(val, low = -60, high = 60) {
        return Math.max(low, Math.min(val, high));
    }

    if (props.hasgyro) {
        stars_style = {
            transform: "scale(" + (3 + props.scroll / 100) + ") translateX(" + props.gyro[0] + "px) translateY(" + props.gyro[1] + "px)  rotateZ(" + props.gyro[2] + "deg)",

        }

        p_move = " translateX(" + limitRange(props.gyro[0] / 3) + "px) translateY(" + limitRange(props.gyro[1] / 3) + "px) ";



    }
    else {
        stars_style = {
            transform: "scale(" + (3 + props.scroll / 100) + ") translateX(" + (window.screenX - props.mouseloc.x) / 10 + "px) translateY(" + (window.screenY - props.mouseloc.y) / 10 + "px) ",
        }

        p_move = "translateX(" + (window.screenX + props.mouseloc.x / 3) / 10 + "px) translateY(" + (window.screenY + props.mouseloc.y / 3) / 10 + "px)";

    }

    mountains_style = {
        transform: "scale(" + (1.15 + props.scroll / 100) + ")" + p_move,

    }

    let myimagestyle = {
        position: "relative",
        width: "50%",
        margin: 0,
        padding: 0,
        right: "auto",
        border: "5px solid blue",
        borderRadius: "20px"

    }

    let mydrivelink = "https://github.com/madhukartemba";

    let reactlogostyle = {

        width: "200px",
        animation: "rotation " + (Math.max(1, 10 - (props.scroll + window.innerWidth) * 0.0009)) + "s linear infinite",

    }

    useEffect(() => {
        window.scroll(0, props.scrollPos.home);
        props.active("home");

    }, [])

    useEffect(() => {
        props.setPageScrollPos("home");
    }, [props.scroll])


    return (
        <div >

            <section>
                <img alt='stars' style={stars_style} src={stars} id="stars" />
                <img alt='mountains_behind' style={mountains_style} src={mountains_behind} id="mountains_behind" />

                <h2 style={{ transform: "translateY(-100px) scale(" + (1 + props.scroll / 300) + ")" }} id="text">Madhukar Temba</h2>
                <a rel="noreferrer" href="#aboutme" className="btn">About Me</a>
                <a rel="noreferrer" href="#projects" className="btn">Projects</a>


            </section>

            <div className="sec" id='aboutme'>

                <h1>About Me</h1>
                <div style={{ textAlign: "center", transform: p_move }}>
                    <img style={myimagestyle} src={myimage} />
                </div>
                <br /><br />
                <h2>Hello everyone! Madhukar here, I am a 3rd year student in VIT Chennai studying CSE with AI and ML. I am interested in a software development engineer role.</h2>
                <h2>I love problem solving and regulary give competitions on sites like GeeksForGeeks and Codestudio. Please click <Link to="/achievements">here</Link> to see the competitions participated in and my <Link to="/achievements">achievements</Link>!</h2>
                <h2>My <a rel="noreferrer" href='https://auth.geeksforgeeks.org/user/madhukartemba/practice/' target="_blank">GeeksForGeeks</a> rank is: <span style={{ color: "yellow" }}>1 in VIT Chennai </span> </h2>
                <h2>My <a rel="noreferrer" href='https://auth.geeksforgeeks.org/user/madhukartemba/practice/' target="_blank">GeeksForGeeks</a> global rank is: <span style={{ color: "yellow" }}>395 </span> </h2>
                <h2>Number of problems solved on <a rel="noreferrer" href='https://auth.geeksforgeeks.org/user/madhukartemba/practice/' target="_blank">GeeksForGeeks</a>: <span style={{ color: "yellow" }}>704 </span> </h2>
                <h2>VIT Chennai CGPA (2019-Present): <span style={{ color: "yellow" }}>9.35 CGPA</span></h2>
                <h2>Amity International School, Sector 43, Gurgaon 12th Class (2019) : <span style={{ color: "yellow" }}>  91.6%  (PCM with PE)</span></h2>
                <h2>Amity International School, Sector 43, Gurgaon 10th Class (2017) : <span style={{ color: "yellow" }}>  9.8 CGPA </span></h2>
                <h2>I enjoy making IoT devices and websites which are neck and neck in features with the current market solutions.</h2>
                <h1>My strong areas</h1>
                <h2>
                    <ol>
                        <li>Java</li>
                        <li>React JS, SQL</li>
                        <li>Go</li>
                        <li>Internet of Things with ML integration (Arduino)</li>
                        <li>Machine Learning using Tensorflow</li>
                    </ol>
                </h2>

                <h1 id="projects">Projects</h1>
                <h2>
                    <ol>
                        <li><a target="_blank" rel="noreferrer" href={mydrivelink}>3D Printed Automatic Vaccuum cleaner (2020)</a> <p>Created two 3D printed automatic vacuum cleaners from scratch which have <a>all the features that the
                            commercial one has</a> like automatic charging, return to home, auto start and is internet connected with
                            mobile app. Written in C (Arduino) with an Android/iOS app.</p></li>
                        <li><a target="_blank" rel="noreferrer" href={mydrivelink}>Minesweeper AI (2021)</a><p>
                            Created a Minesweeper AI which can solve very large and complex boards in seconds using dynamic
                            programming approach. The solving accuracy is <a>ranked 7th in the world!</a>.  Written in C++ and uses graphics.h library for display.</p></li>
                        <li><a target="_blank" rel="noreferrer" href={mydrivelink}>3D Printed Gesture Recognition Device (2021)</a><p>
                            Created a <a>handheld device</a> which uses a 3-axis accelerometer and gyroscope to capture hand movements
                            and classifies them into various gestures. This device is used as an input to a computer(WiFi) or any IR device
                            such as a television. Written in C(Arduino) and Python.</p></li>
                        <li><a target="_blank" rel="noreferrer" href={mydrivelink}>Restaurant website using React JS (2022)</a><p>
                            Created a restaurant management website using <a>React JS</a> in which you can manage different restaurants. It uses a JSON server for the backend and database.</p></li>
                        <li><a target="_blank" rel="noreferrer" href={mydrivelink}>This resume was created using ReactJS! (2022)</a>
                        <p>It uses ReactJS as the frontend and PHP with MySQL as the backend.</p><div>

                            <div style={{ textAlign: "center", transform: p_move }}>
                                <img style={reactlogostyle} src={reactlogo} />
                            </div>
                        </div></li>
                    </ol>

                </h2>


                <h1>Skills </h1>
                <h2>
                    <ol>
                        <li>Java</li>
                        <li>React JS</li>
                        <li>Go</li>
                        <li>HTML, CSS, JavaScript, PHP</li>
                        <li>SQL</li>
                        <li>C</li>
                        <li>C++</li>
                        <li>Python</li>
                        <li>Unity Game Dev</li>
                        <li>MATLAB</li>
                        <li>Fusion 360</li>


                    </ol>
                </h2>


                <h2 style={{ textAlign: "center" }}>You have reached this far! Click <Link to="/contact">here</Link> for contact details!</h2>
            </div>
        </div>
    )
}

export default Home;