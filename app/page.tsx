import Image from "next/image";
import headshot from "../public/ian-goode-bw.jpg";
import spotifyLogo from "../public/spotify-logo.svg";
import kinzenLogo from "../public/kinzen-logo.svg";
import axonistaLogo from "../public/axonista-logo.svg";
import { Instrument_Serif } from "next/font/google";

const fontTitle = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="flex flex-col items-center p-8 md:p-24">
      <div className="flex flex-col items-start space-y-12">
        <Image
          className="relative max-w-3xl rounded-full"
          src={headshot}
          alt="Photo of Ian Goode"
          width={96}
          height={96}
          priority
          placeholder="blur"
        />

        <h1 className={`${fontTitle.className} max-w-3xl text-5xl md:text-8xl`}>
          Hey, I’m Ian Goode.
        </h1>

        <p className="max-w-3xl leading-relaxed md:text-xl">
          I’m a Product Designer at{" "}
          <a
            href="https://open.spotify.com"
            target="_blank"
            className="inline-flex items-center gap-x-2 align-text-top font-bold leading-none text-dark-base underline decoration-spotify decoration-2 underline-offset-4 transition-all hover:text-spotify hover:decoration-4 hover:underline-offset-2 dark:text-light-base"
          >
            <Image
              className="size-5 md:size-6"
              src={spotifyLogo}
              alt="A small image of the Spotify logo"
              priority
            />
            Spotify
          </a>{" "}
          in Dublin, working on internal tools for content analysis and safety.
        </p>

        <p className="max-w-3xl leading-relaxed md:text-xl">
          Before Spotify, I led design at{" "}
          <a
            href="https://www.kinzen.com/"
            target="_blank"
            className="inline-flex items-center gap-x-2 align-text-top font-bold leading-none text-dark-base underline decoration-black decoration-2 underline-offset-4 transition-all hover:text-black hover:decoration-4 hover:underline-offset-2 dark:text-light-base dark:decoration-kinzen dark:hover:text-white"
          >
            <Image
              className="size-5 md:size-6 dark:invert"
              src={kinzenLogo}
              alt="A small image of the Kinzen logo"
              priority
            />
            Kinzen
          </a>
          , where I worked on software to help analysts identify harmful content
          at scale. Kinzen was acquired by Spotify in 2022.
        </p>

        <p className="max-w-3xl leading-relaxed md:text-xl">
          Before Kinzen, I led the design team at{" "}
          <a
            href="https://www.axonista.com/"
            target="_blank"
            className="inline-flex items-center gap-x-2 align-text-top font-bold leading-none text-dark-base underline decoration-axonista decoration-2 underline-offset-4 transition-all hover:text-axonista hover:decoration-4 hover:underline-offset-2 dark:text-light-base"
          >
            <Image
              className="size-5 md:size-6"
              src={axonistaLogo}
              alt="A small image of the Axonista logo"
              priority
            />
            Axonista
          </a>
          , where I worked on a platform to power interactive video experiences
          and designed video apps for global brands.
        </p>
      </div>
    </main>
  );
}
