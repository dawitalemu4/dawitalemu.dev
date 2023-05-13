"use client";
import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div id="contactContainer">
      <div id="contactFormContainer">
        <form action="https://api.web3forms.com/submit" method="POST">
        <div id="I dont care about this key btw its free. Use the contact form and send me 'You cant see me' if you see this div!"></div>
          <input
            type="hidden"
            name="access_key"
            value="d36e5828-ad1a-4661-9a5a-5252d677f340" 
          /> 
          <p>Name</p>
          <input id="ename" type="text" name="name" required />
          <p>Email</p>
          <input id="email" type="email" name="email" required />
          <p>Message</p>
          <input id="message" type="message" name="message" required />
          <input
            type="hidden"
            name="redirect"
            value="https://web3forms.com/success"
          />
          <button id="submit" type="submit">
          <p>Send Email</p>
          </button>
        </form>
      </div>
      <div id="contactHeaderContainer">
        <h4 id="contactHeaderText">Contact</h4>
      </div>
      <div id="contactFooterContainer">
      <div id="contactButtonsContainer">
        <a id="linkedinIcon" href="https://www.linkedin.com/in/dawit-alemu4" target="_blank">
         <img src="in.png"/>  
        </a>
        <a id="githubIcon" href="https://github.com/dawitalemu4" target="_blank">
        <img src="github.jpg"/>
        </a>
        <a id="mailIcon" href="https://mail.google.com/mail?view=cm&fs=1&to=dndawita@gmail.com&su=Draft" target="_blank">
        <img src="mail.png"/>
        </a>
        <a id="misplacedIcon" href="https://misplaced.app" target="_blank">
        <img src="m.png"/>
        </a>
      </div>
      <div id="pikachuFooter">
        <img id="pikachu" src="pikachu.gif" />
      </div>
      </div>
      <style>
        {`
    #contactContainer {
      display: flex;
      position: absolute;
      top: 5%;
      bottom: 0;
      left: 5%;
      right: 5%;
      width: 90%;
      height: 95%;
      flex-direction: row;
    }
    #contactFormContainer {
        display: flex;
        position: relative;
        left: 0;
        width: 50%;
        height: 80%;
        align-items: center;
        margin-top: 5%;
      }
      #contactFooterContainer {
        display: flex;
        position: absolute;
        right: 0;
        bottom: 0;
        width: 50%;
        height: 80%;
        flex-direction: column;
      }
    form {
        width: 100%;
        flex-direction: column;
        background-color: black;
        color: white;
        border-radius: 5%;
        padding: 5%;
        border: 1px solid #d6ddf2;
      }
      
      form input,
      form textarea {
        background-color: black;
        color: white;
        border: 1px solid #d6ddf2;
        border-radius: 1%;
        padding: 2%;
        margin-bottom: 5%;
      }
      
      #message{
        height: 150px; 
        width: 95%;
        margin-top: 3%;
        text-align: left; 
        word-wrap: break-word;
        vertical-align: top;
        white-space: pre-wrap;
      }
      
      #ename{width: 95%;  
      text-align: left;  
      margin-top: 2%;
      }
      
      #email{width: 95%;
        text-align: left;  
        margin-top: 2%;
    }
      
      form label {
        color: white;
        font-size: 10%;
        border: 1px solid #d6ddf2;
        margin-bottom: 5%;
      }
      
      form button {
        background-color: #d6ddf2;
        color: white;
        border: 1px solid #d6ddf2;
        border-radius: 10%;
        padding: 2% 4%;
        font-size: 100%;
        cursor: pointer;
      }
      
      form button:hover {
        background-color: white;
        color: black;
      }
      #contactHeaderContainer {
        display: flex;
        position: absolute;
        top: 0;
        right: 2%;
        width: 20%;
        height: 20%;
        justify-content: center;
      }
      #contactHeaderText {
        color: white;
        font-family: Inter;
        font-size: 400%;
      }
      #contactButtonsContainer {
        display: flex;
        position: relative;
        top: 15%;
        left: 5%;
        align-items: center;
        justify-content: space-evenly;
      }
        #pikachuFooter {
        display: flex;
        position: absolute;
        width: 100%;
        height: 50%;
        bottom: 0;
        right: 0;
        }
        #linkedinIcon, #githubIcon, #mailIcon, #misplacedIcon {
          display: flex;
        width: 20%;
        }
        #misplacedIcon img {
          border-radius: 50%;
        }
        #pikachu {
          display: flex;
          position: absolute;
          bottom: 0;
          right: 0;
          width: 30%;
        }
        @media (max-width: 1370px) {
            #contactContainer {
                flex-direction: column;
                justify-content: center;
            }
            #contactHeaderContainer {
                top: 0;
                right: 40%;
            }
            #contactHeaderText {
              font-size: 300%;
            }
            #contactFormContainer {
                position: absolute;
                top: 10%;
            }
        }
        @media (max-width: 900px) {
          #contactHeaderText {
            font-size: 300%;
          }
          #contactFormContainer {
            display: none;
        }
        #contactFooterContainer {
          width: 100%;
        }
        #contactButtonsContainer {
          position: absolute;
          top: 0;
          left: 0;
        }
        #pikachu {
          width: 20%;
          left: 40%;
          right: 40%;
        }
      }
      @media (max-width: 560px) {
        #contactHeaderText {
          font-size: 190%;
        }
        #pikachu {
          width: 30%;
          left: 35%;
          right: 35%;
        }
            `}
      </style>
    </div>
  );
};

export default ContactForm;