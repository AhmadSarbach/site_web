import React from 'react';
import styles from './page.module.css';
import Tour from '@/components/Tour';

export default function Evenement2() {
    return <>
        <div className={styles.background}>
            <Tour>
                <h3>21/11/2025 | Madrid | WiZink Center | 18:45 GMT</h3>
            </Tour>
            <Tour>
                <h3>24/11/2025 | Rome | PalaLottomatica | 19:00 GMT</h3>
            </Tour>
            <Tour>
                <h3>27/11/2025 | Amsterdam | Ziggo Dome | 20:30 GMT</h3>
            </Tour>
            <Tour>
                <h3>30/11/2025 | Bruxelles | Forest National | 18:15 GMT</h3>
            </Tour>
            <Tour>
                <h3>03/12/2025 | Lisbonne | Altice Arena | 19:00 GMT</h3>
            </Tour>

        </div>
    </>
}