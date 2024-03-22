import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, CalendarDays, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { format, parseISO } from "date-fns";

function SideArticleCard({ article, className, ...props }) {
  return (
    <>
      <Card className={cn("mb-4", className)} {...props}>
        <CardHeader className="py-3 ">
          <CardTitle className="line-clamp-2 text-2xl">
            {article.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 pb-4 ">
          <div className="flex items-center rounded-md  hover:bg-background/40 hover:backdrop-blur-lg">
            <p className=" mr-auto line-clamp-3 text-sm font-medium leading-snug text-muted-foreground">
              {article.content}
            </p>
            {/* <img
              src={defaultAuthor.location.media}
              alt="Los Angeles"
              width={56}
              height={56}
              className="h-16 w-16 rounded-md object-cover"
            /> */}
          </div>
          <div className="flex gap-2 text-sm leading-snug text-muted-foreground">
            <div className="flex items-center gap-1">
              <User size={16} />
              <span>{`${article.author}`}</span>
            </div>
            <span className="opacity-50">|</span>
            <div className="flex items-center gap-1">
              <CalendarDays size={16} />
              <time dateTime={article.createdAt}>
                {format(parseISO(article.createdAt), "LLLL d, yyyy")}
              </time>
            </div>
            {/* <div className="flex items-center gap-1">
            <Timer size={16} />
            <span>{`${post.readTimeMinutes} mins read`}</span>
          </div> */}
          </div>
        </CardContent>
        <Separator />
        <CardFooter className="p-0">
          <Button variant="ghost" className="w-full">
            Read article <ArrowRight className="mx-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default SideArticleCard;
