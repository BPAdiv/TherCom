import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import axios from "axios";
import { format, parseISO } from "date-fns";
import { CalendarDays, User } from "lucide-react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PostComment from "./PostComment";
import { Textarea } from "@/components/ui/textarea";
import { UserContext } from "@/contexts/UserContextProvider";
import { useAuth } from "@/hooks/useAuth";
import ReplyToPost from "./ReplyToPost";
import { Toaster } from "@/components/ui/toaster";

function ForumPostTopic() {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [showReply, setShowReply] = useState(false);
  const { user, setUser } = useContext(UserContext);
  useAuth();
  const { postId } = useParams();

  const [page, setPage] = useState(0); // Track the page number

  const [hasMore, setHasMore] = useState(true);
  const eleRef = useRef(null);

  function onInteraction(entries) {
    console.log(entries);
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting && hasMore) {
      fetchMoreItems();
    }
  }
  useEffect(() => {
    const observer = new IntersectionObserver(onInteraction);
    if (observer && eleRef.current) {
      observer.observe(eleRef.current);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [comments]);
  const fetchMoreItems = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/forum/postComments/${postId}/${
          page + 1
        }`
      );
      if (data.data.length == 0) {
        setHasMore(false);
      } else {
        setComments((prevComments) => [...prevComments, ...data.data]);
        setPage((prev) => prev + 1);
      }

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPostTopic = async () => {
    console.log(postId);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/forum/getPost/${postId}`
      );
      console.log(data);
      setPost(data.data);
      //   setComments(data.data.comments);
      // setTotalPages(data.pagination.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPostTopic();
  }, []);

  console.log(page);
  return (
    <>
      <div className="container mt-12 max-w-6xl text-left">
        <div className="grid grid-cols-1 place-items-start justify-between gap-12 lg:grid-cols-4">
          <div className="col-span-1 w-full lg:col-span-3 flex flex-col gap-5">
            <div className="w-full">
              <div className=" border-b mb-5">
                <h3 className="my-2 mb-3 text-2xl font-bold text-foreground">
                  {post.title}
                </h3>
                {post?.tags && post.tags.length > 0 && (
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
              </div>
              <div className="w-full flex ">
                <div className="flex justify-center ">
                  <User size={40} />
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
                        <div className="font-semibold">{post.author}</div>
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
                  <div className=" text-xs text-muted-foreground">
                    {post.content}
                  </div>
                </div>
              </div>
            </div>
            {user && (
              <div className=" flex justify-end">
                <Button onClick={() => setShowReply(true)}>
                  Reply To Post
                </Button>
              </div>
            )}
            {showReply && (
              <ReplyToPost
                postId={post._id}
                setComments={setComments}
                setShowReply={setShowReply}
              />
            )}
            <div className=" border-b mb-5">
              <h3 className="my-2 mb-3 text-2xl font-bold text-foreground">
                Comments :
              </h3>
            </div>

            <div className="flex flex-col gap-5">
              {comments && comments.length > 0 ? (
                comments.map((comment, i) => (
                  <PostComment key={i} post={comment} />
                ))
              ) : (
                <h4 className="text-muted-foreground">No comments yet</h4>
              )}
              {/* Indicator for loading more comments */}
              {hasMore && <div ref={eleRef}> Load more Items</div>}
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default ForumPostTopic;
