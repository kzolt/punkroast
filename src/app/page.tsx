import { UselessButton } from '~/components/useless-button'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
                <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
                    Nothing to see here
                </h1>
                <UselessButton />
            </div>
        </main>
    )
}
