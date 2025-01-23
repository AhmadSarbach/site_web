import styles from './Footer.module.css';

export default function Footer() {
    return <footer className={styles.footer}>
        <p>&copy; 2023 X-Maleya. Tous droits réservés.</p>
        <ul>
            <li><a href="https://www.facebook.com/xmaleya" target="_blank">Facebook</a></li>
            <li><a href="https://www.twitter.com/xmaleya" target="_blank">Twitter</a></li>
            <li><a href="https://www.instagram.com/xmaleya" target="_blank">Instagram</a></li>
        </ul>
    </footer>
}