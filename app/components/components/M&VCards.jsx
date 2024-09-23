import { InfiniteMovingCardsDemo } from "./Valores";
import { CardSpotlight } from "../ui/card-spotlight";


export function CardSpotlightDemo() {
    return (
        <div className="relative w-full flex justify-evenly items-center flex-col gap-10 py-20">

            {/* Background Image */}
            <div
                className="absolute  w-screen h-full "
                style={{
                    // backgroundImage: `url('/asd.png')`,
                    backgroundImage: `url('/bggg.png')`,
                    backgroundSize: 'auto',
                    backgroundPosition: 'center',
                    zIndex: '-1',
                    backgroundRepeat: 'no-repeat'
                }}
            ></div>
            <div className=" flex justify-evenly flex-wrap w-full gap-8 pt-0" >
                {/* Card for Mission */}
                <CardSpotlight className="h-96 w-96 relative bg-opacity-80 backdrop-blur-sm">
                    <p className="text-xl font-bold relative z-20 mt-2 text-white">
                        Misión
                    </p>
                    <div className="text-neutral-200 mt-4 relative z-20">
                        <ul className="list-none mt-2">
                            <li>Dar soluciones integrales, que se adapten a tus necesidades de negocio presentes y a futuro.</li>
                            <li>Dar soluciones integrales a negocios en desarrollo de forma personalizada y especializada.</li>
                            <li>Solucionar la vida de negocios en desarrollo, de forma ágil, personalizada e innovadora para su crecimiento.</li>
                        </ul>
                    </div>
                    {/* Single Check Icon */}
                    <CheckIcon className="absolute top-4 right-4" />
                </CardSpotlight>

                {/* Card for Vision */}
                <CardSpotlight className="h-96 w-96 relative bg-opacity-80 backdrop-blur-sm">
                    <p className="text-xl font-bold relative z-20 mt-2 text-white">
                        Visión
                    </p>
                    <div className="text-neutral-200 mt-4 relative z-20">
                        <ul className="list-none mt-2">
                            <li>Acompañar a los emprendedores del presente y futuro a conseguir sus sueños.</li>
                            <li>Consolidarnos como un aliado estratégico para el desarrollo de nuestros clientes.</li>
                        </ul>
                    </div>
                    {/* Single Check Icon */}
                    <CheckIcon className="absolute top-4 right-4" />
                </CardSpotlight>
            </div>
            <div className=" w-[80%]">
                <InfiniteMovingCardsDemo />
            </div>
        </div>
    );
}

// CheckIcon component
const CheckIcon = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`h-8 w-8 text-blue-500 ${className}`}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M12 2c-.218 0-.432.002-.642.005l-.616.017-.299.013-.579.034-.553.046c-4.785.464-6.732 2.411-7.196 7.196l-.046.553-.034.579c-.005.098-.01.198-.013.299l-.017.616-.004.318-.001.324c0 .218.002.432.005.642l.017.616.013.299.034.579.046.553c.464 4.785 2.411 6.732 7.196 7.196l.553.046.579.034c.098.005.198.01.299.013l.616.017.642.005.642-.005.616-.017.299-.013.579-.034.553-.046c4.785-.464 6.732-2.411 7.196-7.196l.046-.553.034-.579c.005-.098.01-.198.013-.299l.017-.616.005-.642-.005-.642-.017-.616-.013-.299-.034-.579-.046-.553c-.464-4.785-2.411-6.732-7.196-7.196l-.553-.046-.579-.034a28.058 28.058 0 0 0-.299-.013l-.616-.017-.318-.004-.324-.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083.094-4 4a1 1 0 0 1-1.32.083l-.094-.083-2-2a1 1 0 0 1 1.32-1.497l.094.083 1.293 1.292 3.293-3.292z"
                fill="currentColor"
                strokeWidth="0"
            />
        </svg>
    );
};