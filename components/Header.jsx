import styles from './Header.module.css';

export default function Header() {
    return <header className={styles.header}>
        <h1>X-Maleya</h1>
        <nav>  
            <ul>
                <li><a href="#accueil">Accueil</a></li>
                <li><a href="#tournee">Tournée</a></li>
                <li><a href="#apropos">À propos</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
       
    </header>
}