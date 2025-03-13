import ContactForm from '@/components/ContactForm';

export const metadata = {
    title: "Contact | Site officiel X-Maleya",
    description: "Page qui permet de contacter les organisateurs de concerts du groupe X-Maleya",
};

export default function contact() {
    return <>
        <h2>Contactez nous !</h2>
        <ContactForm />
    </>
}