import {React, useEffect} from 'react'
import {useState} from 'react'
import {Navigate, NavLink} from "react-router-dom"
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
                            width: "40%",
                            display: 'flex',
                            justifyContent: 'start ',
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
                        <p style={{fontSize:"2rem",marginLeft:"3.5rem",color:"#D3D04F",fontFamily:"italic"}}>GITA Autonomous College Bhubaneswar</p>

                    </div>
                    <div style={
                        {
                            width: "60%",
                            display: 'flex',
                         justifyContent: 'end',
                            alignItems: 'center',
                            paddingRight:"2rem"
                            // backgroundColor:"red"
                        }
                    }>
                    <div style={
                        {
                            // width: "80%",
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            // backgroundColor:"yellow"
                        }
                    }>

                        <ul className={
                            click ? "nav-menu active" : "nav-menu"
                        }>
                            


                         
                    
                    <li className="nav-item">
                            <NavLink to="/faculties" activeClassName="active" className="nav-links f"
                                onClick={
                                    click ? handleClick : null
                            }>
                                Faculties
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/lab" activeClassName="active" className="nav-links f"
                                onClick={
                                    click ? handleClick : null
                            }>
                                Laboratory
                            </NavLink>
                        </li>
                
                        <li className="nav-item">
                            <NavLink to="/researchArea" activeClassName="active" className="nav-links f"
                                onClick={
                                    click ? handleClick : null
                            }>
                                Research
                            </NavLink>
                        </li>
    
                      <li className="nav-item">
                            <NavLink exact to="/activity" activeClassName="active" className="nav-links f"
                                onClick={
                                    click ? handleClick : null
                            }>
                                Activity
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
                    </div>
                    <div className="nav-icon"
                        onClick={handleClick}>
                        <i className={
                            click ? "fa fa-times" : "fa fa-bars"
                        }></i>
                    </div>


             
                     

                </Stack>


            </nav>

        </div>
    )
}

export default Navbar
