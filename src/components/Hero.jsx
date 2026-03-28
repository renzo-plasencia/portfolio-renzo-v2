import React from "react";
import '../styles/Hero.css';
import { socialLinks } from "../utils/links";
import { Link } from "react-router-dom";
import linkedinlogo from "../assets/linkedin-logo.svg"
import githublogo from "../assets/github_logo.svg"
import cvlogo from "../assets/cv.svg"
import { TituloV1,TituloV2 } from "../components/Titulos"


const titulo = "Crear, imaginar y desarrollar";
const cargo = "Renzo Plasencia / Data Engineer";
const foto = "https://avatars.githubusercontent.com/u/148007927?v=4";
const iconos = [
    {
        "clase":"linkedin",
        "texto":"Renzo Plasencia",
        "icono": linkedinlogo,
        "link":socialLinks.find(link=>link.label==="linkedin").url
    },
    {
        "clase":"github",
        "texto":"renzo-plasencia",
        "icono": githublogo,
        "link":socialLinks.find(link=>link.label==="github").url
    },
    {
        "clase":"cv",
        "texto":"Descarga CV",
        "icono": cvlogo,
        "link":socialLinks.find(link=>link.label==="CV").url
    }

];

function Hero(){

    return (
        
        <div className="hero py-12 lg:py-35">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={foto} className="max-w-full rounded-[24px] shadow-2xl hidden lg:flex"/>
            <div className="px-5 text-center lg:text-left">
                <h1 className="text-[40px] lg:text-[64px] font-bold">
                    Crear, imaginar y <span className="animate-color">desarrollar</span>
                </h1>
                <p className="py-6 text-[25px]">{cargo}</p>
                <div className="flex gap-4 flex-wrap mt-4 justify-center lg:justify-start">
                    {iconos.map((item)=>(
                        <Link key={item.clase} to={item.link} target="_blank" className="btn btn-outline text-white rounded-[12px] gap-2 py-8" style={{ background: 'linear-gradient(100deg, rgb(5, 65, 31), rgb(30, 55, 41))' }}>
                        <img src={item.icono} className="w-10 h-10" />
                        {item.texto}
                    </Link>
                    ))}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Hero