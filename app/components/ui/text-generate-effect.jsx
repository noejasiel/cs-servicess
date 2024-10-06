"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../lib/utils";

export const TextGenerateEffect = ({
  words,
  className = "",
  filter = true,
  duration = 0.5,
  timeWait = 0.2,
  isMiddle = false,
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    // Retrasar la animación por el tiempo especificado en timeWait
    const timeoutId = setTimeout(() => {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.2),
        }
      );
    }, timeWait * 1000); // Convertir a milisegundos

    // Limpiar el timeout al desmontar el componente
    return () => clearTimeout(timeoutId);
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className= {`dark:text-white text-white opacity-0 text-justify  ${isMiddle ? "text-sm md:text-lg" : ""}` }
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold ")}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-lg leading-snug tracking-wide text-center">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
