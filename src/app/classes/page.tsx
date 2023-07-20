import OGPData from "@/constant/meta";
import { Metadata } from "next"

export const metadata : Metadata = {
    title: 'Classes',
    description: OGPData.classes.description,
    keywords: OGPData.classes.keywords,
    openGraph: {
        url: OGPData.classes.url,
        title: 'Classes',
        description: OGPData.classes.description,
        images: [
            {
                url: `/OGP/Classes.jpg`,
                alt: 'Classes'
            },
        ]
    },
};

export default function Classes() {
    return (
      <h1>Classes</h1>
    )
}
  