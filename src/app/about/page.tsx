import OGPData from "@/constant/meta";
import { Metadata } from "next"

export const metadata : Metadata = {
    title: 'About',
    description: OGPData.about.description,
    keywords: OGPData.about.keywords,
    openGraph: {
        url: OGPData.about.url,
        title: 'About',
        description: OGPData.about.description,
        images: [
            {
                url: `/OGP/About.jpg`,
                alt: 'About'
            },
        ]
    },
};

export default function About() {
    return (
      <h1>About</h1>
    )
}
  