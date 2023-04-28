import {React, useEffect} from 'react'
import DropDown from './DropDown'
import Faculties from './Faculties'
import {useState} from 'react'
import Calender from './Calender'
import Curriculum from './Curriculum'
import {Link as Scroll} from 'react-scroll';
import {Navigate, NavLink} from "react-router-dom"
import Rdcell from './Rdcell'
import {useNavigate} from 'react-router-dom'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Stack
} from '@chakra-ui/react'
import {Select} from '@chakra-ui/react'
import {ChevronDownIcon} from "@chakra-ui/icons";
import GoogleSignInButton from './LoginButton'
import {isAuthenticated, signout} from '../auth/helper'
import axios from 'axios'
const Navbar = () => {

    var {
        user,
        token
    } = isAuthenticated();
    console.log(user);
    // var isOpen = useState(true);
    const [click, setClick] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => { // const axios = require("axios");

        const options = {
            method: 'GET',
            url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
            params: {
                query: 'Chicken curry'
            },
            headers: {
                'X-RapidAPI-Key': 'f67b579418msh92a54c580f490b3p1985d3jsnbcff2ac8fe7b',
                'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
        function handleScroll() {
            setScrollPosition(window.scrollY);
        }

        window.addEventListener("scroll", handleScroll);

        return() => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navbarClasses = ["navbar"];
    const logo = ["logo"];
    const centeredPlaceholder = ["centered-placeholder"];
    if (scrollPosition >= 60) {
        navbarClasses.push("scrolled");
    }
    if (scrollPosition >= 80) {
        logo.push("show");
        centeredPlaceholder.push("show")
    }

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);


    const navigate = useNavigate();

    // }
    return (

        <div style={
            {marginBottom: "10px"}
        }>
            <nav className={
                navbarClasses.join(" ")
            }>
                <Stack spacing={1}
                    direction='row'
                    style={
                        {width: '100%'}
                }>
                    <div style={
                        {
                            width: "20%",
                            display: 'flex',
                            justifyContent: 'start',
                            alignItems: 'center'
                        }
                    }>
                        <div className={
                                logo.join(" ")
                            }
                            onClick={
                                () => {
                                    navigate('/')
                                }
                        }>

                            <img src="
                            /images/collegeImage.jpg" className='iiitim'></img>
                        </div>
                    </div>
                    <div style={
                        {
                            width: "60%",
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'center'
                        }
                    }>

                        <ul className={
                            click ? "nav-menu active" : "nav-menu"
                        }>
                            


                            <li onClick={toggleDropdown}
                                className="nav-item">
                                <div 
                                    className="nav links f">People &#9662;</div>
                                {
                                isOpen && (
                                    <ul className="dropdown-menu">
                                        <li>
                                            <NavLink to="/faculties">Faculties</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/blank">Department Coordinator</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/research">Research Scholar</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/blank">Staff</NavLink>
                                        </li>
                                    </ul>
                                )
                            } </li>
                    

                        <li className="nav-item">
                            <NavLink to="https://iiit-bh.almaconnect.com/alumni?frm=main_menu" activeClassName="active" className="nav-links f"
                                onClick={
                                    click ? handleClick : null
                            }>
                                Laboratory
                            </NavLink>
                        </li>
                
                  
                        <li onClick={toggleDropdown}
                            className="nav-item">
                            <div 
                                className="nav links f">Research &#9662;</div>
                            {
                            isOpen && (
                                <ul className="dropdown-menu">
                                    <li>
                                        <NavLink to="/researchArea">Research Areas</NavLink>
                                    </li>
                                   
                                    <li>
                                        <NavLink to="/publication">Publication</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/publication">Research Groups</NavLink>
                                    </li>
                                  
                                </ul>
                            )
                        } </li>



                        <li className="nav-item">
                            <NavLink exact to="/contactus" activeClassName="active" className="nav-links f"
                                onClick={
                                    click ? handleClick : null
                            }>
                                Curriculum
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/contactus" activeClassName="active" className="nav-links f"
                                onClick={
                                    click ? handleClick : null
                            }>
                                About Us
                            </NavLink>
                        </li>


                
                        </ul>


                    </div>
                    <div className="nav-icon"
                        onClick={handleClick}>
                        <i className={
                            click ? "fa fa-times" : "fa fa-bars"
                        }></i>
                    </div>


                    <div style={
                        {
                            width: "20%",
                            // height: "100%",
                            display: 'flex',
                            // flexDirection: 'column',
                            justifyContent: 'center ',
                            alignItems: 'end'

                        }
                    }>
                        <div style={
                            {
                                // width: "80%",
                                height: "100%",
                                fontSize: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'end'

                            }
                        }>

                            <div> {
                                isAuthenticated() && user.role === 1 && <button className={
                                        centeredPlaceholder.join(" ")
                                    }
                                    onClick={
                                        () => {
                                            navigate('/update')
                                        }
                                }>
                                    Update Profile
                                </button>
                            } </div>
                            <div className={
                                logo.join(" ")
                            }>
                                {

                                !isAuthenticated() ? <GoogleSignInButton/>: <button style={
                                        {
                                            backgroundColor: "red",
                                            borderRadius: "10px",
                                            padding: "10px",
                                            color: "white",
                                            fontSize: "1.2rem"
                                        }
                                    }
                                    onClick={signout}>Log out</button>
                            } </div>

                        </div>


                    </div>

                </Stack>


            </nav>

        </div>
    )
}

export default Navbar
