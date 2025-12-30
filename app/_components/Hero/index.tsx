import { Button, Heading, Section, Subtext } from "@/components";

const Hero = () => {
    return (
        <Section type="primary">
            <div className="flex flex-col items-center gap-5">
                
                <Heading 
                    text={["Welcome to", "CSSly"]}
                    className="text-7xl"
                />

                <Subtext className="text-xl mb-8">
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