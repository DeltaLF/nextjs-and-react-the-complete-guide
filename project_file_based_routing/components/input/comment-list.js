import CommentListItem from "./comment-list-item";
import classes from "./comment-list.module.css";

function CommentList({ items }) {
  return (
    <ul className={classes.comments}>
      {/* Render list of comments - fetched from API */}
      {items.map((item) => {
        return <CommentListItem key={item.id} item={item} />;
      })}
    </ul>
  );
}

export default CommentList;
