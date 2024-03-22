import React from "react";
import { User } from "lucide-react";
import { format, parseISO } from "date-fns";
import { cn } from "@/lib/utils";
function PostComment({ post }) {
  return (
    <div className="w-full flex ">
      <div className="flex justify-center ">
        <User size={40} />
        {/* should be user avatar */}
      </div>
      <div
        key={post._id}
        className={cn(
          "w-full flex flex-col items-start gap-2 rounded-lg border p-3 ml-3 text-left text-sm transition-all hover:bg-accent"
        )}
      >
        <div className="flex w-full flex-col gap-1">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="font-semibold">{post?.author}</div>
            </div>
            {post?.createdAt && (
              <div className={cn("ml-auto text-xs")}>
                <time dateTime={post.createdAt}>
                  {format(parseISO(post?.createdAt), "LLLL d, yyyy")}
                </time>
              </div>
            )}
          </div>
          {/* <div className="text-xs font-medium">{item.subject}</div> */}
        </div>
        <div className=" text-xs text-muted-foreground">{post.content}</div>
      </div>
    </div>
  );
}
export default PostComment;
