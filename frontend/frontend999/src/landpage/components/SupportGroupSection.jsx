import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format, parseISO } from "date-fns";
import { CalendarDays, User } from "lucide-react";
import React from "react";

function SupportGroupSection() {
  const appointments = [
    {
      title: "Introduction to Support Group",
      description:
        "Join us for an introductory session to learn about our support group and how it can benefit you.",
      date: "2024-04-01T10:00:00Z",
      createdBy: "Admin",
    },
    {
      title: "Managing Stress and Anxiety",
      description:
        "Learn effective strategies for managing stress and anxiety in our supportive environment.",
      date: "2024-04-10T14:00:00Z",
      createdBy: "Support Team",
    },
    {
      title: "Improving Communication Skills",
      description:
        "Enhance your communication skills and connect with others in our interactive workshop.",
      date: "2024-04-20T11:30:00Z",
      createdBy: "Facilitator",
    },
  ];
  return (
    <section className="container py-24 sm:py-32 text-left">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Support Group{" "}
            </span>
            Appointments
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Join our support group appointments to learn, share experiences, and
            ask questions in a supportive environment.
          </p>

          <div className="flex flex-col gap-8">
            {appointments.map(({ title, description, date, createdBy }) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2 px-0">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardFooter>
                  <div className="flex gap-2 text-sm leading-snug text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>Created By: {`${createdBy}`}</span>
                    </div>
                    <span className="opacity-50">|</span>
                    <div className="flex items-center gap-1">
                      <CalendarDays size={16} />
                      <time dateTime={date}>
                        Date: {format(parseISO(date), "LLLL d, yyyy")}
                      </time>
                    </div>
                    {/* <div className="flex items-center gap-1">
            <Timer size={16} />
            <span>{`${post.readTimeMinutes} mins read`}</span>
          </div> */}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={
            "https://shadcn-landing-page.vercel.app/assets/growth-2exHRyUm.png"
          }
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
}

export default SupportGroupSection;
