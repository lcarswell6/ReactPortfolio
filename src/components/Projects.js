import React, { Component } from 'react';
import styled from 'styled-components';

const PageTitle = styled.div`
font-family: 'Julius Sans One', sans-serif;
text-align: center;
font-size: 100px;
font-weight: bolder;
text-shadow: 2px 2px rgba(100, 100, 100, 1);
align: center;
margin-top: 2%;
`

const JectTainer = styled.div`
font-family: 'Julius Sans One', sans-serif;
height: 100%;
text-align: center;
align: center;
margin-left: 8%;
margin-right: 8%;
display: flex;
flex-direction: row-start;
justify-content: space-evenly;
`

const Ject = styled.div`
background-color: rgba(255, 255, 255, .75);
color: black;
height: 300px;
width: 33%;
margin-top: 5%;
border-radius: 5px;
text-align: center;
`

const Apname = styled.div`
font-size: 30px;
padding-top: 20px;
`

const Descrip = styled.div`
padding: 20px 5px;
font-size: 20px;
`
const Links = styled.div`
display: flex;
flex-direction: row-start;
justify-content: space-evenly;

a {
    text-decoration: none;
    color: grey;
    font-size: 23px;
    margin: 20px 5px;
    }
a:hover {
    text-decoration: none;
    color: white;
    font-size: 25px;
}
a:active {
    text-decoration: none;
    color: black;
    font-size: 19px;
}    
`

class Projects extends Component {
    render() {
        return (
            <div>
                <PageTitle>Projects</PageTitle>
                <JectTainer>
                    <Ject>
                        <Descrip>
                            <h2>Who's Signed?</h2>
                            <p>An app archiving athletes to their respective shoe brand sponsorship</p>
                        </Descrip>
                        <Links>
                            <a href="https://whispering-shore-70324.herokuapp.com/">deployed</a>
                            <a href="https://github.com/lcarswell6/Project2Real">github</a>
                        </Links>
                    </Ject>

                    <Ject>
                        <Descrip>
                            <h2>Dressed Yet?</h2>
                            <p>An app that allows users to list a nightclub's dresscode and leave a brief description</p>
                        </Descrip>
                        <Links>
                            <a href="https://dressedyet-re-rail.herokuapp.com/">deployed</a>
                            <a href="https://github.com/lcarswell6/finalproject">github</a>
                        </Links>
                    </Ject>
                </JectTainer>
            </div>

        );
    }
}

export default Projects;
