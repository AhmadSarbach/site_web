// Importation des styles CSS spécifiques au footer
import styles from './Footer.module.css';

/**
 * Composant `Footer`
 * ------------------
 * Ce composant représente le pied de page du site web. Il contient :
 *  - Un message de copyright indiquant l'année et le nom du groupe
 *  - Une liste de liens vers les réseaux sociaux officiels du groupe X-Maleya
 * 
 * @returns {JSX.Element} Le JSX représentant le footer du site
 */
export default function Footer() {
    return (
        // Élément <footer> qui sert de pied de page pour le site
        <footer className={styles.footer}>

            {/* Texte de copyright affichant l'année et les droits réservés */}
            <p>&copy; {new Date().getFullYear()} X-Maleya. Tous droits réservés.</p>


            {/* Liste des liens vers les réseaux sociaux */}
            <ul>
                <li>
                    {/* Lien vers la page Facebook du groupe */}
                    <a href="https://www.facebook.com/xmaleya" target="_blank">
                        Facebook
                    </a>
                </li>
                <li>
                    {/* Lien vers la page Twitter du groupe */}
                    <a href="https://www.twitter.com/xmaleya" target="_blank">
                        Twitter
                    </a>
                </li>
                <li>
                    {/* Lien vers la page Instagram du groupe */}
                    <a href="https://www.instagram.com/xmaleya" target="_blank">
                        Instagram
                    </a>
                </li>
            </ul>
        </footer>
    );
}
