function CommentListItem({ item }) {
  return (
    <li key={item.id}>
      <p>{item.comment}</p>
      <div>
        By <address>{item.name}</address>
      </div>
    </li>
  );
}

export default CommentListItem;
