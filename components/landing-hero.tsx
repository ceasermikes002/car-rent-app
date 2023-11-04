"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-[#111827] font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best Web Application for</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                "Car Renting.",
                "Car Information.",
                "Car Survey.",
                "And Much More..."
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-[#111827]">
        Start enjoying seamless car renting now.
      </div>
      <div>
        <Link href={isSignedIn ? "/carhub" : "/sign-up"}>
          <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Get Started for Free!!
          </Button>
        </Link>
      </div>
      <div className="text-[#111827] text-xs md:text-sm font-normal">
        No credit card required.
      </div>
    </div>
  );
};
