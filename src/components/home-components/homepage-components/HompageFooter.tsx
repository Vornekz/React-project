import { FC } from "react"
import logo from "assets/image/logo-alt.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";
import "styles/homepage-style/HomepageFooter.scss"


const HomepageFooter:FC = () => {
    interface Link {
        name: string,
        path: string
    }

    interface Links {
        group: string,
        link: Link[]
    }

    const links:Links[] = [
        {
            group: "porduct",
            link: [
                {
                    name:"Teams",
                    path:"/team"
                },
                {
                    name:"Blogs",
                    path:"/blog"
                },
                {
                    name:"FAQs",
                    path:"/FAQ"
                }
            ]
        },
        {
            group: "resources",
            link: [
                {
                    name:"Singup",
                    path:"/sing-up"
                },
                {
                    name:"Login",
                    path:"/sing-in"
                },
                {
                    name:"Blog",
                    path:"/blog-single"
                }
            ]
        },
        {
            group: "company",
            link: [
                {
                    name:"Career",
                    path:"/career"
                },
                {
                    name:"Contact",
                    path:"/contact"
                },
                {
                    name:"Investor",
                    path:"/team"
                },
            ]
        },
        {
            group: "company",
            link: [
                {
                    name:"About",
                    path:"/about"
                },
                {
                    name:"Contact",
                    path:"/contact"
                },
                {
                    name:"Teams",
                    path:"/team"
                },
                {
                    name:"Privacy Policy",
                    path:"/privacy"
                }
            ]
        },
    ]

    return (
        <div className="HomepageFooter">
            <div className="HomepageFooter__social">
                <div className="HomepageFooter__social-img">
                    <a href="/">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className="HomepageFooter__social-links socialLinks">
                    <div className="socialLinks__link">
                        <FontAwesomeIcon icon={brands("facebook")} className="socialLinks__link-style"/>
                        <a href="https://www.facebook.com/"> </a>
                    </div>
                    <div className="socialLinks__link">
                        <FontAwesomeIcon icon={brands("twitter")} className="socialLinks__link-style"/>
                        <a href="https://twitter.com/"> </a>
                    </div>
                    <div className="socialLinks__link">
                        <FontAwesomeIcon icon={brands("instagram")} className="socialLinks__link-style"/>
                        <a href="https://www.instagram.com/"> </a>
                    </div>
                </div>
            </div>
            <div className="HomepageFooter__links">
                {links.map((linksItem, linksId) => {
                    return(
                        <div className="HomepageFooter__links-group links-group" key={`${linksItem.group}-${linksId+1}`}>
                            <h6 className="links-group__name">{linksItem.group}</h6>
                            {linksItem.link.map((linkItem, linkId) => {
                                return(
                                    <Link to={linkItem.path} key={`${linkItem.name}-${linkId+1}`} className="links-group__links">
                                        {linkItem.name}
                                    </Link>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HomepageFooter