import styles from './Introduction.module.css'

export default function Introduction({ children, titre }) {
    return <>
        <div className={styles.conteneur}>
            <div>
                <h2>{titre}</h2>
            </div>
            <div className={styles.texte}>
                {children}
            </div>
            <button className={styles.bouton}>
                Reservez maintenant
            </button>
        </div>
    </>
}