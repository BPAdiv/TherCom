import { Button } from "@/components/ui/button";
import React from "react";

function AskSection() {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32 text-left">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Expert{" "}
            </span>
            Assistance or Community Support
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Whether you need personalized assistance from our consultants or
            prefer to engage with the community in our forum, we've got you
            covered. Post a ticket to consultants or ask your questions in the
            forum.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">Post a Ticket</Button>
          <Button variant="outline" className="w-full md:w-auto">
            Visit the Forum
          </Button>
        </div>
      </div>
    </section>
  );
}

export default AskSection;
