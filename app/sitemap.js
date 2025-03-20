/**
 * Configuration du fichier `sitemap.xml`
 * --------------------------------------
 * Cette fonction génère une liste d'URLs pour le sitemap du site.
 * Le sitemap aide les moteurs de recherche à explorer et indexer efficacement le site.
 * Chaque entrée contient :
 *  - `url` : L'adresse de la page
 *  - `lastModified` : La dernière date de modification de la page
 *  - `changeFrequency` : La fréquence estimée des mises à jour
 *  - `priority` : L'importance relative de la page (entre 0.0 et 1.0)
 *
 * @returns {import("next").MetadataRoute.Sitemap} Un tableau d'objets représentant les pages du site
 */
export default function sitemap() {
    return [
        {
            url: 'http://localhost:3000/', // Page d'accueil
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'http://localhost:3000/apropos', // Page "À propos"
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.2
        },
        {
            url: 'http://localhost:3000/evenements', // Page listant les événements
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'http://localhost:3000/evenement1', // Page d'un événement spécifique
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'http://localhost:3000/evenement2', // Page d'un deuxième événement
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'http://localhost:3000/evenement3', // Page d'un troisième événement
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'http://localhost:3000/contact', // Page de contact
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        }
    ];
}
