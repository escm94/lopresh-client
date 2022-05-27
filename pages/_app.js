// whenever you make changes to _app.js, make sure to restart your server (npm run dev)

// instead of importing from node_modules, you could also use CDN in the head component instead just like in HTML
// remember, anything imported here is available globally
import { UserProvider } from "../context";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/Nav";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }) {
  return (
    // the empty brackets are known as fragments in React. think of these as divs
    // now, we're going to replace the fragment with the UserProvider context so that our entire application has access to this context
    // this means we have access to state and setState globally
    <UserProvider>
      <Head>
        <link rel="stylesheet" href="/css/styles.css" />
      </Head>
      <Nav />
      <ToastContainer position="top-center" />
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
