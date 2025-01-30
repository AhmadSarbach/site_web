import styles from './Tour.module.css';

export default function Tour({ children }) {
    return <>
        <div className={styles.conteneur}>
            <div>
                {children}
            </div>
            <div className={styles.bouton}>
                <button className={styles.bouton}>
                    Reserver
                </button>
            </div>
        </div>
    </>
}