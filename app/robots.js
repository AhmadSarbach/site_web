/**
 * Configuration du fichier `robots.txt`
 * -------------------------------------
 * Cette fonction génère les règles de robots pour les moteurs de recherche.
 * Elle permet de définir quelles pages peuvent être explorées et indexées.
 *
 * @returns {import("next").MetadataRoute.Robots} Objet contenant les règles d'exploration et le lien du sitemap
 */
export default function robots() {
    return {
        rules: [
            {
                userAgent: '*', // Autorise tous les robots d'indexation
                allow: '/' // Permet l'accès à toutes les pages du site
            }
        ],
        sitemap: 'http://localhost:3000/sitemap.xml' // Lien vers le sitemap du site
    };
}
