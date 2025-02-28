"use server"

import { validateContact } from "@/validations/validation_contact";

export async function contactServeur(formData) {

    let [erreur, newFormState] = validateContact(formData);

    if(erreur) {
        return [erreur, newFormState];
    }

    return [erreur, newFormState];
}