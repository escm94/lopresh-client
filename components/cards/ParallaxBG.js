const ParallaxBG = ({ url, children = "MERNCAMP" }) => {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: "url( " + url + " )",
        backgroundAttachment: "fixed",
        padding: "100px 0px 75px 0px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        display: "block",
      }}
    >
      <h1 className="display-1 font-weight-bold text-center py-5">
        {children}
      </h1>
    </div>
  );
};

export default ParallaxBG;
