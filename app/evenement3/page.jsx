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
                src="Davido.mp4"></video>
            <Introduction titre="X-Maleya en Concert à Amsterdam !">
                <h3>Une nuit électrique au cœur des Pays-Bas  !</h3>
                <h4>📅 Date : Jeudi 27 novembre 2025</h4>
                <h4>⏰ Horaire : 20h30 (GMT)</h4>
                <h4>📍 Lieu : Ziggo Dome, Amsterdam</h4>
                <p>Laissez-vous transporter par l’énergie inégalée de X-Maleya, le groupe phare qui fusionne Afro-pop, grooves entraînants et émotions universelles. Leur concert à Amsterdam sera une célébration de la musique, mêlant puissance vocale, rythmes envoûtants et une connexion authentique avec le public.Que vous veniez pour leurs titres cultes ou leurs dernières créations, ce spectacle unique transformera le Ziggo Dome en un espace où les cultures et les cœurs se rencontrent.</p>
                <h4>🎟️ Billets en vente dès maintenant !</h4>
            </Introduction>
        </div>
    </>
}