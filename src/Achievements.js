import React, { useEffect } from 'react';
import cert1 from './images/cert1.png';
import stars from './images/stars.png';
import confetti from './images/confetti.png';
import prize from './images/prize.png';
import aws from './images/aws.png'
import cisco from './images/cisco.png'
import { Link } from 'react-router-dom';

function Achievements(props) {




    let stars_style = {};
    let p_move = "";

    if (props.hasgyro) {
        stars_style = {
            transform: "scale(" + (3 + props.scroll / 100) + ") translateX(" + props.gyro[0] + "px) translateY(" + props.gyro[1] + "px)  rotateZ(" + props.gyro[2] + "deg)",

        }

        p_move = "translateX(" + props.gyro[0] + "px) translateY(" + props.gyro[1] + "px)  rotateZ(" + props.gyro[2] + "deg)"


    }
    else {
        stars_style = {
            transform: "scale(" + (3 + props.scroll / 100) + ") translateX(" + (window.screenX - props.mouseloc.x) / 10 + "px) translateY(" + (window.screenY - props.mouseloc.y) / 10 + "px) ",
        }

        p_move = "translateX(" + (window.screenX - props.mouseloc.x) / 10 + "px) translateY(" + (window.screenY - props.mouseloc.y) / 10 + "px) ";
    }


    useEffect(() => {
        window.scroll(0, props.scrollPos.achievements);
        props.active("achievements");
    }, [])

    useEffect(() => {
        props.setPageScrollPos("achievements");
    }, [props.scroll])

    let cert1style = {
        transform: "scale(" + (Math.max(0.5 - props.scroll / 600, 0)) + ") rotate(" + -props.scroll + "deg)" + p_move,
        top: Math.min(window.innerHeight, (190 + props.scroll)) + "px",

    };

    let prizestyle = {
        transform: "scale(0.5) rotate(" + (10 + props.scroll / 30) + "deg)" + p_move,
    };

    let confettistyle = {
        transform: "scale(" + (Math.max(0.5 + props.scroll / 300, 0.5)) + ")" + p_move,
        top: -props.scroll + "px",
        left: 70 + props.scroll * 0.5 + "px"
    };


    return (
        <div>

            <section>
                <img alt='stars' style={stars_style} src={stars} id="stars" />
                <img alt='certification1' style={cert1style} src={cert1} id="cert1" />
                <img alt='certification1' style={prizestyle} src={prize} id="prize" />
                <img alt='certification1' style={confettistyle} src={confetti} id="confetti" />

                <h2 style={{ transform: "translateY(-100px) scale(" + (1 + props.scroll / 300) + ")" }} id="text">Achievements</h2>
                <a rel="noreferrer" href="#info" className='btn'>Show</a>



            </section>

            <div className="sec" id='info'>

                <h1>Achievements</h1>
                <div className='infodiv'>
                    <ul>
                        <li>Geeks For Geeks Rank : 1 in VIT Chennai</li>
                        <li>Geeks For Geeks World Rank: 395, Coding Score: 2067</li>
                        <li>Google Kickstart Round A 2022 Rank: 3072</li>
                        <li>CodeStudio Weekend Contest 10 Rank: 20/622</li>
                        <li>VIT Hackathon 1st Prize: Compact IoT Remote (2019)</li>
                    </ul>

                </div>



                <h1>My Certifications</h1>


                <div className="infodiv">
                    <h1>
                        <img src={aws} />
                        <div>
                            <a rel="noreferrer" href='https://www.credly.com/badges/911c13e1-3ca9-4df0-a318-4b7723ec2d58/public_url' target="_blank">AWS Certified Cloud Practitioner (2022)</a>
                            <p>Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects.</p>
                        </div>
                    </h1>
                </div>

                <div className="infodiv">
                    <h1>
                        <img src={cisco} />
                        <div>
                            <a rel="noreferrer" href='https://drive.google.com/file/d/1iQhrbLTKzTGSUR0nfXgeRzfaDY4nCdWi/view?usp=sharing' target="_blank">Cisco Packet Tracer (2020)</a>
                            <br />
                            <p>Cisco Packet Tracer is a comprehensive networking technology teaching and learning tool that offers a unique combination of realistic simulation and visualization experiences, assessment, activity authoring capabilities, and multiuser collaboration and competition opportunities.</p>
                        </div>
                    </h1>
                </div>


                <br /><br />
                <h2 style={{ textAlign: "center" }}>You have reached this far! Click <Link to="/contact">here</Link> for contact details!</h2>
            </div>


        </div>
    );
}

export default Achievements;