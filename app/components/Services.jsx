import { CardHoverEffectDemo, WobbleCardDemo } from "./components/WobbleCard"



export const Services = () => {

    return (
        <div  className="relative flex flex-col items-center justify-center gap-8 text-center w-full lg:w-auto" id="services">
            <h3 className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl text-[#00123dce] font-bold pt-8">
                Servicios
            </h3>
            {/* <p className="text-[#00123dce] w-[80%]">
                Sobre los servicios, los precios están sujetos a la revisión del modelo del cliente ya que dependiendo el regulador al que se presentará será el costo
                <span className="text-3xl text-blue-950 font-bold"> el servicio se adaptará a cada cliente</span>
            </p> */}
            <div className="flex justify-between flex-wrap lg:w-auto mt-7 gap-4 w-[80%]">
                {/* <WobbleCardDemo /> */}
                <CardHoverEffectDemo />
            </div>
            {/* SVG de fondo */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-bottom bg-no-repeat bg-cover"
            // style={{ backgroundImage: `url('/bgServices.svg')` }}
            >
            </div>
        </div>
    )
}