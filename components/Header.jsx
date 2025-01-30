import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import logo from '@/public/guitare.png';

export default function Header() {
    return <header className={styles.header}>
        <Image src={logo} alt="Logo du concert" />
        <h1>X-Maleya</h1>
        <nav>
            <ul>
                <li>
                    <Link href="/">Acceuil</Link>
                </li>
                <li>
                    <Link href="/evenement1">Festival du mbolé</Link>
                </li>
                <li>
                    <Link href="/evenement2">Euro Tour</Link>
                </li>
                <li>
                    <Link href="/apropos">À propos</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>

    </header>
}