import React, { useEffect, useState } from 'react';
import stars from './images/stars.png';
import mail_bird from './images/mail_bird.png';
import gfg from './images/gfg.png'
import linkedin from './images/linkedin.png'
import itchio from './images/itchio.png'
import codestudio from './images/codestudio.png'
import leetcode from './images/leetcode.png'
import gmail from './images/gmail.png'
import phone from './images/phone.png'
import github from './images/github.png'
import axios from 'axios';

function Contact(props) {


    function handleScroll(e) {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) {
            console.log("hello")

        }

    }

    let [birdpos, setBirdpos] = useState(window.innerWidth);

    let stars_style = {};

    let p_move = "";

    let [gyro_msg, setGyroMsg] = useState("");

    if (props.hasgyro) {
        stars_style = {
            transform: "scale(" + (3 + props.scroll / 100) + ") translateX(" + props.gyro[0] + "px) translateY(" + props.gyro[1] + "px)  rotateZ(" + props.gyro[2] + "deg)",

        }

        p_move = "translateX(" + props.gyro[0] + "px) translateY(" + props.gyro[1] + "px)";

    }
    else {
        stars_style = {
            transform: "scale(" + (3 + props.scroll / 100) + ") translateX(" + (window.screenX - props.mouseloc.x) / 10 + "px) translateY(" + (window.screenY - props.mouseloc.y) / 10 + "px) ",
        }

        p_move = "translateX(" + (window.screenX - props.mouseloc.x) / 20 + "px) translateY(" + (window.screenY - props.mouseloc.y) / 20 + "px) ";

    }

    let mail_bird_style = {
        left: "" + birdpos + "px",
        top: "10%",
        transform: p_move

    }

    let [form_res, setFormRes] = useState("");


    useEffect(() => {
        window.scroll(0, props.scrollPos.contact);
        props.active("contact");
        getFeedback();

    }, [])

    useEffect(() => {

        let pos = window.innerWidth - 400 - props.scroll * 2.5;

        setBirdpos(Math.max(-500, pos));

        props.setPageScrollPos("contact");

    }, [props.scroll])

    function reqGyro() {
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
            DeviceOrientationEvent.requestPermission()
                .then(permissionState => {
                    if (permissionState === 'granted') {
                        window.navigator.vibrate(200);
                        outputEvent(setGyroMsg, "Please refresh your page to enable gyroscope.");
                    }
                    else {
                        window.navigator.vibrate([100, 80, 100]);
                        outputEvent(setGyroMsg, "Request to access gyroscope was denied.");
                    }
                })
                .catch((err) => outputEvent(setGyroMsg, err.toString()));
        } else {
            if (props.hasgyro == false) {
                window.navigator.vibrate([100, 80, 100]);
                outputEvent(setGyroMsg, "Your device does not seem to have a gyroscope. If it has one, try enabling it in your browser settings.");
            }
            else {
                window.navigator.vibrate([100, 80, 100]);
                outputEvent(setGyroMsg, "Your device seems to have a gyroscope, if the page background does not move then try restarting your device.")
            }
        }
    }

    let [rating, setRating] = useState(5);
    let [email, setEmail] = useState("");
    let [name, setName] = useState("");
    let [comment, setComment] = useState("");

    let [currentRating, setCurrentRating] = useState("-2");

    let [feedback, setFeedback] = useState("Getting feedback data...");

    function getAvgRating() {
        axios.post("GetRating.php", new FormData()).then((res) => {
            setCurrentRating(res.data);
        }).catch((err) => {
            setCurrentRating(err.toString());
        })
    }

    function getFeedback() {
        axios.post("GetFeedback.php", new FormData()).then((res) => {
            setFeedback(res.data);
        }).catch((err) => {
            setFeedback(err.toString());
        })
    }

    function postFeedback(form_event) {

        form_event.preventDefault();

        let form_data = new FormData();

        form_data.append("rating", rating);
        form_data.append("email", email);
        form_data.append("name", name);
        form_data.append("comment", comment);


        //Important axios function

        let url = "PostFeedback.php";


        axios.post(url, form_data).then((res) => {
            outputEvent(setFormRes, res.data);
            window.navigator.vibrate(200);
        }).catch((err) => {
            outputEvent(setFormRes, err.toString());
            window.navigator.vibrate([100, 80, 100]);
        })

        getAvgRating();
        getFeedback();


    }

    function getRatingString() {
        if (rating < 4) {
            return "Needs Improvement";
        }
        else if (rating < 7) {
            return "Average";
        }
        else if (rating < 10) {
            return "Good";
        }
        else {
            return "Excellent";
        }
    }



    function outputEvent(setter, msg) {

        setter(msg);

        var timer = setInterval(() => {
            setter("");
            clearInterval(timer);
        }, 10000);

    }

    return (
        <div >

            <section>
                <img alt='stars' style={stars_style} src={stars} id="stars" />

                <img alt='mail_bird' style={mail_bird_style} src={mail_bird} id="mail_bird" />
                <h2 style={{ transform: "translateY(-100px) scale(" + (1 + props.scroll / 300) + ")" }} id="text">Contact</h2>
                <a rel="noreferrer" href="#info" className="btn">Contact</a>
                <a rel="noreferrer" href="#feedback" className="btn">Feedback</a>



            </section>

            <div className="sec" id='info'>
                <h1>Contact</h1 >

                <table id="contact_table" onScroll={(e) => handleScroll(e)}>
                    <tbody>
                        <tr>
                            <td><img src={gmail} /></td>
                            <td><a>madhusmiles.madhukar@gmail.com</a></td>
                        </tr>
                        <tr>
                            <td><img src={phone} /></td>
                            <td><a>+91 9910464951</a></td>
                        </tr>
                        <tr>
                            <td><img src={gfg} /></td>
                            <td><a rel="noreferrer" href='https://auth.geeksforgeeks.org/user/madhukartemba/practice/' target="_blank">GeeksForGeeks</a></td>
                        </tr>
                        <tr>
                            <td><img src={linkedin} /></td>
                            <td><a rel="noreferrer" href='https://www.linkedin.com/in/madhukar-temba-3533b51a3/' target="_blank">Linkedin</a></td>
                        </tr>
                        <tr>
                            <td><img src={github} /></td>
                            <td><a rel="noreferrer" href='https://github.com/madhukartemba' target="_blank">Github</a></td>
                        </tr>
                        <tr>
                            <td><img src={leetcode} /></td>
                            <td><a rel="noreferrer" href="https://leetcode.com/user0358c/" target="_blank">Leetcode</a></td>
                        </tr>
                        <tr>
                            <td><img src={itchio} /></td>
                            <td><a rel="noreferrer" href="https://madhukartemba.itch.io/" target="_blank">itch.io (Games made by me)</a></td>
                        </tr>
                        <tr>
                            <td><img src={codestudio} /></td>
                            <td><a rel="noreferrer" href="https://www.codingninjas.com/codestudio/profile/cdc4e429-8af3-4de5-a302-43c17e945b6e" target="_blank">CodeStudio</a></td>
                        </tr>

                    </tbody>
                </table>

                <br /><br id='feedback' /><br />
                <h1 >Please help me improve my website</h1>
                <center><form onSubmit={postFeedback}>

                    <h2>Rating</h2>
                    <div className="rangeslider">
                        <input type="range" min="0" max="10" value={rating} onChange={(e) => {
                            setRating(e.target.value);
                            window.navigator.vibrate(50);
                        }} className="myslider" id="sliderRange" />
                        <div>
                            <p style={{ float: "left", fontSize: "40px", padding: 0 }}>{getRatingString()}</p>
                            <p style={{ float: "right", fontSize: "40px", padding: 0, display: "box" }}>{rating}</p>

                        </div>
                    </div>
                    <br /><br /><br />
                    <h2>Email</h2>
                    <input type="email" val={email} onChange={(e) => { setEmail(e.target.value) }} required />
                    <br /><br />
                    <h2>Name</h2>
                    <input type="text" val={name} onChange={(e) => { setName(e.target.value) }} required />
                    <br /><br />
                    <h2>Feedback</h2>
                    <textarea type="text" val={comment} onChange={(e) => { setComment(e.target.value) }} required />
                    <br /><br />
                    <button id="mybutton" type='submit'>Submit</button>
                    <br /><br />
                    <h2>{form_res}</h2>

                </form></center>

                <h1>Average Rating</h1>
                {
                    currentRating === "-2" ? <p style={{ fontSize: "x-large" }}>Please give feedback first to view the average rating.</p> :
                        currentRating === "-1" ? <p style={{ fontSize: "x-large" }}>No one has rated this website yet.</p> :
                            <>
                                <center><progress style={{ width: "60%", height: "100px" }} value={currentRating} max="10" /><p>{currentRating}/10</p></center>

                            </>
                }

                <h1>Enable Gyroscope</h1>
                <p style={{ fontSize: "x-large" }}>This website uses your device's gyroscope to be more interactive, if gyroscope does not work then try enabling gyroscope by clicking the button below.</p>
                <br />
                <center><button id='mybutton' onClick={reqGyro}>Enable Gyroscope</button></center>
                <br />
                <h2 style={{ fontSize: "40px", color: "yellow" }}>{gyro_msg}</h2>

                <h1>Received Feedback</h1>

                {
                    Array.isArray(feedback) ?
                        feedback.map((item, index) =>
                            <div key={index}>
                                <h2 style={{ fontSize: "40px", color: "lightblue" }}>{item[0]} <span style={{ fontSize: "40px", color: "yellow" }}>{item[1]}/10</span></h2>
                                <p>{item[2]}</p>
                                <br /><br />
                            </div>
                        ) :
                        (feedback === "-1" || feedback == -1) ? <h2 style={{ fontSize: "40px", color: "yellow" }} >No feedback received yet.</h2> :
                            <h2 style={{ fontSize: "40px", color: "yellow" }}>{feedback}</h2>

                }




            </div>
        </div>
    );
}

export default Contact;