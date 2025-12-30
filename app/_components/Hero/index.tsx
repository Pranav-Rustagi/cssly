import { Button, Heading, Section, Subtext } from "@/components";

const Hero = () => {
    return (
        <Section type="primary" className="h-screen! flex items-center">
            <div className="flex flex-col items-center">

                <Heading
                    text="Welcome to"
                    className="text-4xl md:text-6xl lg:text-7xl"
                />

                <Heading
                    text="CSSly"
                    className="text-4xl md:text-6xl lg:text-7xl"
                />

                <Subtext className="mb-8">
                    Explore beautiful designs crafted with pure HTML and CSS
                </Subtext>

                <Button>
                    Explore
                </Button>
            </div>
        </Section>
    );
}

export default Hero;