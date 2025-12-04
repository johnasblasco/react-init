import LightRays from "@/components/LightRays"
import TextType from "@/components/TextType"
import ClickSpark from "@/components/ClickSpark"
const Index = () => {
    return (
        <ClickSpark
            sparkColor='#fff'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
        >

            <div className="bg-foreground flex flex-col items-center justify-center h-screen">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#00ffff"
                    raysSpeed={1.5}
                    lightSpread={0.8}
                    rayLength={1.2}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0.05}
                    className="custom-rays"
                />

                <TextType
                    text={["Hello", "Stupid", "Bitch Ass", "Pinoy", "Nigga"]}
                    typingSpeed={75}
                    pauseDuration={1000}
                    showCursor={true}
                    cursorCharacter="|"
                    className="text-white text-4xl"
                />
            </div>

        </ClickSpark>
    )
}

export default Index