export function isCommentObjValid({ email, comment, name }) {
  return (
    !!email &&
    email.includes("@") &&
    !!name &&
    name.trim() !== "" &&
    !!comment &&
    comment.trim() !== ""
  );
}
