const CommentForm = ({ addComment, comment, setComment }) => {
  return (
    <form onSubmit={(e) => addComment(e)}>
      <input
        type="text"
        className="form-control"
        placeholder="Write something..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></input>
      <button className="btn btn-primary btn-sm btn-block mt-3">Submit</button>
    </form>
  );
};

export default CommentForm;
