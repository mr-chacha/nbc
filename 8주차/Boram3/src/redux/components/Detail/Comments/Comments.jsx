import { useSelector } from "react-redux";
import { CommentsBox, CategoryStyle, CommentBox } from "./style";
import CommentEditDelete from "./CommentEditDelete";
import { useParams } from "react-router-dom";

const Comments = () => {
  const { error, comments } = useSelector((state) => state.comments);
  const param = useParams();
  const detailComment = comments?.filter(
    (comment) => comment?.postNumber === param.id
  );
  const { posts } = useSelector((state) => state.posts);

  const thePost = posts.find((post) => post.id === param.id);
  const theA = thePost?.categoryA;
  const theB = thePost?.categoryB;

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <CommentsBox>
      {/* optional chaining('?') 사용 - 새로고침했을 때 오류 해결*/}
      {detailComment?.map((comment) => {
        let color = "";
        if (comment.isA === "true") {
          color = "#EC5858";
        }
        if (comment.isA === "false") {
          color = "#3E6D9C";
        }

        return (
          <CommentBox>
            <div key={comment.id}>
              <br />
              <CategoryStyle color={color}>
                {comment.isA === "true" ? theA : theB}
              </CategoryStyle>
              <div id="comment">
                <CommentEditDelete key={comment.id} comments={comment} />
              </div>
            </div>
          </CommentBox>
        );
        // TODO: 작성자, 선택한 카테고리 내용 추가
      })}
    </CommentsBox>
  );
};

export default Comments;
