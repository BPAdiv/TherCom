import React from "react";
import SideArticleCard from "./SideArticleCard";

function SideArticles() {
  const articles = [
    {
      title: "Exploring the Wonders of Machine Learning",
      content:
        "Machine learning is revolutionizing industries across the globe...",
      author: "Jane Doe",
      createdAt: "2024-03-18T08:00:00Z",
    },
    {
      title: "The Importance of Sustainable Development Goals",
      content:
        "Sustainable Development Goals (SDGs) provide a blueprint for a better future...",
      author: "John Smith",
      createdAt: "2024-03-15T10:30:00Z",
    },
    {
      title: "Traveling Solo: A Journey of Self-Discovery",
      content:
        "Traveling solo opens up opportunities for self-reflection and growth...",
      author: "Emily Parker",
      createdAt: "2024-03-12T13:45:00Z",
    },
  ];
  return (
    <>
      {articles.map((article, index) => (
        <SideArticleCard key={index} article={article} />
      ))}
    </>
  );
}

export default SideArticles;
