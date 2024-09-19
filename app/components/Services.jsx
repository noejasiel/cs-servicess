import { CardHoverEffectDemo, WobbleCardDemo } from "./components/WobbleCard"



export const Services = () => {

    return (
        <div className="relative flex flex-col items-center justify-center gap-8 text-center w-full lg:w-auto">
            <h3 className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl text-[#00123dce] font-bold pt-8">
                Servicios
            </h3>
            <p className="text-[#00123dce] w-[80%]">
                Nos especializamos en brindar servicios de calidad, con un equipo de profesionales altamente capacitados.
                
            </p>
            <div className="flex justify-between flex-wrap lg:w-auto mt-7 gap-4 w-[80%]">
                {/* <WobbleCardDemo /> */}
                <CardHoverEffectDemo />
            </div>
            {/* SVG de fondo */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-bottom bg-no-repeat bg-cover" style={{ backgroundImage: `url('/bgServices.svg')` }}>
            </div>
        </div>
    )
}