import React, { useContext, useEffect, useState } from "react";
import PostPreviewTopic from "./components/PostPreviewTopic";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

import ForumPagination from "./components/ForumPagination";
import { Button } from "@/components/ui/button";
import { UserContext } from "@/contexts/UserContextProvider";
function ForumPage() {
  const [forumPosts, setForumPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(2);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const page = searchParams.get("page") || 1;
    const limit = searchParams.get("limit") || 2;
    setCurrentPage(parseInt(page));
    setLimit(parseInt(limit));
    fetchForumPosts(page, limit);
  }, []);

  const fetchForumPosts = async (page, limit) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/forum/getPosts?page=${page}&limit=${limit}`
      );
      console.log(data);
      setForumPosts(data.data);
      setTotalPages(data.pagination.totalPages);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSearchParams({ page, limit });
    fetchForumPosts(page, limit);
  };

  return (
    <div className="container mt-12 max-w-6xl text-left">
      <div className="flex justify-end">
        <Link to={"/forum/post/create"}>
          <Button>Create New Post</Button>
        </Link>
      </div>
      <ForumPagination
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        totalPages={totalPages}
      />

      {/* <button onClick={doAfunction}>click here</button> */}
      <div className="grid grid-cols-1 place-items-start justify-between gap-12 lg:grid-cols-4">
        <div className="col-span-1 w-full lg:col-span-3">
          <div className="grid grid-flow-row gap-2">
            {forumPosts?.map((post, index) => (
              <PostPreviewTopic key={index} post={post} />
            ))}
          </div>
        </div>
        <aside className="w-full flex flex-col justify-between ">
          {/* <SideArticles /> */}
        </aside>
      </div>
      <ForumPagination
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        totalPages={totalPages}
      />
    </div>
  );
}

export default ForumPage;
