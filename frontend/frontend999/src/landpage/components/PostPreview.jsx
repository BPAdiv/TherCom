import React from "react";
import { CalendarDays, Timer, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { format, parseISO } from "date-fns";

function PostPreview({ post }) {
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
    <article className="w-full">
      <Link
        to={`/posts/${post.slug}`}
        className={cn(
          "select-rounded-md block w-full rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-foreground/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        )}
      >
        <h3 className="my-2 text-2xl font-bold text-foreground">
          {post.title}
        </h3>
        <div className="flex gap-2 text-sm leading-snug text-muted-foreground">
          <div className="flex items-center gap-1">
            <User size={16} />
            <span>{`${post.author}`}</span>
          </div>
          <span className="opacity-50">|</span>
          <div className="flex items-center gap-1">
            <CalendarDays size={16} />
            <time dateTime={post.createdAt}>
              {format(parseISO(post.createdAt), "LLLL d, yyyy")}
            </time>
          </div>
          {/* <div className="flex items-center gap-1">
            <Timer size={16} />
            <span>{`${post.readTimeMinutes} mins read`}</span>
          </div> */}
        </div>
        {post?.tags && (
          <ul className="my-4 flex list-none flex-wrap gap-2 p-0">
            {post.tags.map((tag) => (
              <li key={tag}>
                <Badge
                  variant="outline"
                  className="inline-block rounded-full border border-muted-foreground/50 bg-muted-foreground/10 px-2 py-0.5 text-xs text-muted-foreground"
                >
                  {tag}
                </Badge>
              </li>
            ))}
          </ul>
        )}
        {post.content && (
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {post.content}
          </p>
        )}
      </Link>
    </article>
  );
}

export default PostPreview;
