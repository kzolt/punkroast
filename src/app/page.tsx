import Image from 'next/image'
import { UselessButton } from '~/components/useless-button'

export default function Home() {
    return (
        <main className="flex min-h-screen relative flex-col items-center justify-center">
            <Image
                src="/Punk.png"
                alt="Punkroast"
                width={100}
                height={100}
                className="top-5 left-5 absolute"
            />
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
                <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
                    Nothing to see here
                </h1>
                <UselessButton />
            </div>
        </main>
    )
}
