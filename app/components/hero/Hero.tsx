import Link from "next/link";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="h-[80vh] background px-6 lg:px-16 relative">
      <div className="absolute inset-0 bg-black/60" />
      <div className="container items-center mx-auto relative z-10">
        {/* hero Content */}
        <div className="w-full md:max-w-xl">
          {/* text-content */}
          <div className="bg-orange-400 inline-block px-6 py-2 md:py-3 rounded-full mt-24">
            <h2 className="text-sm md:text-xl font-inter text-center text-white font-semibold ">
              New Collection
            </h2>
          </div>

          {/* text-content */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-playfair">
              Timeless
              <br />
              Elegance
            </h1>
            <p className="text-2xl">
              Discover curated essentials designed with intention. Quality
              materials, sustainable practices, enduring style.
            </p>
          </div>

          {/* buttons */}
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <Link href="/shop">
              <Button className="px-8 py-2 text-xl bg-white text-black border border-white hover:bg-white/70 flex items-center gap-2">
                Shop Now
                <ArrowRight size={20} />
              </Button>
            </Link>

            <Link href="/about">
              <Button className="px-8 py-2 text-xl bg-white/30 text-white border border-white hover:bg-white/20 flex items-center gap-2">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
