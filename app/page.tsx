import Image from 'next/image'
import headshot from '../public/ian-goode-bw.jpg'
import { Instrument_Serif } from 'next/font/google'

const fontTitle = Instrument_Serif({ 
  weight: '400',
  subsets: ['latin']
})

export default function Home() {
  return (
    <main className="flex flex-col items-center p-8 md:p-24">
      
      <div className="flex flex-col space-y-12 items-start">
        <Image
          className="relative rounded-full max-w-3xl"
          src={headshot}
          alt="Photo of Ian Goode"
          width={96}
          height={96}
          priority
          placeholder="blur"
        />

        <h1 className={`${fontTitle.className} text-5xl md:text-8xl max-w-3xl`}>Hey, I’m Ian Goode.</h1>

        <p className="md:text-xl max-w-3xl leading-relaxed">I’m a Product Designer at {' '}
          <a href="https://open.spotify.com" target="_blank" className="text-dark-base dark:text-light-base inline-flex gap-x-2 items-center font-bold leading-none align-text-top decoration-spotify underline-offset-4 decoration-2 underline hover:text-spotify">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><g clip-path="url(#a)"><path fill="#1ED760" d="M18.992 10.659C15.182 8.396 8.898 8.189 5.26 9.292a1.105 1.105 0 1 1-.642-2.116C8.794 5.91 15.734 6.154 20.12 8.757a1.106 1.106 0 0 1-1.128 1.902Zm-.125 3.35a.922.922 0 0 1-1.268.304c-3.176-1.952-8.02-2.518-11.777-1.377a.923.923 0 0 1-1.15-.614.923.923 0 0 1 .615-1.15c4.292-1.302 9.629-.67 13.277 1.571.433.267.57.834.303 1.267Zm-1.446 3.22a.736.736 0 0 1-1.013.244c-2.776-1.696-6.27-2.079-10.383-1.14a.736.736 0 1 1-.328-1.435c4.502-1.03 8.364-.586 11.48 1.317a.737.737 0 0 1 .244 1.013ZM12 .18C5.472.181.18 5.473.18 12c0 6.528 5.292 11.82 11.82 11.82 6.527 0 11.818-5.292 11.818-11.82C23.82 5.473 18.528.18 12 .18Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg>
            Spotify
          </a> 
          {' '} in Dublin, working on internal tools for content analysis and safety.
        </p>

        <p className="md:text-xl max-w-3xl leading-relaxed">Before Spotify, I led design at {' '}
          <a href="https://www.kinzen.com/" target="_blank" className="text-dark-base dark:text-light-base inline-flex gap-x-2 items-center font-bold leading-none align-text-top decoration-black dark:decoration-kinzen underline-offset-4 decoration-2 underline hover:text-black dark:hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" d="m22.04 5.386.709 1.215-9.343 5.395 9.343 5.394-.71 1.215-9.334-5.394V24h-1.41V0h1.41v10.78l9.334-5.394ZM6.611 1.257l-1.214.701 3.385 5.863 1.213-.701-3.384-5.863ZM0 11.294h6.77v1.402H0v-1.402ZM7.114 14l-5.862 3.385.7 1.214 5.863-3.385-.7-1.214ZM5.38 22.04l3.385-5.863v.002l1.214.7-3.385 5.863-1.214-.702ZM1.26 6.605l.702-1.215 5.863 3.386-.702 1.213-5.862-3.384Z" clip-rule="evenodd"/></svg>
            Kinzen
          </a>
          , where I worked on software to help analysts identify harmful content at scale. Kinzen was acquired by Spotify in 2022.
        </p>

        <p className="md:text-xl max-w-3xl leading-relaxed">Before Kinzen, I led the design team at {' '}
          <a href="https://www.axonista.com/" target="_blank" className="text-dark-base dark:text-light-base inline-flex gap-x-2 items-center font-bold leading-none align-text-top decoration-axonista underline-offset-4 decoration-2 underline hover:text-axonista">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" fill="none"><path fill="#2A34F5" d="M0 0h6.53c.235 0 .411.059.529.235 2.706 3.647 5.47 7.294 8.176 10.942.177.235.118.352 0 .529C12.53 15.353 9.765 19 7.06 22.647c-.118.118-.294.235-.412.235H0c.059-.117.118-.235.176-.294C2.882 19 5.588 15.353 8.294 11.765c.177-.236.177-.412 0-.647C5.588 7.529 2.882 3.882.176.294.118.235.06.176 0 0Zm24 22.941h-6.53c-.235 0-.411-.059-.529-.294a42.13 42.13 0 0 0-1.47-1.941c1.117-1.53 2.294-3.059 3.47-4.588A254.22 254.22 0 0 0 24 22.94ZM18.882 6.824c-1.176-1.53-2.294-3.06-3.47-4.589L17 .118c.059-.06.177-.06.235-.06h6.53c.058 0 .058 0 .117.06a395.002 395.002 0 0 1-5 6.706Z"/></svg>
            Axonista
          </a>
          , where I worked on a platform to power interactive video experiences and designed video apps for global brands.
        </p>

        <a href="mailto:iandgoode@gmail.com" class="flex flex-none basis-auto items-center gap-3 bg-white dark:bg-dark-base focus:outline-none focus:ring-2 focus:ring-gray-600 dark:focus:ring-gray-300 rounded-lg px-4 py-3 text-sm dark:bg-dark-base dark:text-white hover:bg-gray-100 dark:hover:bg-dark-highlight">
          <svg class="w-[20px] h-[20px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"/>
          </svg>
          iandgoode@gmail.com
        </a>
      </div>
    </main>
  )
}
