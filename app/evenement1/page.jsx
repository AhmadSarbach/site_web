import styles from "./page.module.css";

import Introduction from "@/components/Introduction";

export const metadata = {
    title: "Madrid 2025 | Site officiel X-Maleya",
    description: "Page dédiée au concert de X-Maleya à Madrid : date, horaire, lieu et informations pour vivre une soirée inoubliable.",
};

export default function Evenement1() {
    return <>
        <div className={styles.conteneur}>
            <video
                autoPlay
                muted
                loop
                className={styles.background}
                src="Gims.mp4"></video>
            <Introduction titre="X-Maleya en Concert à Madrid !">
                <h3>Ne manquez pas leur retour explosif sur scène !</h3>
                <h4>📅 Date : Vendredi 21 novembre 2025</h4>
                <h4>⏰ Horaire : 18h45 (GMT)</h4>
                <h4>📍 Lieu : WiZink Center, Madrid</h4>
                <p>Plongez dans l’univers électrisant de X-Maleya, le groupe incontournable qui marie Afro-pop, rythmes entraînants et mélodies envoûtantes ! Leur énergie contagieuse, leurs textes profonds et leur présence scénique captivante promettent une soirée inoubliable.Que vous soyez fan de longue date ou simplement curieux de découvrir leur univers, ce concert est l’occasion idéale de vibrer au son de leurs plus grands tubes et de nouveautés exclusives.</p>
                <h4>🎟️ Billets en vente dès maintenant !</h4>
            </Introduction>
        </div>
    </>
}