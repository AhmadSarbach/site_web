// Importation du composant Link de Next.js pour une navigation rapide sans rechargement de la page
import Link from 'next/link';

// Importation du composant Image de Next.js pour une gestion optimisée des images
import Image from 'next/image';

// Importation des styles CSS spécifiques à ce composant
import styles from './Header.module.css';

// Importation du logo situé dans le dossier public
import logo from '@/public/guitare.png';

/**
 * Composant `Header`
 * ------------------
 * Ce composant représente l'en-tête (header) du site web. Il contient :
 *  - Un logo (affiché avec Next.js Image pour l'optimisation)
 *  - Le nom du groupe "X-Maleya"
 *  - Une barre de navigation permettant d'accéder aux différentes sections du site
 * 
 * @returns {JSX.Element} Le JSX représentant le header du site
 */
export default function Header() {
    return (
        // Élément <header> contenant le logo, le titre et la navigation
        <header className={styles.header}>

            {/* Affichage du logo en utilisant Next.js Image pour une meilleure performance */}
            <Image
                src={logo}              // Source de l'image importée
                alt="Logo du concert"   // Texte alternatif pour l'accessibilité
                className={styles.logo} // Application des styles CSS au logo
            />

            {/* Nom du groupe affiché dans l'en-tête */}
            <h1>X-Maleya</h1>

            {/* Barre de navigation permettant de naviguer entre les pages du site */}
            <nav className={styles.nav}>
                <ul>
                    {/* Chaque <li> contient un lien de navigation utilisant Next.js Link */}
                    <li>
                        <Link href="/">Accueil</Link> {/* Lien vers la page d'accueil */}
                    </li>
                    <li>
                        <Link href="/evenements">Euro Tour</Link> {/* Lien vers la page des événements */}
                    </li>
                    <li>
                        <Link href="/apropos">À propos</Link> {/* Lien vers la page "À propos" */}
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link> {/* Lien vers la page de contact */}
                    </li>
                </ul>
            </nav>
        </header>
    );
}
