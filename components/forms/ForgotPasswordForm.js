import { SyncOutlined } from "@ant-design/icons";
const ForgotPasswordForm = ({
  handleSubmit,
  email,
  setEmail,
  newPassword,
  setNewPassword,
  secret,
  setSecret,
  loading,
  page,
}) => (
  <form onSubmit={handleSubmit}>
    <div className="form-group p-2">
      <small>
        <label className="text-muted">Your email</label>
      </small>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        className="form-control"
        placeHolder="Enter email"
      ></input>
    </div>
    <div className="form-group p-2">
      <small>
        <label className="text-muted">New password</label>
      </small>
      <input
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        type="password"
        className="form-control"
        placeHolder="Enter new password"
      ></input>
    </div>
    <>
      <div className="form-group p-2">
        <small>
          <label className="text-muted">Pick a question</label>
        </small>
        <select className="form-control">
          <option>What is your favorite color?</option>
          <option>What is your best friend's name?</option>
          <option>What city were you born in?</option>
        </select>
        <small className="form-text text-muted">
          You can use this to reset your password later if forgotten.
        </small>
      </div>
      <div className="form-group p-2">
        <input
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          type="text"
          className="form-control"
          placeHolder="Write your answer here"
        ></input>
      </div>
    </>

    <div className="form-group p-2">
      <button
        disabled={!email || !newPassword || !secret || loading}
        className="btn btn-primary col-12"
      >
        {loading ? <SyncOutlined spin className="py-1" /> : "Submit"}
      </button>
    </div>
  </form>
);

export default ForgotPasswordForm;
