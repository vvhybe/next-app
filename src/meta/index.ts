import OGPData from '@/constant/meta';
import type { Metadata } from 'next';
import 'handyscript/lib/string';
import Head from 'next/head';
// import { useRouter } from 'next/router';

export function meta(page: string) : Metadata {
    // const router = useRouter();

    return {
        title: page.toCapitalCase() + ' | Janini Yoga Studio',
        description: OGPData[page].description,
        keywords: OGPData[page].keywords,
        // canonical: HostName + router.asPath,
        openGraph: {
            url: OGPData[page].url,
            title: page + ' | Next.js App',
            description: OGPData[page].description,
            images: [
                {
                    url: `/OGP/${page.toCapitalCase()}.jpg`,
                    width: 1280,
                    height: 640,
                    alt: page.toCapitalCase() + ' | Janini Yoga Studio',
                },
            ]
        },
    };
}

export type MetaProps = {
    page: string
}


// export default function Meta({page} : MetaProps){
//     const metaPage = meta(page);

//     return (
//         <Head>
//         </Head>
//     )
// }