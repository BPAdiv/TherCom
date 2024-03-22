import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { UserContext } from "@/contexts/UserContextProvider";
import axios from "axios";
import React, { useContext, useState } from "react";

function ReplyToPost({ postId, setComments, setShowReply }) {
  const { user, setUser } = useContext(UserContext);
  const [replyContent, setReplyContent] = useState("");
  const { toast } = useToast();

  const createNewComment = async () => {
    const newComment = { postId, content: replyContent, author: user._id };
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/forum/newComment`,
        newComment
      );
      console.log(data);
      console.log(data.data.savedComment);

      setComments((prev) => {
        const newComments = [...prev];
        newComments.unshift({ ...data.data.savedComment });
        return newComments;
      });
      setShowReply(false);
      toast({
        description: "Your message has been sent.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.Try again .",
      });
      setShowReply(false);
      console.log(error);
    }
  };
  return (
    <div className="grid w-full   gap-1.5">
      <Label className="text-lg" htmlFor="reply">
        Your Reply
      </Label>
      <Textarea
        onChange={(e) => setReplyContent(e.target.value)}
        className="max-h-[50vh] min-h-48 resize-none"
        id="reply"
        placeholder="Type your message here."
      />
      <Button onClick={createNewComment}>Send message</Button>
    </div>
  );
}
export default ReplyToPost;
