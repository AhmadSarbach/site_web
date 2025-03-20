/**
 * Fonction `validateContact`
 * -------------------------
 * Cette fonction effectue la validation des données saisies par l'utilisateur côté client.
 * Elle vérifie la présence et la validité du nom, du courriel et du message avant envoi.
 *
 * @param {FormData} formData - Données du formulaire soumises par l'utilisateur
 * @returns {Array} Un tableau contenant un indicateur d'erreur et un nouvel état du formulaire
 */
export function validateContact(formData) {
    // Récupération des valeurs des champs du formulaire
    const courriel = formData.get('courriel');
    const nom = formData.get('nom');
    const message = formData.get('message');

    // Initialisation de l'état du formulaire avec des valeurs par défaut
    let newFormState = {
        courriel: { erreur: null, valeur: '' },
        nom: { erreur: null, valeur: '' },
        message: { erreur: null, valeur: '' }
    };

    let erreur = false;

    // Validation du courriel
    if (!courriel) {
        erreur = true;
        newFormState.courriel.erreur = 'Veuillez entrer une adresse courriel.';
    } else if (!courriel.match(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/)) {
        erreur = true;
        newFormState.courriel.erreur = 'Veuillez entrer une adresse courriel valide.';
    }

    // Validation du nom
    if (!nom) {
        erreur = true;
        newFormState.nom.erreur = 'Veuillez entrer votre nom.';
    } else if (nom.length < 2) {
        erreur = true;
        newFormState.nom.erreur = 'Le nom doit contenir au moins 2 caractères.';
    } else if (nom.length > 20) {
        erreur = true;
        newFormState.nom.erreur = 'Le nom ne doit pas contenir plus de 20 caractères.';
    }

    // Validation du message
    if (!message) {
        erreur = true;
        newFormState.message.erreur = 'Veuillez entrer un message.';
    } else if (message.length < 10) {
        erreur = true;
        newFormState.message.erreur = 'Le message doit contenir au moins 10 caractères.';
    } else if (message.length > 100) {
        erreur = true;
        newFormState.message.erreur = 'Le message ne doit pas dépasser 100 caractères.';
    }

    return [erreur, newFormState];
}
