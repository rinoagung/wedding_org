
import React, { useRef } from "react";
import Slider from "react-slick";
import { Button } from "@chakra-ui/react";
import { Box, Text, Heading, Image, Flex, IconButton } from "@chakra-ui/react";
import localFont from "next/font/local";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContent } from "./contentContext";
import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody } from "@chakra-ui/modal";


const poppins = localFont({
    src: '../app/fonts/Poppins-Bold.ttf',
    variable: '--font-poppins',
    weight: '700',
});

const butler = localFont({
    src: '../app/fonts/Butler_Light.otf',
    variable: '--font-butler',
    weight: '300',
});

const newsReader = localFont({
    src: '../app/fonts/Newsreader-Italic-VariableFont_opsz,wght.ttf',
    variable: '--font-newsReader',
    weight: '300',
});

const Content2 = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const handleImageClick = (src) => {
        setSelectedImage(src);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };
    const { isMuted } = useContent();

    const sliderRef = useRef(null);
    const audioRef = useRef(null);
    const [currentImage, setCurrentImage] = useState(0);


    const [animate, setAnimate] = useState(true);
    const [fadeIn, setFadeIn] = useState(false);

    const images = [
        "image/1.jpg",
        "image/2.jpg",
        "image/3.jpg",
        "image/4.jpg"

    ];


    const PrevIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>
    );

    const NextIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
    );

    const settings = {
        infinite: true,
        speed: 500,
        centerMode: true,
        centerPadding: "100px",
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                },
            },
        ],
    };

    useEffect(() => {


        if (audioRef.current) {
            audioRef.current.muted = false;
            audioRef.current.play().catch(error => {
                console.error("Error playing audio:", error);
            });
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {

            setFadeIn(false);

            setTimeout(() => {
                setCurrentImage(prev => (prev + 1) % images.length);
                setFadeIn(true);
            }, 2500);

        }, 5000);


        if (animate) {
            setTimeout(() => {
                setAnimate(false);
            }, 2000);
        }

        return () => clearInterval(interval);
    }, [animate]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.muted = isMuted;
        }
    }, [isMuted]);

    return (
        <Box
            overflowX="hidden"
            overflowY="auto"
            width={"100%"}
            height={"100%"}>
            <Box
                className={`animate__animated ${animate ? "animate__fadeInUp" : ""} ${fadeIn ? "animate__fadeIn" : ""}`}
                display="flex"
                flexDirection="column"
                color="white"
                width={"100%"}
                height={"100%"}
                textAlign="center"
                bgImage={`url(${images[currentImage]})`}
                bgSize="cover"
                style={{
                    animationDuration: animate ? '2s' : '2.5s', // Durasi animasi
                }}
            >
                <Box
                    bg="rgba(0, 0, 0, 0.35)"
                    width={"100%"}
                    height={"100%"}
                    p={20}>
                    <Text height={"30%"} letterSpacing={2} fontFamily={poppins.style.fontFamily} textStyle="md" fontWeight="bold">WEDDING ANNOUNCEMENT</Text>
                    <Heading height={"40%"} py={10} fontFamily={butler.style.fontFamily} textStyle="4xl" fontWeight={"light"}>TIFFANY & JARED
                        <br /> #TImetoshaRE</Heading>
                    <Box height={"30%"}
                        display="flex"
                        alignItems="flex-end"
                        justifyContent="flex-end"
                        fontWeight="semibold">
                        <Text fontFamily={poppins.style.fontFamily} textStyle="sm">
                            SCROLL TO BEGIN
                        </Text>
                        <svg
                            display="inline-block !important"
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#e8eaed"
                        >
                            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                        </svg>
                    </Box>
                </Box>
            </Box>
            <Box
                bg={"white"}
                color={"black"}
                textAlign={"center"}

                width={"100%"}
                height={"115%"}
            >
                <Text
                    letterSpacing="0.1em" pt={11} fontFamily={poppins.style.fontFamily} textStyle={"xs"} fontWeight={"light"}>DEAR MR-MRS-MS,
                    <br /> FAMILY & FRIENDS</Text>
                <Heading letterSpacing="0.1em" fontSize={32} pt={6} fontWeight={"bold"} fontFamily={butler.style.fontFamily} lineHeight="1.2">
                    Welcome to <br />
                    Tiffany & Jared’s <br />
                    Wedding Website
                </Heading>
                <Text
                    fontSize={18}
                    pt={6}
                    px={20} textStyle={"medium"} fontFamily={newsReader.style.fontFamily}>
                    Together with joyful hearts and the grace of God, we joyfully announce the upcoming of our marriage.
                </Text>
                <Box width="100%" padding="20px">


                    <Slider ref={sliderRef} {...settings}>
                        {images.map((src, index) => (
                            <Box key={index} padding="10px">
                                <Image
                                    src={src}
                                    alt={`Image ${index + 1}`}
                                    borderRadius="8px"
                                    maxHeight={450}
                                    onClick={() => handleImageClick(src)}
                                    cursor="pointer"
                                />
                            </Box>
                        ))}
                    </Slider>
                    <Modal isOpen={isOpen} onClose={handleClose}>
                        <ModalOverlay />
                        <ModalContent
                            p={0}
                            bg="rgba(0, 0, 0, 0.8)"
                            h="110vh"
                            w="110vw"
                            overflow="hidden"
                        >
                            <ModalCloseButton position="absolute" right="40px" top="40px" color="white" />
                            <ModalBody
                                h="100vh"
                                p={0}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Image src={selectedImage} alt="Selected" maxH="80vh" padding="40px" />
                            </ModalBody>
                        </ModalContent>
                    </Modal>

                    <Box
                        position="relative">

                        <IconButton
                            position="absolute"

                            right="80px"
                            top="50px"
                            bg={"#F9F7F4"}
                            transform="translateY(-50%)"
                            onClick={() => sliderRef.current.slickPrev()}
                            aria-label="Previous"
                            variant="outline"
                        >
                            <PrevIcon />
                        </IconButton>
                        <IconButton
                            position="absolute"
                            right="10px"
                            top="50px"
                            bg={"#F9F7F4"}
                            transform="translateY(-50%)"
                            onClick={() => sliderRef.current.slickNext()}
                            aria-label="Next"
                            variant="outline"
                        >
                            <NextIcon />
                        </IconButton>

                    </Box>


                </Box>
            </Box>

            <audio ref={audioRef} >
                <source src="songs/so_far_so_good.mp3" type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>
        </Box >
    );
};

export default Content2;