import React from "react";
import './style.css';

function Contact () {

 return (
    <div className="content">
        <div className="contact-part">
            <span className="text-issue">Get in touch</span>
            <br></br><br></br>
            <span className="description-text">Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.<br></br><br></br>
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</span>
            <br></br><br></br>
            <span className="title-name">Name</span>
            <br></br>
            <input className="name-place" placeholder="Enter your name"></input>
            <br></br><br></br>
            <span className="title-name">E-mail address</span>
            <br></br>
            <input className="e-mail-place" placeholder="Enter your e-mail address"></input>
            <br></br><br></br>
            <span className="title-name">Message</span>
            <br></br>
            <input className="message-place" placeholder="Enter your message"></input>
            <br></br>
            <div className="submit-button">Submit</div>
        </div>
    </div>
 );
}


export default Contact;