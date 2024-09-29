import Image from 'next/image';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { BackgroundLines } from './ui/background-lines';

const words = ` Nos especializamos en brindar servicios de calidad, con un equipo de profesionales altamente capacitados.`
const words2 = `  Nuestro equipo de expertos ofrece soluciones personalizadas que maximizan el rendimiento de tu negocio. Garantizamos 
resultados medibles y nos comprometemos con la innovación para alcanzar tus objetivos.`

export const Hero = () => {
    return (
        <div
            className="bg-purple-300 h-screen lg:h-[100vh] pt-20"
            style={{
                backgroundImage: "url('bgCool.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
            }}
        >
            <div className="flex items-start pt-[2rem] md:pt-16 justify-center h-full w-[90%] m-auto flex-wrap">
                {/* Contenido principal */}
                <div className="flex flex-col items-center justify-center gap-4 text-center w-full lg:w-auto">
                    <h1 className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl text-white font-bold">
                        La consultora ideal para ti
                    </h1>
                    <TextGenerateEffect words={words} />
                    {/* Botón con borde animado */}
                    <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition z-40">
                        Contáctanos
                    </button>
                </div>

                {/* Sección "Por qué elegirnos" */}
                <div className="flex justify-between flex-wrap w-full lg:w-auto mt-8 gap-4">
                    {/* Texto de Por qué elegirnos */}
                    <div className="flex flex-col justify-center gap-4 w-full lg:w-[50%] text-white">
                        <div className="w-full md:w-[80%] m-auto">
                            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                                <h2 className="text-white text-center text-xl md:text-2xl lg:text-4xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                                    ¿Por qué elegirnos?
                                </h2>
                                <TextGenerateEffect words={words2} timeWait={3} />
                            </BackgroundLines>
                        </div>
                    </div>

                    {/* Imagen con fondo de vidrio */}
                    <div className="flex justify-center items-center w-[80%] md:w-auto bg-white/15 backdrop-blur-sm rounded-[66%_46%/87%_43%] md:mt-0 m-auto">
                        <Image
                            src="/gran.png"
                            alt="Circle"
                            width={350}
                            height={350}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};