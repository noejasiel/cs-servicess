"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-card";
import { FaBalanceScale, FaRegHandshake, FaLightbulb, FaHandsHelping, FaRocket, FaStar, FaAward, FaUserCheck } from "react-icons/fa";

export function InfiniteMovingCardsDemo() {
  return (
    (<div
      className="rounded-md flex flex-col antialiased  dark:bg-main dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={values} direction="right" speed="slow" />
    </div>)
  );
}


const values = [
  {
    quote: "Brindar soluciones adecuadas y éticas a las necesidades del cliente.",
    name: "Integridad",
    title: "",
    icon: <FaBalanceScale />, // Icono de balanza para Integridad
  },
  {
    quote: "Establecer relaciones de negocio basadas en la confianza, la sinceridad y el respeto mutuo.",
    name: "Honestidad",
    title: "",
    icon: <FaRegHandshake />, // Icono de apretón de manos para Honestidad
  },
  {
    quote: "Nos motiva acompañar a los clientes a conseguir sus objetivos.",
    name: "Pasión",
    title: "",
    icon: <FaLightbulb />, // Icono de bombilla para Pasión
  },
  {
    quote: "Satisfacer las necesidades del cliente de forma ágil y segura.",
    name: "Calidad",
    title: "",
    icon: <FaStar />, // Icono de estrella para Calidad
  },
  {
    quote: "Capacidad de acompañar a nuestros clientes en momentos de crisis y ayudarlos a solucionarlas.",
    name: "Resolución",
    title: "",
    icon: <FaHandsHelping />, // Icono de manos ayudando para Resolución
  },
  {
    quote: "Ofrecer soluciones tecnológicas que nos diferencien de los competidores.",
    name: "Innovación",
    title: "",
    icon: <FaRocket />, // Icono de cohete para Innovación
  },
  {
    quote: "Tomar la iniciativa y responsabilidad para ejecutar acciones a favor de nuestros clientes y colaboradores.",
    name: "Proactividad",
    title: "",
    icon: <FaAward />, // Icono de trofeo para Proactividad
  },
  {
    quote: "Favorecer una relación de apoyo y desarrollo con nuestros clientes y colaboradores a largo plazo.",
    name: "Lealtad",
    title: "",
    icon: <FaUserCheck />, // Icono de usuario con check para Lealtad
  },
];