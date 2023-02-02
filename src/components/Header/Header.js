import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const Header = () => {
  return (
    <>
      <nav className="header">
        <div className="header_top">
          <div className="header_left_nav">
            <MenuIcon />
          </div>

          <Link to="/">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            />
          </Link>
          <div className="headerSearch">
            <input type="search" className="headersearch_input" />
            <SearchIcon className="headersearch" />
          </div>
          {/* Links */}
          <div className="headerNavbar">
            {/* Signout/SignIn */}

            <Link to="/" className="headerLink">
              <div className="headerOption">
                <span className="headeroption_one">Hello</span>
                <span className="headeroption_two">Guest</span>
              </div>
            </Link>
            {/* Return Order */}
            <Link to="/" className="headerLink">
              <div className="headerOption">
                <span className="headeroption_one">Return</span>
                <span className="headeroption_two">Order</span>
              </div>
            </Link>
            {/* Prime */}
            <Link to="/" className="headerLink">
              <div className="headerOption">
                <span className="headeroption_one">Try</span>
                <span className="headeroption_two">Prime</span>
              </div>
            </Link>
            {/* Profile */}
            <Link to="/" className="headerLink">
              <div className="headerOption">
                <span className="headeroption_one">Your</span>
                <span className="headeroption_two">profile</span>
              </div>
            </Link>
            {/* Basket */}
            <Link to="/" className="headerLink">
              <div className="headerOption_Basket">
                <ShoppingCartIcon />
                <span className="headeroption_two basketCount">4</span>
              </div>
            </Link>
        </div>
          </div>
        {/* Address */}
        <div className="headerBottom">
          <div className="headeraddress">
            <div className="headerAddress_icon">
              <LocationOnIcon />
            </div>
              <div className="headerOption">
                <span className="headeroption_one">Deliver To </span>
                <span className="headeroption_two"> Mathura</span>
              </div>
          </div>
          {/* Header Bottom Nav */}
          <div className="headerBottton_Navbar">
            <span>
              <Link to= "/" className="headerLink">All Products</Link>
            </span>
            <span>Amazon miniTV </span>
            <span>Best Sellers </span>
            <span>Mobiles </span>
            <span>Today's Deals </span>
            <span>Customer Services </span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
