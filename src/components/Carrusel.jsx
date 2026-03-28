import React from "react";
import {TituloV1,TituloV2} from "../components/Titulos"
import '../styles/Carrusel.css'
import { Link } from "react-router-dom";
import flecha from "../assets/flecha.svg"

const contenido = [
    {
        "id":"1",
        "imagen":"assets/tc-diario-sunat.png",
        "titulo":"Automatización TC SUNAT API WEB",
        "descripcion":"Script desarrollado en Python para obtener la información del TC PEN-USD del día. Alojado en GCP y programado con un Scheduler. Todo desde la capa gratuita de GCP.",
        "tags":["Python","GCP"],
        "link":""
    },
    {
        "id":"2",
        "imagen":"assets/olist-workflow.png",
        "titulo":"End-to-End Data Engineering Pipeline en GCP",
        "descripcion":"Pipeline completo E2E desplegado en GCP sobre una BBDD de O-list. Creación de estructura medallion en dataform, orquestación en Airflow y dashboards en Looke Studio.",
        "tags":["Python","Airflow","Dataform"],
        "link":""
    },
    {
        "id":"3",
        "imagen":"assets/power-apps.png",
        "titulo":"Power Apps + Power Automate: Creación de Aplicación Low Code ",
        "descripcion":"Creación de una solución low code en conjunto con Power Apps y Power Automate. Esto es un workflow que permite obtener información desde un correo y llevarla hasta un Power Apps y notificar a cada ejecutivo.",
        "tags":["Python","Flask","PowerBI"],
        "link":""
    }
]

function CarruselUI(){
    return(
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 gap-6 lg:px-18 px-8 pb-10">
            {contenido.map(
                (item)=>(
                    <Link key={item.id} to={item.link} >
                        <div className="card w-full shadow-sm card-hover" style={{ background: '#093019' }}>
                            <figure className="lg:h-[200px] h-[180px]">
                                <img className="object-cover w-full h-full" src={item.imagen}/>
                            </figure>
                            <div className="card-body h-[250px]">
                                <h2 className="card-title h-[50px]">{item.titulo}</h2>
                                <p className="line-clamp-4">{item.descripcion}</p>
                                <div className="card-actions justify-end pt-6">
                                    {item.tags.map(
                                        (tag)=>(
                                            <div key={tag} className="badge badge-outline">{tag}</div>
                                        )
                                    )}                                    
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            )}
        </div>   
    )
}


function Carrusel(){
    return(
        <div className="lg:max-w-[80vw] w-full mx-auto">
            <TituloV1 titulo={"Proyectos"}/>
            <CarruselUI />
            <Link className="flex items-center justify-center gap-2 pb-6 text-[1.5rem] text-hover">
                <span>Más proyectos</span>
                <img src={flecha}className="w-6 h-6"/>
            </Link>
        </div>
    )
}

export default Carrusel