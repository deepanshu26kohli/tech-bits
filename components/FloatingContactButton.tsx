"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FloatingContactButton() {
    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsVisible(latest > 100);
    });

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [-8, 8], // bounce range
                    }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{
                        y: {
                            duration: .8,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        },
                        opacity: { duration: 0.2 },
                        scale: { duration: 0.2 },
                    }}
                    className="fixed bottom-8 right-8 z-50"
                >
                    <Link
                        href="/contact"
                        className={cn(
                            "flex items-center gap-2 px-6 py-3 rounded-full shadow-lg",
                            "bg-white text-black hover:bg-gray-100 transition-colors",
                            "border-2 border-black"
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
