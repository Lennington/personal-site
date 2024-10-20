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
          I’m a Senior Product Designer at{" "}
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
          in Dublin, working on software for the teams that provide and manage Spotify's content catalogue.
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

        <p className="max-w-3xl leading-relaxed md:text-xl">
          This site is an early work in progress. If you&apos;d like to find out more
          about my work, or just say hello, drop me an email below.
        </p>

        <a
          href="mailto:hi@iangoode.ie"
          className="flex flex-none basis-auto items-center gap-3 rounded-lg bg-gray-200 px-4 py-3 text-sm transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-600 dark:bg-dark-base dark:text-white dark:hover:bg-dark-highlight dark:focus:ring-gray-300"
        >
          <svg
            className="h-[20px] w-[20px] text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"
            />
          </svg>
          hi@iangoode.ie
        </a>
      </div>
    </main>
  );
}
