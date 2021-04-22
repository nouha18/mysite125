import { container, title } from "./material-kit-react.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  containerresp: {
    zIndex: "12",
    display:"inline",
    flexDirection:"row",
    paddingTop:'75px',
    width:'250px',
      marginTop:"67px",
    color: "#FFFFFF",
    ...container
  },
  titleresp: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    marginTop: "50px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
};

export default landingPageStyle;
