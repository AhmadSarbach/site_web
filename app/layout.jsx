import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './layout.module.css'

import './globals.css';

export const metadata = {
    title: "Site officiel X-Maleya",
    description: "",
};



export default function RootLayout({ children }) {
    return <html lang="en">
        <body className={styles.body}>
            <Header>

            </Header>
            <main  className={styles.main}>
            
            {children}
            </main>

            <Footer>
            </Footer>
        </body>
    </html>

}
