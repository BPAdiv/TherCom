import React from "react";
import PostPreview from "./components/PostPreview";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight } from "lucide-react";
import SideArticles from "./components/SideArticles";
import HeroSimple from "./components/HeroSimple";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import WorkWithSection from "./components/WorkWithSection";
import AskSection from "./components/AskSection";
import SupportGroupSection from "./components/SupportGroupSection";
function LandPage() {
  const posts = [
    {
      title: "Exploring the Wonders of Machine Learning",
      slug: "exploring-machine-learning",
      createdAt: "2024-03-18T08:00:00Z",
      author: "Jane Doe",
      tags: ["Machine Learning", "Artificial Intelligence", "Technology"],
      content:
        "Machine learning is revolutionizing industries across the globe...",
    },
    {
      title: "The Importance of Sustainable Development Goals",
      slug: "sustainable-development-goals",
      createdAt: "2024-03-15T10:30:00Z",
      author: "John Smith",
      tags: ["Sustainability", "Global Goals", "Environment"],
      content:
        "Sustainable Development Goals (SDGs) provide a blueprint for a better future...",
    },
    {
      title: "Traveling Solo: A Journey of Self-Discovery",
      slug: "traveling-solo",
      createdAt: "2024-03-12T13:45:00Z",
      author: "Emily Parker",
      tags: ["Travel", "Adventure", "Personal Growth"],
      content:
        "Traveling solo opens up opportunities for self-reflection and growth...",
    },
  ];
  return (
    <>
      <HeroSimple />
      <div className="container mt-12 max-w-6xl text-left">
        <div className="grid grid-cols-1 place-items-start justify-between gap-12 lg:grid-cols-3">
          <div className="col-span-1 w-full lg:col-span-2">
            <div className="px-4  text-2xl font-bold ">
              <Link
                href="/posts"
                className=" flex items-center pb-4  text-accent-foreground underline-offset-4 hover:text-muted-foreground hover:underline"
              >
                Recent Forum Posts{" "}
                <ArrowDown size={20} className="ml-2 h-4 w-4 " />
              </Link>
            </div>
            <div className="grid grid-flow-row gap-2">
              {posts.map((post, index) => (
                <PostPreview key={index} post={post} />
              ))}
            </div>
            <Link
              href="/posts"
              className="mt-10 flex items-center py-2 px-4 text-sm text-accent-foreground underline-offset-4 hover:text-muted-foreground hover:underline"
            >
              See all posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <aside className="w-full flex flex-col justify-between ">
            <SideArticles />
          </aside>
        </div>
      </div>
      <AboutSection />
      <FeaturesSection />
      <WorkWithSection />
      <AskSection />
      <SupportGroupSection />
    </>
  );
}

export default LandPage;
