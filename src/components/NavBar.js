import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
    height: 30px;
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    opacity: 0.25;
`

const LinkDeco = styled.div`
    font-family: 'Jura, sans-serif';
    font-size: 18px;
    padding: 5px 5px 0px 5px;
    
    a {
        text-decoration: none;
        color: black;
    }
    a:hover {
        text-decoration: none;
        color: black;
        font-size: 20px;
    }
    a:active {
        text-decoration: none;
        color: grey;
        font-size: 18px
    }
`

class NavBar extends Component {
    render() {
        return (
            <div>
                <NavContainer>
                    <LinkDeco><Link to="/"><a>Profile</a></Link></LinkDeco>
                    <LinkDeco><Link to="/contact"><a>Contact</a></Link></LinkDeco>
                    <LinkDeco><Link to="/projects"><a>Projects</a></Link></LinkDeco>
                </NavContainer>
            </div>
        );
    }
}

export default NavBar;