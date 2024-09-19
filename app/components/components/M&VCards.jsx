import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import { TextRevealCardPreview } from "../TextReveal";

export function WobbleCardDemo() {
    return (
        <div className="h-screen w-[80%] bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl flex items-center m-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mx-auto w-full m-auto">
                {/* Misión */}
                <div className="col-span-1 flex flex-col items-center lg:items-start">
                    <h3 className="text-2xl lg:text-4xl font-bold mb-4 text-main w-full">
                        <TextRevealCardPreview msg1={" MISIÓN"} msg2={"¿Cuál es nuestra razón de ser? "} />
                    </h3>
                    <WobbleCard containerClassName="min-h-[300px] bg-[#0050ab]">
                        {/* <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            MISIÓN
                        </h2> */}
                        <p className="mt-4 max-w-[26rem] pt-[10%] text-left text-base text-neutral-200 leading-relaxed tracking-wide">
                            Dar soluciones integrales, que se adapten a tus necesidades de negocio presentes y a futuro.
                            Dar soluciones integrales a negocios en desarrollo de forma personalizada y especializada.
                            Solucionar la vida de negocios en desarrollo, de forma ágil, personalizada e innovadora para su crecimiento.
                        </p>
                    </WobbleCard>
                </div>

                {/* Visión */}
                <div className="col-span-1 flex flex-col items-center lg:items-start">
                    <h3 className="text-2xl lg:text-4xl font-bold mb-4 text-main w-full">
                        <TextRevealCardPreview msg1={"VISION"} msg2={"¿Qué queremos llegar a ser?"} />
                    </h3>
                    <WobbleCard containerClassName="min-h-[300px] bg-[#0050ab] text-center">
                        {/* <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            VISIÓN
                        </h2> */}
                        <p className="mt-4 pt-[15%] max-w-[26rem] text-center w-full text-base text-neutral-200 leading-relaxed tracking-wide">
                            Acompañar a los emprendedores del presente y futuro a conseguir sus sueños.
                            Consolidarnos como un aliado estratégico para el desarrollo de nuestros clientes.
                        </p>
                    </WobbleCard>
                </div>
            </div>
        </div>
    );
}
