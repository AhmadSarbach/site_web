// Importation des styles CSS spécifiques au composant Introduction
import styles from './Introduction.module.css';

/**
 * Composant `Introduction`
 * ------------------------
 * Ce composant affiche une section d'introduction avec :
 *  - Un titre (passé en paramètre `titre`)
 *  - Un texte (contenu dans `children`)
 *  - Un bouton d'action permettant de réserver
 * 
 * @param {Object} props - Propriétés du composant
 * @param {string} props.titre - Le titre affiché en `<h2>`
 * @param {React.ReactNode} props.children - Contenu dynamique à afficher sous le titre
 * 
 * @returns {JSX.Element} Le JSX représentant la section d'introduction
 */
export default function Introduction({ children, titre }) {
    return (
        <>
            {/* Conteneur principal qui englobe tout le contenu de l'introduction */}
            <div className={styles.conteneur}>

                {/* Section du titre */}
                <div>
                    <h2>{titre}</h2> {/* Affichage du titre passé en prop */}
                </div>

                {/* Conteneur du texte (contenu dynamique transmis via `children`) */}
                <div className={styles.texte}>
                    {children}
                </div>

                {/* Bouton permettant aux utilisateurs de réserver leur place */}
                <button className={styles.bouton}>
                    Reservez maintenant
                </button>
            </div>
        </>
    );
}