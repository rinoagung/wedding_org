// components/content_2.js
import { useRef } from "react";
// import { Button } from "@chakra-ui/react";
import { Button, Box, Text, Heading } from "@chakra-ui/react";
import localFont from "next/font/local";
import { useContent } from "./contentContext";

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

const Content1 = () => {

    const { setShowScrollContent } = useContent();

    const handleButtonClick = () => {
        setShowScrollContent(true);
    };

    return (
        <Box
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
                p={20}
                bg="rgba(0, 0, 0, 0.35)"
                width={"100%"}
                height={"100%"}
            >
                <Text height={"30%"} letterSpacing={2} fontFamily={poppins.style.fontFamily} textStyle="md" fontWeight="bold">WEDDING ANNOUNCEMENT</Text>
                <Heading height={"40%"} py={10} fontFamily={butler.style.fontFamily} textStyle="4xl" fontWeight={"light"}>Tiffany & Jared
                    <br /> #TImetoshaRE</Heading>
                <Box height={"30%"}>
                    <Button m="auto" fontFamily={newsReader.style.fontFamily} display="block" textStyle="xl" px="10" onClick={handleButtonClick}>Open</Button>
                </Box>

            </Box>
        </Box>
    );
};

export default Content1;
