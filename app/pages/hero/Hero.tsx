import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../../components/ui/Button";
import { ArrowRight, Truck, RefreshCcw, ShieldCheck } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section>
      <div className="h-auto background px-6 py-48 lg:px-16 relative">
        {/* overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* contents */}
        <div className="container items-center mx-auto relative z-10">
          {/* hero Content */}
          <div className="w-full md:max-w-xl">
            {/* text-content */}
            <div className="bg-orange-400 inline-block px-6 py-2 md:py-3 rounded-full">
              <h2 className="text-sm md:text-xl font-inter text-center text-white font-semibold ">
                New Collection
              </h2>
            </div>

            {/* text-content */}
            <div className="space-y-6 text-white">
              <h1 className="text-6xl lg:text-8xl font-semibold font-playfair">
                Timeless
                <br />
                Elegance
              </h1>
              <p className="text-lg font-inter md:text-xl">
                Discover curated essentials designed with intention. Quality
                materials, sustainable practices, enduring style.
              </p>
            </div>

            {/* buttons */}
            <div className="mt-6 flex gap-4 flex-wrap">
              <Link href="/shop">
                <Button className="px-4 py-2 text-lg font-inter bg-white text-black border border-white hover:bg-white/70 flex items-center gap-2">
                  Shop Now
                  <ArrowRight size={20} />
                </Button>
              </Link>

              <Link href="/about">
                <Button className="px-8 py-2 text-lg font-inter bg-white/30 text-white border border-white hover:bg-white/20 flex items-center gap-2">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* returns, security, shipping */}
      <div className="bg-[#EFECE7] py-8">
        <div className="max-w-6xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-32   md:text-left">
            {/* shipping */}
            <div className="flex items-center gap-3">
              <Truck size={24} className="text-orange-400" />
              <div>
                <h6 className="text-black font-semibold text-sm font-playfair">
                  Free Shipping
                </h6>
                <p className="text-gray-600 font-inter text-xs">
                  On orders over $150
                </p>
              </div>
            </div>

            {/* security */}
            <div className="flex items-center gap-3">
              <ShieldCheck size={24} className="text-orange-400" />
              <div>
                <h6 className="text-black font-semibold text-sm font-playfair">
                  Secure Payment
                </h6>
                <p className="text-gray-600 font-inter text-xs">
                  SSL encrypted checkout
                </p>
              </div>
            </div>

            {/* return policy */}
            <div className="flex items-center gap-3">
              <RefreshCcw size={24} className="text-orange-400" />
              <div>
                <h6 className="text-black font-semibold text-sm font-playfair">
                  Easy Returns
                </h6>
                <p className="text-gray-600 font-inter text-xs">
                  30-day return policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
