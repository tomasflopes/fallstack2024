import React from "react";
import Image, { StaticImageData } from "next/image";

export interface SponsorProps {
  logoHref: StaticImageData;
  name: string;
  website: string;
}

const Sponsor: React.FC<SponsorProps> = ({ logoHref, name, website }) => {
  return (
    <a
      target="_blank"
      href={website}
      className="mx-4 flex size-48 items-center justify-center transition duration-300 ease-in-out hover:scale-105"
      rel="noreferrer"
    >
      <Image
        className="mx-auto h-auto max-h-[90%] max-w-[90%] rounded-[5px]"
        src={logoHref}
        alt={name}
      />
    </a>
  );
};

export default Sponsor;
