import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { format, parseISO } from "date-fns";
import { CalendarDays, User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function PostPreviewTopic({ post }) {
  return (
    <article className="w-full">
      <Link
        to={`/forum/post/${post._id}`}
        className={cn(
          " select-rounded-md flex justify-between  w-full rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-foreground/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        )}
      >
        <div>
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
          {post.tags && (
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
        </div>
        <div className="self-end text-l leading-snug text-muted-foreground">
          Replies :35
        </div>
      </Link>
    </article>
  );
}

export default PostPreviewTopic;
