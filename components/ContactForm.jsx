"use client";

import { useActionState, useState } from 'react';
import styles from './ContactForm.module.css';
import { contactServeur } from '@/actions/contact';
import { validateContact } from '@/validations/validation_contact';
import emailjs from 'emailjs-com';

export default function FormContact() {
    const [successMessage, setSuccessMessage] = useState("");

    const contact = async (previousFormState, formData) => {
        let [erreur, newFormState] = validateContact(formData);

        if (!erreur) {
            [erreur, newFormState] = await contactServeur(formData);

            try {
                await emailjs.send(
                    "service_96o1gsl",
                    "template_63lhvtp",
                    {
                        nom: formData.get('nom'),
                        courriel: formData.get('courriel'),
                        message: formData.get('message')
                    },
                    "hoEQqTbGoiaMKhWFb"
                );

                setSuccessMessage("Votre message a été envoyé avec succès !");
            } catch (error) {
                console.error(`Erreur lors de l'envoi de l'email : ${error.text || error.message}`);
            }
            console.log("message envoyé  avec succès");
        }

        if (erreur) {
            newFormState.courriel.valeur = formData.get('courriel');
            newFormState.nom.valeur = formData.get('nom');
            newFormState.message.valeur = formData.get('message');
        }

        return newFormState;
    };

    const [formState, formAction] = useActionState(contact, {
        courriel: { erreur: null, valeur: '' },
        nom: { erreur: null, valeur: '' },
        message: { erreur: null, valeur: '' }
    });

    return (
        <div>
            <form action={formAction} className={styles.form} noValidate>
                <label>
                    Nom:
                    <input type="text" name="nom" defaultValue={formState.nom.valeur} />
                    <div className={styles.erreur}>{formState.nom.erreur}</div>
                </label>

                <label>
                    Courriel:
                    <input type="email" name="courriel" defaultValue={formState.courriel.valeur} />
                    <div className={styles.erreur}>{formState.courriel.erreur}</div>
                </label>

                <label>
                    Message:
                    <textarea name="message" defaultValue={formState.message.valeur}></textarea>
                    <div className={styles.erreur}>{formState.message.erreur}</div>
                </label>

                <button type="submit">Envoyer</button>
            </form>

            {successMessage && <p className={styles.success}>{successMessage}</p>}
        </div>
    );
}
