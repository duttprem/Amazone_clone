import "./footer.css";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const Footer = () => {
  const HandleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="Footer">
        <a onClick={HandleClick}>
          <div className="Footer_BackToTop">
            <div className="Footer_BackToTopText" /> Back to top
          </div>
          {/* <div className="Footer_BackToTop">
            <ExpandLessIcon className="Footer_BackToTopText" />
          </div> */}
        </a>
        <div className="FooterVerticalRow">
          <div className="FooterVerticalCol">
            <div className="FooterVerticalColHead">Get to Know us</div>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press Releases</li>
              <li>Amazon Science</li>
            </ul>
          </div>
          <div className="FooterVerticalCol">
            <div className="FooterVerticalColHead">Connect with us</div>
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
            </ul>
          </div>
          <div className="FooterVerticalCol">
            <div className="FooterVerticalColHead">Make Money </div>
            <ul>
              <li>Sell on Amazon</li>
              <li>Sell under Amazon Accelerator</li>
              <li>Protect and Build Your Brand</li>
              <li>Amazon Global Selling</li>
              <li>Fullfilment by Amazon</li>
              <li>Advertise Your products</li>
              <li>Amazon Pay on Marchants</li>
            </ul>
          </div>
          <div className="FooterVerticalCol">
            <div className="FooterVerticalColHead">Let Us Help You </div>
            <ul>
              <li>COVID-19 and Amazon</li>
              <li>Your Account</li>
              <li>Returns Centre</li>
              <li>100% Purchase Protection</li>
              <li>Amazon App Download</li>
              <li>Amazon Assistant Download</li>
              <li>Help</li>
            </ul>
          </div>
        </div>

        <hr />
        <div className="FooterLine">
          <span className="FooterMessage">
            Amazon Clone & Copy:  Prem Dutt
          </span>
        </div>
      </div>
    </>
  );
};
export default Footer;
