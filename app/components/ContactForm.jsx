"use client";
import React, { useState, useEffect } from "react";
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
    const [isLoading, setIsLoading] = useState(false);  // Estado para mostrar el loader
    const [statusMessage, setStatusMessage] = useState(""); // Estado para mensajes de éxito o error
    const [messageType, setMessageType] = useState(""); // Estado para tipo de mensaje (éxito o error)
    const [formData, setFormData] = useState({  // Estado para manejar los datos del formulario
        nombre: '',
        email: '',
        phone: '',
        textMsg: ''
    });

    // Función de validación
    const isFormValid = () => {
        const { nombre, email, phone, textMsg } = formData;
        return nombre && email && phone && textMsg;  // Retorna true si todos los campos están completos
    };

    const sendEmail = async () => {
        try {
            setIsLoading(true);  // Mostrar el loader
            const response = await fetch('https://server-sfka.onrender.com/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    subject: 'Quiero una consultoría',
                    message: formData.textMsg,
                    number: formData.phone,
                    name: formData.nombre,
                }),
            });

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            setStatusMessage('¡Correo enviado con éxito! 🎉'); // Mensaje de éxito
            setMessageType("success"); // Tipo de mensaje
            setFormData({ nombre: '', email: '', phone: '', textMsg: '' }); // Limpiar los campos del formulario
        } catch (error) {
            setStatusMessage('Hubo un error al enviar el correo 😢'); // Mensaje de error
            setMessageType("error"); // Tipo de mensaje
        } finally {
            setIsLoading(false);  // Ocultar el loader
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail();
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    // Efecto para ocultar el mensaje después de 5 segundos
    useEffect(() => {
        if (statusMessage) {
            const timer = setTimeout(() => {
                setStatusMessage("");
            }, 5000); // 5 segundos

            return () => clearTimeout(timer); // Limpiar el temporizador al desmontar
        }
    }, [statusMessage]);

    return (
        <div className="w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:dark:bg-neutral-950/5 flex flex-row justify-evenly items-center " id="contact">

            <form className="min-w-[250px] w-[400px]" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer>
                        <Label htmlFor="nombre" className="text-[#00123dce] font-bold text-xl">Nombre</Label>
                        <Input
                            id="nombre"
                            placeholder="Juan"
                            type="text"
                            value={formData.nombre}
                            onChange={handleChange}
                        />
                    </LabelInputContainer>
                </div>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email" className="text-[#00123dce] font-bold text-xl">Correo</Label>
                    <Input
                        id="email"
                        placeholder="juanperez@fc.com"
                        type="text"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="phone" className="text-[#00123dce] font-bold text-xl">Número</Label>
                    <Input
                        id="phone"
                        placeholder="5540808799"
                        type="number"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="textMsg" className="text-[#00123dce] font-bold text-xl">¿En qué podemos ayudarte?</Label>
                    <Input
                        id="textMsg"
                        placeholder="Me gustaría una consultoría"
                        type="textarea"
                        value={formData.textMsg}
                        onChange={handleChange}
                    />
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative group/btn from-[#22305b] via-[#1c2a79] to-[#0453cc] hover:from-[#03123d] hover:via-[#021164] hover:to-[#0670f0] block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset z-50 transition-all duration-300 ease-in-out"
                    type="submit"
                    disabled={isLoading || !isFormValid()}  // Deshabilitar el botón si está cargando o si el formulario es inválido
                >
                    {isLoading ? "Enviando..." : "Enviar →"}
                    <BottomGradient />
                </button>

                {statusMessage && (  // Mostrar el mensaje de éxito o error
                    <div
                        className={`mt-4 p-3 rounded text-center text-white ${
                            messageType === "success" ? "bg-green-500" : "bg-red-500"
                        } transition-all duration-500 ease-in-out animate-slide-down`}
                    >
                        <p>{statusMessage}</p>
                    </div>
                )}

                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            </form>
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
