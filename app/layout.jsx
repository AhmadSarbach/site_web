import Header from '@/components/Header';

import Footer from '@/components/Footer';

import { Lobster, Roboto, Cinzel, Bowlby_One } from 'next/font/google';

import styles from './layout.module.css';

import './globals.css';

const lobster = Lobster({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-lobster'
});

const roboto = Roboto({
    weight: ['400', '700'],
    style: 'normal',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto'
});

const cinzel = Cinzel({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-cinzel'
});

const bowlby_one = Bowlby_One({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-bowlby_one'
});

export const metadata = {
    title: "Site officiel X-Maleya",
    description: "Site web qui présente les differentes dates de concerts du groupe X-Maleya",
};

export default function RootLayout({ children }) {
    return <html lang="en" className={lobster.variable + ' ' + roboto.variable + ' ' + cinzel.variable + ' ' + bowlby_one.variable}>
        <body className={styles.body}>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </body>
    </html>

}
