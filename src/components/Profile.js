import React, { Component } from 'react';
import styled from 'styled-components';



const ProfTainer = styled.div`
text-align: center;
background-color: white;
opacity: .85;
width: 90%;
margin-left: 5%;
margin-top: 10%;
border-radius: 5px;
`

const Name = styled.div`
font-family: 'Jura', sans-serif;
font-weight: bold;
font-size: 72px;
color: grey;
text-align: center;

`

const Line = styled.div`
text-align: center;
font-family: 'Julius Sans One', sans-serif;
font-weight: bold;
font-size: 30px;
padding: 5px, 5px;
color: black;
`

const Mantra = styled.div`
font-family: 'Julius Sans One', sans-serif;
text-align: center;
font-size:25px;
font-weight: bold;
color: black;
`
const About = styled.div`
margin: 10px 10px 10px 10px;
padding: 5px 5px 5px 5px;
font-family: 'Julius Sans One', sans-serif;
font-size: 20px;
color: black;
text-align: left;

`

class Profile extends Component {
    render() {
        return (
            <ProfTainer>
                <Name>Leon Carswell</Name>
                <Line>Forward Thinking Full Stack Developer</Line>
                <Mantra>Promoting Progress Through Service</Mantra>
                <About>Growing up in rural Georgia, a man is taught to love and serve his community as if they were his own family. We raise our families as if we are one large village and that set of morals has successfully guided me well into my adult life. I'd like to bring that sense of familial love and support to my next employer with intentions of building and maintaining a mutually beneficial relationship for my company, my community and myself in the process.  </About>
                
            </ProfTainer>

        );
    }
}

export default Profile;