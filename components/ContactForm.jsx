"use client";

// Importation des hooks React pour gérer l'état et les actions
import { useActionState, useState } from 'react';
// Importation des styles spécifiques au formulaire de contact
import styles from './ContactForm.module.css';
// Importation de la fonction qui envoie les données du formulaire au serveur
import { contactServeur } from '@/actions/contact';
// Importation de la fonction de validation des données du formulaire
import { validateContact } from '@/validations/validation_contact';

/**
 * Composant `FormContact`
 * -----------------------
 * Ce composant affiche un formulaire de contact permettant aux utilisateurs 
 * d'envoyer un message. Il gère :
 *  - La validation des champs (nom, courriel, message) côté client
 *  - L'envoi du formulaire au serveur pour traitement
 *  - L'affichage des erreurs et du message de succès après l'envoi
 *
 * @returns {JSX.Element} Le JSX représentant le formulaire de contact
 */
export default function FormContact() {
    // État pour afficher un message de succès après l'envoi du formulaire
    const [successMessage, setSuccessMessage] = useState("");

    /**
     * Fonction de gestion de la soumission du formulaire
     * Effectue la validation des données avant d'envoyer les informations au serveur.
     * En cas d'erreur, les messages correspondants sont affichés sous les champs concernés.
     * 
     * @param {Object} previousFormState - État précédent du formulaire
     * @param {FormData} formData - Données saisies par l'utilisateur
     * @returns {Object} Nouvel état du formulaire après validation et soumission
     */
    const contact = async (previousFormState, formData) => {
        // Validation des données du formulaire côté client
        let [erreur, newFormState] = validateContact(formData);

        // Si aucune erreur, envoi des données au serveur et affichage du message de succès
        if (!erreur) {
            [erreur, newFormState] = await contactServeur(formData);
            setSuccessMessage("Votre message a été envoyé avec succès !");
        }

        // Si une erreur est détectée, conserver les valeurs saisies par l'utilisateur
        if (erreur) {
            newFormState.courriel.valeur = formData.get('courriel');
            newFormState.nom.valeur = formData.get('nom');
            newFormState.message.valeur = formData.get('message');
        }

        return newFormState;
    };

    // Définition de l'état initial du formulaire et gestion de ses actions
    const [formState, formAction] = useActionState(contact, {
        courriel: { erreur: null, valeur: '' },
        nom: { erreur: null, valeur: '' },
        message: { erreur: null, valeur: '' }
    });

    return (
        <div>
            {/* Formulaire de contact */}
            <form action={formAction} className={styles.form} noValidate>
                {/* Champ pour le nom */}
                <label>
                    Nom:
                    <input type="text" name="nom" defaultValue={formState.nom.valeur} />
                    <div className={styles.erreur}>{formState.nom.erreur}</div>
                </label>

                {/* Champ pour le courriel */}
                <label>
                    Courriel:
                    <input type="email" name="courriel" defaultValue={formState.courriel.valeur} />
                    <div className={styles.erreur}>{formState.courriel.erreur}</div>
                </label>

                {/* Champ pour le message */}
                <label>
                    Message:
                    <textarea name="message" defaultValue={formState.message.valeur}></textarea>
                    <div className={styles.erreur}>{formState.message.erreur}</div>
                </label>

                {/* Bouton d'envoi du formulaire */}
                <button type="submit">Envoyer</button>
            </form>

            {/* Affichage du message de succès après envoi */}
            {successMessage && <p className={styles.success}>{successMessage}</p>}
        </div>
    );
}