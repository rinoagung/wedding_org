// components/content_2.js
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

    const [animate, setAnimate] = useState(false);
    const images = [
        "image/1.jpg",
        "image/2.jpg",
        "image/3.jpg",
        "image/4.jpg"
        // "https://invitato.net/test-product-engineer/static/4-3943e72cf6bb4fe685c5917ea1d1cac4.jpg"
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
        centerPadding: "100px", // Padding untuk gambar di sisi kiri dan kanan
        slidesToShow: 1, // Menampilkan 3 gambar
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
        setAnimate(true);

        if (audioRef.current) {
            audioRef.current.muted = false; // Pastikan tidak dimute
            audioRef.current.play().catch(error => {
                console.error("Error playing audio:", error);
            });
        }
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.muted = isMuted; // Toggle mute
        }
    }, [isMuted]); // Menambahkan isMuted sebagai dependency

    return (
        <Box overflowY="auto"
            width={"100%"}
            height={"100%"}>
            <Box
                className={`animate__animated ${animate ? "animate__fadeInUp" : ""}`}
                display="flex"
                flexDirection="column"
                color="white"
                width={"100%"}
                height={"100%"}
                textAlign="center"
                bgImage="url('https://ik.imagekit.io/drpq5xrph/Template%20Tiffany%20&%20Jared/1.%20Cover.jpg?updatedAt=1698222296920')"
                bgSize="cover"
            >
                <Box
                    bg="rgba(0, 0, 0, 0.35)"
                    width={"100%"}
                    height={"100%"}
                    p={20}>
                    <Text height={"30%"} letterSpacing={2} fontFamily={poppins.style.fontFamily} textStyle="md" fontWeight="bold">WEDDING ANNOUNCEMENT</Text>
                    <Heading height={"40%"} py={10} fontFamily={butler.style.fontFamily} textStyle="4xl" fontWeight={"light"}>Tiffany & Jared
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
                                    onClick={() => handleImageClick(src)} // Tambahkan onClick
                                    cursor="pointer" // Ubah cursor menjadi pointer
                                />
                            </Box>
                        ))}
                    </Slider>

                    <Modal isOpen={isOpen} onClose={handleClose}>
                        <ModalOverlay />
                        <ModalContent p={40} bg="rgba(0, 0, 0, 0.8)" height={"100%"} width={"100%"}>
                            <ModalCloseButton position="absolute" right="10px" top="10px" color="white" p={40} />
                            <ModalBody
                                p={50}
                                display="flex"
                                alignItems="center"
                                justifyContent="center">
                                <Image src={selectedImage} alt="Selected" maxH={"80vh"} />
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
