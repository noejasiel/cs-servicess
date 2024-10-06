// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         const { email, subject, message } = req.body;

//         // Configura el transportador de nodemailer para GoDaddy
//         const transporter = nodemailer.createTransport({
//             host: 'smtpout.secureserver.net', // Servidor SMTP de GoDaddy
//             port: 587, // Usar 465 para SSL
//             secure: false, // true para 465, false para 587
//             auth: {
//                 user: 'contacto@cs-services.mx', // Tu correo electrónico
//                 pass: 'contactocs', // Tu contraseña de correo electrónico
//             },
//         });

//         // Configura el correo
//         const mailOptions = {
//             from: 'contacto@cs-services.mx', // Remitente
//             to: email, // Destinatario
//             subject: subject,
//             text: message,
//         };

//         try {
//             await transporter.sendMail(mailOptions);
//             res.status(200).json({ message: 'Correo enviado con éxito' });
//         } catch (error) {
//             res.status(500).json({ error: 'Error al enviar el correo: ' + error.message });
//         }
//     } else {
//         res.setHeader('Allow', ['POST']);
//         res.status(405).end(`Método ${req.method} no permitido`);
//     }
// }

export async function GET(){
    return Response.json({message: 'Hello World'})
}