import React, { Component } from 'react'
import styled from 'styled-components'

const ContactTainer = styled.div`
font-family: 'Julius Sans One', sans-serif;
height: 100%;
text-align: center;
align: center;
margin-top: 5%;
display: flex;
flex-direction: column;
justify-content: center;
`

const Headline = styled.div`
text-align: center;
font-size: 100px;
font-weight: bolder;
text-shadow: 2px 2px rgba(100, 100, 100, 1);
align: center;
`

const LinkedInfo = styled.div`
background-color: rgba(255, 255, 255, 0.75);
text-align: center;
color: black;
width: 90%;
margin-left: 5%;
margin-bottom: 10px;
padding-bottom: 5px;
border-radius: 5px;


a {
    font-size: 23px;
    text-decoration: none;
    color: grey;
}
a:hover {
    font-size: 25px;
    text-decoration: none;
    color: white;
}
a:active {
    font-size: 19px;
    text-decoration: none;
    color: black;
}
`

const Ginfo = styled.div`
background-color: rgba(255, 255, 255, 0.75);
text-align: center;
color: black;
width: 90%;
margin-left: 5%;
margin-bottom: 10px;
padding-bottom: 5px;
border-radius: 5px;


a {
    font-size: 23px;
    text-decoration: none;
    color: grey;
}
a:hover {
    font-size: 25px;
    text-decoration: none;
    color: white;
}
a:active {
    font-size: 19px;
    text-decoration: none;
    color: black;
}
`

const Personal = styled.div`
background-color: rgba(255, 255, 255, 0.75);
text-align: center;
color: black;
width: 90%;
margin-left: 5%;
margin-bottom: 10px;
padding-bottom: 5px;
border-radius: 5px;
`

class Contact extends Component {

    render() {
        return (
            <ContactTainer>
                <Headline>Let's connect</Headline>
                
                <LinkedInfo>
                    <h1>find my LinkedIn page here</h1>
                    <a href="https://www.linkedin.com/in/leon-carswell-1b04142b/">LinkedIn</a>
                </LinkedInfo>
                    
                <Ginfo>
                    <h1> find code for projects and exercises here</h1>
                    <a href="https://www.github.com/lcarswell6">GitHub</a>
                </Ginfo>
                
                <Personal>
                    <h1>Personal Contact</h1>
                    <p>email: lcarswell6@gmail.com</p>
                    <p>mobile: (404)985-7133</p>
                </Personal>
            
            </ContactTainer>
        )
    }
};

export default Contact