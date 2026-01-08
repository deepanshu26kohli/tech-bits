"use client";


import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-black to-gray-950 text-gray-300 pt-16 pb-8 overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.12),transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div>
          <h3 className="flex items-center gap-2 text-2xl font-bold text-white mb-3">
            <Image
              src="/logo.svg"
              alt="LaunchUrPlatform Logo"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
            />
            <span>
              Launch<span className="text-blue-400">Ur</span>Platform
            </span>
          </h3>
          <h4>Built for D2C & Ecommerce Brands</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            We help online brands improve conversions, reduce COD RTO, and scale profitably using performance-driven platforms.

          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link href="/services" className="hover:text-blue-400">Services</Link></li>
            <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Our Office</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            201, A Block, Leo Homes, Shri Vaibhav Vibha , 2A main road, <br />
            Kaverappa Layout, Kadubeesanhalli, <br />
            Marathalli, Bangalore. <br />
            Pincode - 560103
          </p>
        </div>

        {/* Social Links */}
        {/* <div>
          <h4 className="text-lg font-semibold text-white mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank" className="hover:text-blue-400">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="hover:text-blue-400">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="hover:text-blue-400">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="https://github.com" target="_blank" className="hover:text-blue-400">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="mailto:info@launchurplatform.com" className="hover:text-blue-400">
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div> */}
      </div>

      {/* Divider */}
      <div className="relative max-w-7xl mx-auto mt-12 border-t border-white/10 pt-6 flex flex-col px-6 md:flex-row items-center justify-between text-sm text-gray-500">
        <p>© {new Date().getFullYear()} LaunchUrPlatform. All rights reserved.</p>
        <p >
          Built by engineers who understand ecommerce & logistics.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
