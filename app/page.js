"use client"


import "animate.css";
import { useEffect, useState, useRef } from "react";

import { Button } from "@/components/ui/button"
import localFont from "next/font/local"
import { Flex, Box, Text, Heading, Center, IconButton } from "@chakra-ui/react"
import Content1 from "@/components/content_1";
import Content2 from "@/components/contest_2";
import { ContentProvider, useContent } from "@/components/contentContext";



const poppins = localFont({
    src: './fonts/Poppins-Bold.ttf',
    variable: '--font-poppins',
    weight: '700',
});

const butler = localFont({
    src: './fonts/Butler_Light.otf',
    variable: '--font-butler',
    weight: '300',
});

const newsReader = localFont({
    src: './fonts/Newsreader-Italic-VariableFont_opsz,wght.ttf',
    variable: '--font-newsReader',
    weight: '300',
});

const App = () => {
    return (
        <ContentProvider>
            <MainContent />
        </ContentProvider>
    );
};

const MainContent = () => {
    const [animate, setAnimate] = useState(false);
    const { showScrollContent, setIsMuted, isMuted } = useContent();

    const audioRef = useRef(null);


    function playAnimation() {

        setAnimate(true);

        const timer = setTimeout(() => {
            setAnimate(false);
        }, 1000);

        return () => clearTimeout(timer);
    }


    const MusicOn = () => (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47Z" /></svg>
    );

    const MusicOff = () => (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M792-56 56-792l56-56 736 736-56 56ZM560-514l-80-80v-246h240v160H560v166ZM400-120q-66 0-113-47t-47-113q0-66 47-113t113-47q23 0 42.5 5.5T480-418v-62l80 80v120q0 66-47 113t-113 47Z" /></svg>
    );

    useEffect(() => {
        playAnimation()
    }, []);

    const handleMuteClick = () => {

        setIsMuted(!isMuted);
    };

    return (
        <Flex position="relative">
            {showScrollContent ? (
                <IconButton
                    position="absolute"
                    left="25px"
                    bottom="10px"
                    borderRadius="50%"
                    bg={"#997A5E"}
                    transform="translateY(-50%)"
                    onClick={handleMuteClick}
                    aria-label="Next"
                    variant="outline"
                >
                    {isMuted ? (
                        <MusicOff />
                    ) : (
                        <MusicOn />
                    )}
                </IconButton>
            ) : (
                <></>
            )}
            <Box bgImage="url('https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/Desktop.jpg?updatedAt=1698223781539')"
                bgSize="cover"
                height="100vh"
                display={{ base: "none", lg: "flex" }}
                alignItems="center"
                justifyContent="center"
                color="white"
                width="65%"
                bgPosition="left"
            >
                <Box
                    height="100%"
                    bg="rgba(0, 0, 0, 0.35)"
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    justifyContent="flex-start"
                    color="white"
                    p={11}

                >
                    <Text className={`animate__animated ${animate ? "animate__fadeInUp" : ""}`} letterSpacing={2} fontFamily={poppins.style.fontFamily} textStyle="md" fontWeight="bold">WEDDING ANNOUNCEMENT</Text>
                    <Heading py={10} fontFamily={butler.style.fontFamily} textStyle="7xl" fontWeight={"light"} lineHeight={"72px"}>TIFFANY &
                        <br />
                        JARED</Heading>
                    <Text letterSpacing="0.1em" className={`animate__animated ${animate ? "animate__fadeInUp" : ""}`} fontWeight={"light"} fontFamily={newsReader.style.fontFamily} as="p">"Aku ingin mencintaimu dengan sederhana; dengan kata yang tak sempat  diucapkan kayu kepada api yang menjadikannya abu. Aku ingin mencintaimu  dengan sederhana; dengan isyarat yang tak sempat disampaikan awan kepada  hujan yang menjadikannya tiada."
                        <br /> — Sapardi Djoko Damono</Text>
                </Box>
            </Box>
            <Box
                height="100vh"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
                width={{ base: "100%", lg: "35%" }}
            >
                {!showScrollContent ? (
                    <Content1 />
                ) : (
                    <Content2 />
                )}
            </Box>
        </Flex>
    )
}

export default App;