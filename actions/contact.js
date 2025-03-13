"use server"

import nodemailer from "nodemailer";
import { validateContact } from "@/validations/validation_contact";

export async function contactServeur(formData) {
    let [erreur, newFormState] = validateContact(formData);

    if (erreur) {
        return [erreur, newFormState];
    }

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: `Nouveau message de ${formData.get("nom")}`,
        text: `Nom: ${formData.get("nom")}\nEmail: ${formData.get("courriel")}\nMessage: ${formData.get("message")}`,
        replyTo: formData.get("courriel"),
    };

    try {
        await transporter.sendMail(mailOptions);;
    } catch (error) {
        console.error(`Erreur lors de l'envoi de l'email : ${error.message}`);
    }

    return [erreur, newFormState];
}
