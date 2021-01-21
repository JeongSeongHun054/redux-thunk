import React, { useEffect, useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample";
import loading, { startLoading } from "../modules/loading";

const SampleContainer = () => {
  const { post, users } = useSelector(({ sample }) => ({
    post: sample.post,
    users: sample.users,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    const fn = async () => {
      try {
        dispatch(await getPost(56));
        dispatch(await getUsers());
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [getPost, getUsers]);

  const loadingPost = useCallback(
    () => dispatch(startLoading["sample/GET_POST"]),
    [dispatch]
  );

  const loadingUsers = useCallback(
    () => dispatch(loading["sample/GET_USERS"]),
    [dispatch]
  );

  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

export default SampleContainer;
