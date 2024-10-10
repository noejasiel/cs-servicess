"use client";
import React from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "./lib/utils";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
} from "@tabler/icons-react";
import Image from "next/image";


export function SignupFormDemo({ msg = "" }) {

    const sendEmail = async () => {
        // const response = await fetch('http://localhost:3000/api/sendEmail', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         email: 'noesilvido@gmail.com',
        //         subject: 'Asunto del correo',
        //         message: 'Contenido del mensaje',
        //     }),
        // });

        // const data = await response.json();

        // const data = await fetch('http://localhost:3000/api/sendEmail' )
        // debugger
        // console.log(data, "ACA AMNDPDOOD")
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail();
    };

    return (
        <div className="w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:dark:bg-neutral-950/5 flex flex-row justify-evenly items-center " id="contact">

            <form className="min-w-[250px] w-[400px]" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="textMsg" className="text-[#00123dce] font-bold text-xl">  Nombre </Label>
                        <Input id="firstname" placeholder="Juan" type="text" />
                    </LabelInputContainer>
                </div>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="textMsg" className="text-[#00123dce] font-bold text-xl">  Correo </Label>
                    <Input id="email" placeholder="juanperez@fc.com" type="text" />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="textMsg" className="text-[#00123dce] font-bold text-xl">  Número </Label>
                    <Input id="phone" placeholder="5540808799" type="number" />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="textMsg" className="text-[#00123dce] font-bold text-xl"> ¿Qué necesitas? </Label>
                    <Input
                        id="textMsg"
                        placeholder="Me gustaria una pagina moderna"
                        type="textarea"
                        msg={msg}
                    />
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative group/btn from-[#22305b] via-[#1c2a79] to-[#0453cc] hover:from-[#03123d] hover:via-[#021164] hover:to-[#0670f0] block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset z-50 transition-all duration-300 ease-in-out"
                    type="submit"

                >
                    Enviar &rarr;
                    <BottomGradient />
                </button>

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            </form>
            {/* <Image
                src="/aerea.jpg"
                alt="aerea"
                width={600}
                height={700}
                className="rounded-2xl hidden md:block"
            /> */}
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({ children, className }) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
