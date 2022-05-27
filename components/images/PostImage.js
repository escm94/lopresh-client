const PostImage = ({ url }) => (
  <div
    style={{
      backgroundImage: "url(" + url + ")",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundsize: "cover",
      height: "300px",
    }}
  ></div>
);

export default PostImage;
