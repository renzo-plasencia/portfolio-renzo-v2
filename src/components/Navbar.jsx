import React from "react";
import { Link } from "react-router-dom";
import { socialLinks } from "../utils/links";
import linkedinlogo from "../assets/linkedin-logo.svg"
import githublogo from "../assets/github_logo.svg"

const ruta = '/portfolio-renzo-v2/'

function LinksNavBar(){
    const linkClass = "font-bold text-lg"
    return(
        <>
            <li><Link className={linkClass} to={ruta}>Inicio</Link></li>
            <li><Link className={linkClass} to={ruta+"proyectos"}>Proyectos</Link></li>
            <li><Link className={linkClass} to={ruta+"experiencia"}>Experiencia</Link></li>
            <li><Link className={linkClass} to={ruta+"tecnologias"}>Tecnología</Link></li>        
        </>
    )
}

function InformationNavbar(){
    return (
        <>
            <Link className="btn-ghost" to={socialLinks.find(link => link.label === 'CV').url} target="_blank">Resume</Link>
            <Link className="btn-ghost" to={socialLinks.find(link => link.label === 'github').url} target="_blank">
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img src={githublogo} />
                    </div>
                </div>
            </Link>
            <Link to={socialLinks.find(link => link.label === 'linkedin').url} target="_blank">
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img src={linkedinlogo} />
                    </div>
                </div>
            </Link>
        </>
    )
}

function Navbar(){
    return(
        <div className="navbar shadow-sm"  style={{backgroundColor: 'rgba(0,0,0,0.2)'}}>
            <div className="navbar-start">
                <div className="drawer lg:hidden">
                    <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer-1" className="btn btn-ghost lg:hidden">
                        ☰
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu min-h-full w-80 p-4" style={{ background: 'linear-gradient(#086A39, #02170B)' }}>
                            <LinksNavBar />
                         <div className="mt-auto flex flex-row gap-4 p-4 justify-center items-center">
                            <InformationNavbar />
                         </div>
                        </ul>
                    </div>
                </div>

                <ul className="menu menu-horizontal px-4 py-4 gap-8 hidden lg:flex">
                    <LinksNavBar />
                </ul>

            </div>
            <div className="navbar-end gap-8 px-4 hidden lg:flex">
               <InformationNavbar />
            </div>
        </div>
    )
}

export default Navbar;