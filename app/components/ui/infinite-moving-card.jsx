"use client";

import { cn } from "../lib/utils";
import React, { useEffect, useState } from "react";
import { FaRegHandshake, FaLightbulb, FaHandsHelping, FaRocket, FaStar, FaAward, FaUserCheck, FaBalanceScale } from "react-icons/fa"; // Importamos los íconos

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    (<div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}>
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px] flex flex-col justify-between bg-gradient-to-b from-[#001e50] to-[#031646]" style={{
              // background: "linear-gradient(180deg, #001e50, #031646) !important",
              // backgroundColor: "linear-gradient(180deg, #001e50, #031646) !important",
              minHeight: '250px', // Establece una altura mínima para que las tarjetas tengan consistencia
            }}
            key={item.name}>
            <blockquote className="flex-grow relative">
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"></div>
              <span className="relative z-20 text-xl leading-[1.6] text-gray-100 font-normal flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-full h-24 w-24 object-cover mb-4"
                />
                {item.quote}
              </span>
            </blockquote>

            <div className="relative z-20 mt-6 flex flex-row items-center">
              <div className="text-3xl text-gray-400 mr-4">
                {/* Aquí renderiza el ícono que corresponde a cada valor */}
                {item.icon}
              </div>
              <span className="flex flex-col gap-1">
                <span className="text-xl leading-[1.6] text-gray-400 font-normal">
                  {item.name}
                </span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>)
  );
};