import styles from "./page.module.css"
import Introduction from "@/components/Introduction"

export default function Evenement1() {
    return <>
        <div className={styles.conteneur}>
            <video
                autoPlay
                muted
                loop
                className={styles.background}
                src="Gims.mp4"></video>
            <Introduction titre="Festi Mbole!!!!">
                <h3>26 Juin 2025</h3>
                <h4>Stade Ahmadou Ahidjo 21:00 GMT</h4>
                <p>Comme à son habitude, le groupe X-Maleya mettra le feu lors du Festival du Mbolé, qui se tiendra à Yaoundé le 26 juin 2025. Ne manquez pas cette occasion de vivre des moments inoubliables avec le plus grand trio de l'histoire du Cameroun !</p>
            </Introduction>
        </div>
    </>
}