import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro'
import logo from "assets/image/logo.png"
import "styles/Nav.scss"
import {Link, useLocation} from "react-router-dom";

const Nav:FC = () => {
    let location = useLocation().pathname;

    interface linksInterface {
        link: string,
        name: string
    }

    const homeLinks: linksInterface[] = [
        {
            link: "/",
            name: "Homepage"
        },
        {
            link: "/homepage2",
            name: "Homepage2"
        },
        {
            link: "/homepage3",
            name: "Homepage3"
        },
    ]

    const pageLinks: linksInterface[] = [
        {
            link: "/team",
            name: "Team"
        },
        {
            link: "/career",
            name: "Career"
        },
        {
            link: "/blog",
            name: "Blog"
        },
        {
            link: "/blog-single",
            name: "Blog-single"
        },
        {
            link: "/privacy",
            name: "Privacy"
        },
        {
            link: "/FAQ",
            name: "FAQ"
        },
        {
            link: "/sing-in",
            name: "Sing in"
        },
        {
            link: "/sing-up",
            name: "Sing up"
        },
        {
            link: "/error",
            name: "404"
        },
        {
            link: "/coming-soon",
            name: "Coming soon"
        },

    ]

    const aboutLinks: linksInterface[] = [
        {
            link: "/about",
            name: "About"
        }
    ]

    const contactLinks: linksInterface[] = [
        {
            link: "/contact",
            name: "Contact"
        }
    ]


    const hoverEffect = (links: linksInterface[]): string => {
        for (let item of links) {
            if (location === item.link) {
                return "link-hover"
            }
        }
        return "no-clicked"
    }

    return (
        <div className="Nav">
            <div className="logo">
                <img src={logo} alt="Logo" className="logo_img"/>
                <a href="/"> </a>
            </div>
            <nav className="nav-links">
                <ul>
                    <li className={`${hoverEffect(homeLinks)} nav-links__list home`}>
                        <div className={hoverEffect(homeLinks)}>
                            <Link to="/">
                                Home
                            </Link>
                            <FontAwesomeIcon icon={solid("angle-down")} className="angle-down"/>
                        </div>

                        <div className="drop-list">
                            {homeLinks.map(item =>
                                <Link to={item.link} className={hoverEffect([item])} key={item.name}>
                                    {item.name}
                                </Link>)
                            }
                        </div>
                    </li>
                    <li className={`${hoverEffect(homeLinks)} nav-links__list page`}>
                        <div className={hoverEffect(pageLinks)}>
                            <Link to="/team">
                                Page
                            </Link>
                            <FontAwesomeIcon icon={solid("angle-down")} className="angle-down"/>
                        </div>

                        <div className="drop-list">
                            {pageLinks.map(item =>
                                <Link to={item.link} className={hoverEffect([item])} key={item.name}>
                                    {item.name}
                                </Link>)
                            }
                        </div>

                    </li>
                    <li className="nav-links__list">
                        <Link to="/about" className={hoverEffect(aboutLinks)}>
                            About
                        </Link>
                    </li>
                    <li className="nav-links__list">
                        <Link to="/contact" className={hoverEffect(contactLinks)}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;