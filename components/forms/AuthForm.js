import { SyncOutlined } from "@ant-design/icons";
const AuthForm = ({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  secret,
  setSecret,
  loading,
  page,
  username,
  setUsername,
  about,
  setAbout,
  profileUpdate,
}) => (
  <form onSubmit={handleSubmit}>
    {profileUpdate && (
      <div className="form-group p-2">
        <small>
          <label className="text-muted">Username</label>
        </small>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          className="form-control"
          placeHolder="Enter username"
        ></input>
      </div>
    )}

    {profileUpdate && (
      <div className="form-group p-2">
        <small>
          <label className="text-muted">About</label>
        </small>
        <input
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          type="text"
          className="form-control"
          placeHolder="Tell us about yourself..."
        ></input>
      </div>
    )}

    {page !== "login" && (
      <div className="form-group p-2">
        <small>
          <label className="text-muted">Your name</label>
        </small>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form-control"
          placeHolder="Enter name"
        ></input>
      </div>
    )}
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
        disabled={profileUpdate}
      ></input>
    </div>
    <div className="form-group p-2">
      <small>
        <label className="text-muted">Your password</label>
      </small>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className="form-control"
        placeHolder="Enter password"
      ></input>
    </div>
    {page !== "login" && (
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
    )}

    <div className="form-group p-2">
      <button
        disabled={
          profileUpdate
            ? loading
            : page === "login"
            ? !email || !password || loading
            : !name || !email || !secret || !password || loading
        }
        className="btn btn-primary col-12"
      >
        {loading ? <SyncOutlined spin className="py-1" /> : "Submit"}
      </button>
    </div>
  </form>
);

export default AuthForm;
