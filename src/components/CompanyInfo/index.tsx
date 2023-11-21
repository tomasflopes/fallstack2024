import React, {useId} from "react";
import CompanyDescription from "@/components/CompanyDescription";
import HeadingText from "@/components/HeadingText";
import CompanySocials from "@/components/CompanySocials";

interface CompanyInfoProps {
    title: string | undefined;
    bodyText: React.ReactNode
    videoHref: string | undefined;
    videoTitle: string | undefined;
    twitterLink: string | undefined;
    facebookLink: string | undefined;
    instagramLink: string | undefined;
    youtubeLink: string | undefined;
    linkedinLink: string | undefined;
    website: string | undefined;
    tier: string;
}

const CompanyInfo: React.FC<CompanyInfoProps> = (
    {
        title,
        bodyText,
        videoHref,
        videoTitle,
        twitterLink,
        facebookLink,
        instagramLink,
        youtubeLink,
        linkedinLink,
        website,
        tier
    }) => {


    return (
        <section
            className="center container mx-auto w-11/12 rounded-lg p-10 sm:w-3/4 lg:p-14 bg-white"
        >
            {bodyText && (
                <CompanyDescription>
                    <h1
                        className='
                            text-black
                            text-lg sm:text-lg md:text-xl lg:text-2xl
                            text-left
                            my-5
                            font-medium
                        '
                    >SOBRE</h1>
                    <div className="
                            text-left
                            text-black
                            text-md sm:text-md md:text-lg lg:text-xl
                            my-2.5
                            font-light
                         ">{bodyText}</div>
                </CompanyDescription>
            )}
            {tier === 'Diamond' &&
                <div className='flex flex-col space-y-2  leading-8 lg:px-10 lg:text-lg  mt-10'>
                    <h1
                        className='
                            text-black
                            text-lg sm:text-lg md:text-xl lg:text-2xl
                            text-left
                            my-5
                            font-medium
                        '
                    >{videoTitle || 'Vídeo'}</h1>
                    <div className="flex items-center justify-center" key={useId()}>
                        <iframe
                            className="max-w-full rounded-lg my-2.5 w-full aspect-video"
                            //width="100"
                            //height="315"
                            src={videoHref}
                            title={videoTitle}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    </div>
                </div>
            }
        </section>

    );
};


export default CompanyInfo;