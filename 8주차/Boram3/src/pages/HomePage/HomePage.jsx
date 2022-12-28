import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PostList from "../../redux/components/PostList";
import { __getPosts } from "../../redux/modules/postsSlice";
import { __getComments } from "../../redux/modules/commentsSlice";
import { __getUsers } from "../../redux/modules/usersSlice";
import { Container } from "./style";
const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPosts());
    dispatch(__getComments());
    dispatch(__getUsers());
  }, [dispatch]);

  return (
    <Container>
      <PostList />
    </Container>
  );
};

export default HomePage;
