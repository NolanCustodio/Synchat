import React from "react";



const Landing = () => {
    return(
        <div>
            <div>
                {/* Intro and small detail */}
                <h1>
                    Hello, I am Nolan!
                </h1>
                <p>
                    I am an aspiring developer and I greatly thank you for taking the time to visit my site.
                </p>
            </div>

            <div>
                {/* Github? */}
                <h1>
                    Github and Resume
                </h1>
                <p>
                    Here is a link to my Github Profile.<br/>
                    Here is a link to my Resume.
                </p>
            </div>

            <div>
                {/* This website name/image and small description */}
                <h1>
                    Synchat
                </h1>
                <p>
                    This site also holds a small Web App that is currently a work in progress. <br/>
                    Some of tools that I used to make what I have currently are: <br/>
                    React, Nginx, Express, MySQL, and Docker. <br/>
                    <a href="https://github.com/NolanCustodio/Synchat/tree/initialDeploy">Here is a link to this project if you would 
                    like to view this project on my Github.</a>
                </p>
            </div>

            <div>
                {/* NewsBox github link and description */}
                <h1>
                    NewsBox
                </h1>
                <p>
                    Another project that I created with a group while I was in University<br/>
                    This was a LAMP Stack Application concept that used multiple Virtual Machines<br/>
                    The project was more for teaching good techniques and tools such as:<br/>
                    RabbitMQ, MVC Model, API Calls, Cron, Linux Services, File Storage, Logging, and more<br/>
                    <a href="#">
                        This is link to the project
                    </a>
                </p>
            </div>

        </div>
    )
}

export default Landing;