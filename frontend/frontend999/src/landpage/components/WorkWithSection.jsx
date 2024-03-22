import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import React from "react";
import { cn } from "@/lib/utils";

function WorkWithSection() {
  const teamList = [
    {
      imageUrl: "https://i.pravatar.cc/150?img=35",
      name: "Emma Smith",
      position: "Product Manager",
      socialNetworks: [
        { name: "Linkedin", url: "http://linkedin.com" },
        {
          name: "Facebook",
          url: "https://www.facebook.com/",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/",
        },
      ],
    },
    {
      imageUrl: "https://i.pravatar.cc/150?img=60",
      name: "John Doe",
      position: "Tech Lead",
      socialNetworks: [
        { name: "Linkedin", url: "http://linkedin.com" },
        {
          name: "Facebook",
          url: "https://www.facebook.com/",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/",
        },
      ],
    },
    {
      imageUrl: "https://i.pravatar.cc/150?img=36",
      name: "Ashley Ross",
      position: "Frontend Developer",
      socialNetworks: [
        { name: "Linkedin", url: "http://linkedin.com" },

        {
          name: "Instagram",
          url: "https://www.instagram.com/",
        },
      ],
    },
    {
      imageUrl: "https://i.pravatar.cc/150?img=17",
      name: "Bruce Rogers",
      position: "Backend Developer",
      socialNetworks: [
        { name: "Linkedin", url: "http://linkedin.com" },
        {
          name: "Facebook",
          url: "https://www.facebook.com/",
        },
      ],
    },
  ];

  return (
    <section id="team" className="container py-24 sm:py-32 text-left">
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Some From Our Dedicated{" "}
        </span>
        Team
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(({ imageUrl, name, position, socialNetworks }) => (
          <Card
            key={name}
            className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
          >
            <CardHeader className="mt-8 flex justify-center items-center pb-2">
              <img
                src={imageUrl}
                alt={`${name} ${position}`}
                className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
              />
              <CardTitle className="text-center">{name}</CardTitle>
              <CardDescription className="text-primary">
                {position}
              </CardDescription>
            </CardHeader>

            <CardContent className="text-center pb-2">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </CardContent>

            {/* <CardFooter>
              {socialNetworks.map(({ name, url }) => (
                <div key={name}>
                  <a
                    href={url}
                    target="_blank"
                    className={cn({
                      variant: "ghost",
                      size: "sm",
                    })}
                  >
                    <span className="sr-only">{name} icon</span>
                    {socialIcon(name)}
                  </a>
                </div>
              ))}
            </CardFooter> */}
          </Card>
        ))}
      </div>
    </section>
  );
}

export default WorkWithSection;
