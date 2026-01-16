
import { servicesData } from "@/lib/serviceData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";

interface PageProps {
    params: {
        category: string;
        slug: string;
    };
}

export function generateStaticParams() {
    const params: { category: string; slug: string }[] = [];

    servicesData.forEach((service) => {
        service.details.technologies.forEach((tech) => {
            params.push({
                category: service.slug,
                slug: tech.slug,
            });
        });
    });

    return params;
}


export default function TechnologyPage({ params }: PageProps) {
    const { category, slug } = params;

    const service = servicesData.find((s) => s.slug === category);
    if (!service) {
        notFound();
    }

    const technology = service.details.technologies.find((t) => t.slug === slug);

    if (!technology) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white pt-24 pb-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.15),transparent_60%)] pointer-events-none"></div>

            <div className="relative max-w-4xl mx-auto px-6">
                <Link href="/services" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition mb-8">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
                </Link>

                <header className="mb-12">
                    <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
                        {service.title}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        {technology.title}
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                        {technology.description}
                    </p>
                </header>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-white">Key Features</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {technology.features.map((feature, index) => (
                            <div key={index} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-300">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-blue-600/10 border border-blue-500/30 rounded-2xl p-8 text-center">
                    <h2 className="text-2xl font-bold mb-4 text-white">Ready to build with {technology.title}?</h2>
                    <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                        Let us leverage the power of {technology.title} to create a scalable solution for your business.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition duration-300 shadow-lg shadow-blue-500/25"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </main>
    );
}
