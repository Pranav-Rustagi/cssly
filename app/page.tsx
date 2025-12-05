import { About, Contact, Featured, Hero, Support, Upcoming } from "./_components";

export default function Home() {
    return (
        <div>
            <Hero />
            <Featured />
            <About />
            <Upcoming />
            <Support />
            <Contact />
        </div>
    );
}
