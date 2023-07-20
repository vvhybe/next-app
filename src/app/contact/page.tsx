import OGPData from "@/constant/meta";
import { Metadata } from "next"

export const metadata : Metadata = {
    title: 'Contact',
    description: OGPData.contact.description,
    keywords: OGPData.contact.keywords,
    openGraph: {
        url: OGPData.contact.url,
        title: 'Contact',
        description: OGPData.contact.description,
        images: [
            {
                url: `/OGP/Contact.jpg`,
                alt: 'Contact'
            },
        ]
    },
};

export default function Contact() {
    return (
      <h1>Contact</h1>
    )
}