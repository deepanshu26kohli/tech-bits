"use client";

import dynamic from 'next/dynamic';

const LightRays = dynamic(() => import("./LightRays"), {
    ssr: false,
    loading: () => null
});

interface LightRaysProps {
    raysOrigin?: string;
    raysColor?: string;
    raysSpeed?: number;
    lightSpread?: number;
    rayLength?: number;
    pulsating?: boolean;
    fadeDistance?: number;
    saturation?: number;
    followMouse?: boolean;
    mouseInfluence?: number;
    noiseAmount?: number;
    distortion?: number;
    className?: string;
}

const LightRaysWrapper = (props: LightRaysProps) => {
    return <LightRays {...props} />;
};

export default LightRaysWrapper;
