"use client";

import { cn } from "@/lib/utils";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function LandingContent() {
  const testimonials = [
    {
      name: "Hatem",
      title: "Software Engineer",
      borderColor: "border-pink-500",
      description: "This is genuis!",
    },
    {
      name: "Hatem",
      title: "Software Engineer",
      borderColor: "border-sky-500",
      description: "This is the best AI tool I've used!",
    },
    {
      name: "Hatem",
      title: "Software Engineer",
      borderColor: "border-yellow-500",
      description: "I love your work.",
    },
    {
      name: "Hatem",
      title: "Software Engineer",
      borderColor: "border-purple-500",
      description: "Keep it up Team!",
    },
    {
      name: "Hatem",
      title: "Software Engineer",
      borderColor: "border-indigo-500",
      description: "Keep rocking!",
    },
    {
      name: "Hatem",
      title: "Software Engineer",
      borderColor: "border-red-500",
      description: "This is the best AI tool EVERRR!",
    },
  ];

  return (
    <div className="px-10 pb-20 ">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg ">{item.name}</p>
                  <p className="text-zinc-400 text-sm tracking-widest font-thin">
                    {item.title}
                  </p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                <blockquote
                  className={cn("border-l-4 pl-2 italic", item.borderColor)}
                >
                  {item.description}
                </blockquote>
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default LandingContent;
