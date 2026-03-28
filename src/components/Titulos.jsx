import React from "react";

function TituloV1({titulo}){
    return(
        <div className="px-8 py-12">
            <h2 className="text-[36px] lg:text-[48px] font-bold text-green-400 inline-block border-b-10 border-green-400 pb-2">
                {titulo}
            </h2>
        </div>
    )
}

function TituloV2(){
    return(
        <>Hola2</>
    )
}

export {TituloV1,TituloV2}