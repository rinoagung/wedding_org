"use client"
import { createContext, useContext, useState } from "react";

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
    const [showScrollContent, setShowScrollContent] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    return (
        <ContentContext.Provider value={{ showScrollContent, setShowScrollContent, isMuted, setIsMuted }}>
            {children}
        </ContentContext.Provider>
    );
};

export const useContent = () => {
    const context = useContext(ContentContext);
    // console.log(context); // Ini untuk debug
    return context;
};
