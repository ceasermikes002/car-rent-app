"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    name: "Emily",
    avatar: <Image
    src={'/avatar.jpg'}
    alt="img"
    width={10}
    height={10}
    className="w-10 h-10 rounded-full"
  />,
    title: "Frequent Traveler",
    description: "Car Hub made my trips smooth and enjoyable. I love it!",
  },
  {
    name: "David",
    avatar: <Image
    src={'/avatar-2.jpg'}
    alt="img"
    width={10}
    height={10}
    className="w-10 h-10 rounded-full"
  />,
    title: "Adventurer",
    description: "I've explored new horizons with Car Hub. It's a game-changer!",
  },
  {
    name: "Sophia",
    avatar: <Image
    src={'/avatar-3.jpg'}
    alt="img"
    width={10}
    height={10}
    className="w-10 h-10 rounded-full"
  />,
    title: "Family Traveler",
    description: "Car Hub ensures our family road trips are a breeze. Highly recommended!",
  },
  {
    name: "John",
    avatar: <Image
    src={'/avatar-4.jpg'}
    alt="img"
    width={10}
    height={10}
    className="w-10 h-10 rounded-full"
  />,
    title: "Business Traveler",
    description: "Car Hub's premium features save me time and stress on every trip.",
  },
];



export const LandingContent = () => {
  return (
    <div className="px-10 pb-20 text-[#111827]">
      <h2 className="text-center text-4xl text-[#111827] font-extrabold mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {testimonials.map((item) => (
          <Card key={item.description} className="border-none text-white bg-[#111827]">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                  <br />
                  <span>{item.avatar}</span>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}