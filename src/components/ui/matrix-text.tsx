"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LetterState {
    char: string;
    isMatrix: boolean;
    isSpace: boolean;
}

interface MatrixTextProps {
    text?: string;
    className?: string;
    initialDelay?: number;
    letterAnimationDuration?: number;
    letterInterval?: number;
}

const l33tMap: Record<string, string[]> = {
    'a': ['4'],
    'e': ['3'],
    'i': ['1'],
    'o': ['0'],
    't': ['7'],
    's': ['5'],
    'l': ['1'],
};

export const MatrixText = ({
    text = "HelloWorld!",
    className,
    initialDelay = 200,
    letterAnimationDuration = 800,
    letterInterval = 200,
}: MatrixTextProps) => {
    // Ensure text is lowercase from the start
    const lowerText = text.toLowerCase();
    
    const [letters, setLetters] = useState<LetterState[]>(() =>
        lowerText.split("").map((char) => ({
            char,
            isMatrix: false,
            isSpace: char === " ",
        }))
    );
    const [isAnimating, setIsAnimating] = useState(false);

    const getL33tChar = useCallback((char: string) => {
        const lowerChar = char.toLowerCase();
        if (l33tMap[lowerChar]) {
            const options = l33tMap[lowerChar];
            return options[Math.floor(Math.random() * options.length)];
        }
        return char;
    }, []);

    const canBeL33t = useCallback((char: string) => {
        return !!l33tMap[char.toLowerCase()];
    }, []);

    const animateLetter = useCallback(
        (index: number) => {
            if (index >= lowerText.length) return;

            const currentChar = lowerText[index];
            if (!canBeL33t(currentChar)) {
                setTimeout(() => {
                    if (index + 1 < lowerText.length) {
                        animateLetter(index + 1);
                    } else {
                        setIsAnimating(false);
                    }
                }, letterInterval);
                return;
            }

            requestAnimationFrame(() => {
                setLetters((prev) => {
                    const newLetters = [...prev];
                    if (!newLetters[index].isSpace) {
                        newLetters[index] = {
                            ...newLetters[index],
                            char: getL33tChar(currentChar),
                            isMatrix: true,
                        };
                    }
                    return newLetters;
                });

                setTimeout(() => {
                    setLetters((prev) => {
                        const newLetters = [...prev];
                        newLetters[index] = {
                            ...newLetters[index],
                            char: lowerText[index],
                            isMatrix: false,
                        };
                        return newLetters;
                    });

                    if (index + 1 < lowerText.length) {
                        animateLetter(index + 1);
                    } else {
                        setIsAnimating(false);
                    }
                }, letterAnimationDuration);
            });
        },
        [getL33tChar, lowerText, letterAnimationDuration, letterInterval, canBeL33t]
    );

    const startAnimation = useCallback(() => {
        if (isAnimating) return;

        setIsAnimating(true);
        animateLetter(0);
    }, [animateLetter, isAnimating]);

    useEffect(() => {
        const timer = setTimeout(startAnimation, initialDelay);
        const interval = setInterval(startAnimation, 8000); // Restart animation every 8 seconds
        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, [startAnimation, initialDelay]);

    return (
        <div
            className={cn(
                "flex items-center justify-start text-green-500",
                className
            )}
            aria-label="Matrix text animation"
        >
            <div className="flex items-center justify-start relative">
                <div className="flex items-center tracking-wider">
                    {letters.map((letter, index) => (
                        <motion.div
                            key={`${index}-${letter.char}`}
                            className="font-['Courier_Prime'] text-5xl w-[1ch] text-center overflow-hidden"
                            style={{
                                display: "inline-block",
                                fontVariantNumeric: "tabular-nums",
                                fontFamily: "Courier Prime, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                            }}
                        >
                            {letter.isSpace ? "\u00A0" : letter.char}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}; 