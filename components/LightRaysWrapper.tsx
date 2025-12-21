"use client";

import dynamic from 'next/dynamic';

const LightRays = dynamic(() => import("./LightRays"), {
    ssr: false,
    loading: () => null
});

const LightRaysWrapper = (props: any) => {
    return <LightRays {...props} />;
};

export default LightRaysWrapper;
