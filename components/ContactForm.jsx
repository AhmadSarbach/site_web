"use client"

import { useActionState } from 'react';
import styles from './ContactForm.module.css';

export default function FormContact() {
    /**
     * @param {FormData} formData 
     */
    const contact = (previousFormState, formData) => {
        const courriel = formData.get('courriel');
        const nom = formData.get('nom');
        const message = formData.get('message');

        let newFormState = {
            courriel: { erreur: null, valeur: '' },
            nom: { erreur: null, valeur: '' },
            message: { erreur: null, valeur: '' }
        }

        let erreur = false;
        if (!courriel) {
            erreur = true;
            newFormState.courriel.erreur = 'Veuillez entrer une adresse courriel.';
        } else if (!courriel.match(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/)) {
            erreur = true;
            newFormState.courriel.erreur = 'Veuillez entrer une adresse courriel valide.';
        }

        if (!nom) {
            erreur = true;
            newFormState.nom.erreur = 'Veuillez entrer votre nom.';
        } else if (nom.length < 2) {
            erreur = true;
            newFormState.nom.erreur = 'Le nom doit contenir au moins 2 caractères.';
        }

        if (!message) {
            erreur = true;
            newFormState.message.erreur = 'Veuillez entrer un message.';
        } else if (message.length < 10) {
            erreur = true;
            newFormState.message.erreur = 'Le message doit contenir au moins 10 caractères.';
        }
        else if (message.length > 100) {
            erreur = true;
            newFormState.message.erreur = 'Le message ne doit pas depasser 100 caractères.'
        }

        if (erreur) {
            newFormState.courriel.valeur = courriel;
            newFormState.nom.valeur = nom;
            newFormState.message.valeur = message;
        }

        if (!erreur) {
            console.log("Nom:", nom);
            console.log("Courriel:", courriel);
            console.log("Message:", message);
        }

        return newFormState;
    }

    const [formState, formAction] = useActionState(contact, {
        courriel: { erreur: null, valeur: '' },
        nom: { erreur: null, valeur: '' },
        message: { erreur: null, valeur: '' }
    });

    return <form action={formAction} className={styles.form} noValidate>

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
}