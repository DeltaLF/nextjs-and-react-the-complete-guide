import styled from "styled-components";
import CommentListItem from "./comment-list-item";

function CommentList({ items, isLoading }) {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Comments>
      {/* Render list of comments - fetched from API */}
      {items.map((item) => {
        return <CommentListItem key={item.id} item={item} />;
      })}
    </Comments>
  );
}

export default CommentList;

const Comments = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  li {
    text-align: left;
    padding: 0.5rem 0;
    border-bottom: 2px solid #ccc;
  }
  p {
    margin: 0;
  }
  li div {
    text-align: right;
    font-style: italic;
  }
  address {
    display: inline;
  }
`;
