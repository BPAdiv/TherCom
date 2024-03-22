import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { Brain, Handshake, MessagesSquare, Speech } from "lucide-react";
function FeaturesSection() {
  const features = [
    {
      icon: <Brain size={45} />,
      title: "Accesibility",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
    },
    {
      icon: <MessagesSquare size={45} />,
      title: "Community",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
    },
    {
      icon: <Handshake size={45} />,
      title: "Support Groups",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
    },
    {
      icon: <Speech size={45} />,
      title: "Appointments",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
    },
  ];
  return (
    <section
      id="workSideToSide"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        What do we{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Offer{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
