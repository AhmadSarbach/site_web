"use server";

// Importation de Nodemailer pour l'envoi d'e-mails
import nodemailer from "nodemailer";
// Importation de la validation côté client pour assurer une double vérification des données
import { validateContact } from "@/validations/validation_contact";

/**
 * Fonction `contactServeur`
 * -------------------------
 * Cette fonction exécute la validation et l'envoi du formulaire côté serveur.
 * Elle assure :
 *  - Une validation supplémentaire des données reçues
 *  - L'envoi d'un email avec les informations fournies
 *
 * @param {FormData} formData - Données du formulaire soumises par l'utilisateur
 * @returns {Array} Un tableau contenant un indicateur d'erreur et un état du formulaire mis à jour
 */
export async function contactServeur(formData) {
    // Exécution d'une validation côté serveur
    let [erreur, newFormState] = validateContact(formData);

    if (erreur) {
        return [erreur, newFormState];
    }

    // Configuration du transporteur SMTP pour l'envoi d'email
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: process.env.EMAIL_PORT, // Définit si une connexion sécurisée SSL/TLS est utilisée
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // Définition des options de l'email
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: `Nouveau message de ${formData.get("nom")}`,
        text: `Nom: ${formData.get("nom")}\nEmail: ${formData.get("courriel")}\nMessage: ${formData.get("message")}`,
        replyTo: formData.get("courriel"),
    };

    try {
        // Tentative d'envoi de l'email
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error(`Erreur lors de l'envoi de l'email : ${error.message}`);
    }

    return [erreur, newFormState];
}
