// Importation des styles CSS spécifiques au composant Tour
import styles from './Tour.module.css';

// Importation du composant Link de Next.js pour la navigation optimisée
import Link from 'next/link';

/**
 * Composant `Tour`
 * ----------------
 * Ce composant affiche une section contenant :
 *  - Un contenu dynamique (`children`)
 *  - Un bouton contenant un lien vers une autre page (`lien`)
 * 
 * @param {Object} props - Propriétés du composant
 * @param {React.ReactNode} props.children - Contenu à afficher dans la section (ex: texte, images)
 * @param {string} props.lien - URL de redirection lorsque l'utilisateur clique sur "En savoir plus"
 * 
 * @returns {JSX.Element} Le JSX représentant la section Tour
 */
export default function Tour({ children, lien }) {
    return (
        <>
            {/* Conteneur principal de la section */}
            <div className={styles.conteneur}>

                {/* Affichage du contenu dynamique transmis via `children` */}
                <div>
                    {children}
                </div>

                {/* Bouton avec un lien redirigeant vers une autre page */}
                <div className={styles.bouton}>
                    <Link href={lien}>En savoir plus</Link>
                </div>

            </div>
        </>
    );
}
