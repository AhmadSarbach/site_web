/**
 * 
 * @returns {import("next").MetadataRoute.Sitemap}
 */
export default function sitemap() {
    return [
        {
            url: 'http://localhost:3000/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'http://localhost:3000/apropos',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.2
        },
        {
            url: 'http://localhost:3000/evenements',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'http://localhost:3000/evenement1',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'http://localhost:3000/evenement2',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'http://localhost:3000/evenement3',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'http://localhost:3000/contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        }
    ]
}