
import Image from 'next/image';
import styles from './layout.module.css'
import style from './page.module.css'


import imgacceuil from '@/public/xmaleya-accueil.jpg';
import eventImage1 from '@/public/xmaleya-accueil.jpg';
import eventImage2 from '@/public/evenement1.jpeg';
import eventImage3 from '@/public/evenement2.jpg';


export default function Accueil() {
    return <>
        <section id="introduction">
            <h2>Bienvenue sur le site officiel de X-Maleya</h2>
            <p>X-Maleya est un groupe de musique camerounais connu pour son style unique qui mélange des rythmes traditionnels africains avec des influences modernes. Depuis leur formation, ils ont captivé le public avec leurs performances dynamiques et leur musique entraînante.</p>
            <Image src={imgacceuil} alt="photo-x-Maleya" />
            <p>Le groupe est composé de trois membres talentueux : Roger, Auguste, et Hais. Ensemble, ils ont sorti plusieurs albums à succès et ont parcouru le monde pour partager leur passion pour la musique.</p>
        </section>


        <section>
            <h2>Événements Passés</h2>
            <div className={style.gallery}>
                <div className={style.event}>
                    <Image src={eventImage1} alt="Événement 1" />
                    <p>Concert à Douala - 2022</p>
                </div>
                <div className={style.event}>
                    <Image src={eventImage2} alt="Événement 2" />
                    <p>Festival de Yaoundé - 2021</p>
                </div>
                <div className={style.event}>
                    <Image src={eventImage3} alt="Événement 3" />
                    <p>Showcase à Paris - 2020</p>
                </div>

            </div>
        </section>
    </>
}
