"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-card";

export function InfiniteMovingCardsDemo() {
  return (
    <div
      className="rounded-md flex flex-col antialiased dark:bg-main dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={reviews} direction="right" speed="slow" />
    </div>
  );
}

const reviews = [
  // {
  //   quote: "¡El servicio fue excepcional! Me ayudaron en cada paso y solucionaron todas mis dudas.",
  //   name: "Carlos M.",
  //   title: "Cliente Satisfecho",
  //   image:
  //     "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  // },
  // {
  //   quote: "Un equipo increíble, siempre dispuestos a ayudar. Sin duda volveré a trabajar con ellos.",
  //   name: "Ana G.",
  //   title: "Socia Estratégica",
  //   image:
  //     "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  // },
  // {
  //   quote: "Recomiendo sus servicios al 100%. Cumplieron con todas mis expectativas y más.",
  //   name: "Luis P.",
  //   title: "Cliente Frecuente",
  //   image:
  //     "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  // },
  // {
  //   quote: "Muy profesionales y rápidos. Me sorprendió la calidad del trabajo en tan poco tiempo.",
  //   name: "María J.",
  //   title: "Cliente Entusiasmado",
  //   image:
  //     "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  // },
  {
    quote: "Su atención al detalle y compromiso son inigualables. Me dejaron muy satisfecho.",
    name: "Pedro R.",
    title: "Cliente Leal",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    quote: "Excelentes resultados. Superaron todas mis expectativas con su trabajo de innovación.",
    name: "Lucía F.",
    title: "Cliente Feliz",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
  {
    quote: "Un servicio de primera. Siempre están un paso adelante anticipando nuestras necesidades.",
    name: "Elena T.",
    title: "Cliente Regular",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
];
