import { Avatar } from "antd";
import dynamic from "next/dynamic"; // needed for dynamic import below
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false }); // have to dynamically import because server does not support ReactQuill. ssr=server side rendering
// import ReactQuill from "react-quill"; -> results in "document reference" error
import "react-quill/dist/quill.snow.css";
import { CameraOutlined, LoadingOutlined } from "@ant-design/icons";

const PostForm = ({
  content,
  setContent,
  postSubmit,
  handleImage,
  uploading,
  image,
}) => {
  // another way of passing the props would be: const CreatePostForm = (props)
  // and then, in here we would access them like this: props.content, props.setContent, etc.

  return (
    <div className="card">
      <div className="card-body pb-3">
        {/* could use onSubmit on button as well, but in that case, it only submits upon button-click but not Enter key etc. */}
        {/* however, since we're using textarea, Enter key will not work since the control accepts Enter keypress. let's go with onClick */}
        <form className="form-group">
          {/* only requires "e" instead of "e.target.value like normal inputs". also, the content gets rendered slightly differently (console.log shows HTML)*/}
          <ReactQuill
            theme="snow"
            value={content}
            onChange={(e) => setContent(e)}
            className="form-control"
            placeholder="Write something..."
          />
        </form>
      </div>

      <div className="card-footer d-flex justify-content-between">
        <button
          disabled={!content}
          onClick={postSubmit}
          className="btn btn-primary btn-sm mt-1"
        >
          Post
        </button>
        <label>
          {image && image.url ? (
            <Avatar size={30} src={image.url} className="mt-1" />
          ) : uploading ? (
            <LoadingOutlined className="mt-2" />
          ) : (
            <CameraOutlined className="mt-2" />
          )}

          <input onChange={handleImage} type="file" accept="images/*" hidden />
        </label>
      </div>
    </div>
  );
};

export default PostForm;
