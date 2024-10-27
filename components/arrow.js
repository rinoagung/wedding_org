import React from "react";
import { IconButton } from "@chakra-ui/react";

const Arrow = ({ className, style, onClick, direction }) => {
    return (
        <IconButton
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
            variant="outline"
            aria-label={`Arrow ${direction}`}
            icon={direction === "next" ? <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
            }
        />
    );
};

export default Arrow;
