import styles from "./page.module.css";

import Introduction from "@/components/Introduction";

export default function Evenement1() {
    return <>
        <div className={styles.conteneur}>
            <video
                autoPlay
                muted
                loop
                className={styles.background}
                src="Fally.mp4"></video>
            <Introduction titre="X-Maleya en Concert à Rome !">
                <h3>Leur énergie légendaire s’invite dans la Ville Éternelle !</h3>
                <h4>📅 Date : Lundi 24 novembre 2025</h4>
                <h4>⏰ Horaire : 19h00 (GMT)</h4>
                <h4>📍Lieu : PalaLottomatica, Rome</h4>
                <p>Découvrez ou revivez la magie de X-Maleya, le groupe qui réinvente l’Afro-pop avec des rythmes vibrants, des mélodies hypnotiques et une connexion unique avec le public. Leur concert promet une immersion totale dans un univers musical riche en émotions et en couleurs.Que ce soit pour redécouvrir leurs classiques ou partager leurs nouvelles créations, ce spectacle sera l’occasion de célébrer la musique comme vecteur d’union et de joie.</p>
                <h4>🎟️ Billets en vente dès maintenant !</h4>
            </Introduction>
        </div>
    </>
}