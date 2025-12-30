"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FloatingContactButton() {
    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const currentScrollY = latest;
        // Show if user has scrolled down a bit (e.g., > 100px)
        if (currentScrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
        setLastScrollY(currentScrollY);
    });

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-8 right-8 z-50"
                >
                    <Link
                        href="/contact"
                        className={cn(
                            "flex items-center gap-2 px-6 py-3 rounded-full shadow-lg",
                            "bg-white text-black hover:bg-gray-100 transition-colors",
                            "border border-gray-200"
                        )}
                    >
                        <span className="font-medium">Get in touch</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
