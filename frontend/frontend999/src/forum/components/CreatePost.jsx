import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UserContext } from "@/contexts/UserContextProvider";
import { useAuth } from "@/hooks/useAuth";
import axios from "axios";
import { CircleX } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagValue, setTagValue] = useState("");
  const [tagsList, setTagsList] = useState([]);
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  useAuth();
  const handleSubmitPost = async (e) => {
    e.preventDefault();
    console.log(tagsList);
    console.log({ title, content });
    const newPost = { title, content, tags: tagsList, author: user._id };
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/forum/newPost`,
        newPost
      );
      console.log(data.data._id);
      const newPostId = data.data._id;
      navigate(`/forum/post/${newPostId}`);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddTag = () => {
    setTagsList((prev) => [...prev, tagValue]);
    setTagValue("");
  };
  const handleRemoveTag = (i) => {
    const filterdTags = tagsList.filter((tag, tagIndex) => i != tagIndex);
    setTagsList([...filterdTags]);
  };
  useEffect(() => {}, []);
  if (!user) {
    return (
      <div className="container mt-12 max-w-6xl text-left ">
        <div className="bg-muted flex flex-col gap-2  items-center justify-between border rounded p-4 min-h-48">
          <h3 className="text-muted-foreground">Oops!</h3>
          <h1 className="text-2xl">
            The page you are trying to access is not available to guests, but
            may be available if you sign in.
          </h1>
          <Link to={"/login"}>
            <Button>Existing user, Sign In</Button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="container mt-12 max-w-6xl text-left">
      <div className="px-4  text-2xl font-bold ">
        <span className=" flex items-center pb-4  text-accent-foreground underline-offset-4  underline">
          Create New Post{" "}
        </span>
      </div>
      <form
        onSubmit={handleSubmitPost}
        className="grid w-full items-center gap-3"
      >
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            placeholder="Your Post Title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="max-w-sm ">
          <Label htmlFor="tags">Tags</Label>
          <div className="flex  gap-3 mb-3">
            <Input
              type="text"
              id="tags"
              value={tagValue}
              placeholder="You Can Add Tags"
              onChange={(e) => setTagValue(e.target.value)}
            />
            <Button onClick={handleAddTag} type={"button"}>
              Add Tag
            </Button>
          </div>
          {tagsList && tagsList.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tagsList.map((tag, i) => (
                <Badge key={i}>
                  {tag}{" "}
                  <CircleX
                    onClick={() => handleRemoveTag(i)}
                    className="ml-2 cursor-pointer"
                    size={14}
                  />
                </Badge>
              ))}
            </div>
          )}
        </div>
        <div>
          <Label htmlFor="content">Content</Label>
          <Textarea
            required
            onChange={(e) => setContent(e.target.value)}
            className={"max-h-[60vh] min-h-96 resize-none"}
            id="content"
            placeholder="Describe What are You Thinking About"
          />
        </div>
        <div className="flex justify-center items-center">
          <Button>Submit Post</Button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
