import React from 'react';

import styles from './page.module.css';

import Tour from '@/components/Tour';

export const metadata = {
    title: "Evenements | Site officiel X-Maleya",
    description: "Page qui présente toutes les differentes dates de concerts du groupe X-Maleya",
};

export default function Evenement() {
    return <>
        <div className={styles.background}>
            <section className={styles.tour}>
                <Tour lien="/evenement1">
                    <h3>21/11/2025 | Madrid | WiZink Center | 18:45 GMT</h3>
                </Tour>
                <Tour lien="/evenement2">
                    <h3>24/11/2025 | Rome | PalaLottomatica | 19:00 GMT</h3>
                </Tour>
                <Tour lien="/evenement3">
                    <h3>27/11/2025 | Amsterdam | Ziggo Dome | 20:30 GMT</h3>
                </Tour>
            </section>
        </div>
    </>
}