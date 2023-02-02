import { StarOutline, Title } from "@mui/icons-material";
import "./productlist.css";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
const ProductList = ({ title, price, image, rating }) => {
  let halfRating = (rating - Math.floor(rating)) * 10;
  let outline = 0;
  halfRating > 0
    ? (outline = 5 - Math.ceil(rating))
    : (outline = 5 - Math.floor(rating));
  return (
    <>
      <div className="Products">
        <img src={image} alt={title} />
        <div className="product_info">
          <p>{title}</p>
          <div className="product_group">
            <p className="product_price">
              <small>$.</small>
              <strong>{price}</strong>
            </p>
            <div className="product_rating">
              {/* FULL STAR */}
              {Array(Math.floor(rating))
                .fill()
                .map((_, index) => (
                  <StarIcon key={index} />
                ))}
              {/* HALF STAR */}
              {halfRating > 0 ? <StarHalfIcon /> : <></>}

              {outline > 0
                ? Array(outline)
                    .fill()
                    .map((_, index) => <StarOutlineIcon key={index} />)
                : ""}
            </div>
          </div>
        </div>
        <button>Add to Cart</button>
      </div>
      {/* <div className="Products">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/I/410sAdv-X5L._AC_SX368_.jpg"
          alt=" "
        />
        <div className="product_info">
          <p>Touch Smartwatch with 30 Workout Modes</p>
          <div className="product_group">
            <p className="product_price"><small>$1200</small> </p>
            <div className="product_rating">4.5</div>
          </div>
        </div>
        <button>Add to Cart</button>
      </div>
      <div className="Products">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/I/410sAdv-X5L._AC_SX368_.jpg"
          alt=" "
        />
        <div className="product_info">
          <p>Touch Smartwatch with 30 Workout Modes</p>
          <div className="product_group">
            <p className="product_price"><small>$1200</small> </p>
            <div className="product_rating">4.5</div>
          </div>
        </div>
        <button>Add to Cart</button>
      </div>
      <div className="Products">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/I/410sAdv-X5L._AC_SX368_.jpg"
          alt=" "
        />
        <div className="product_info">
          <p>Touch Smartwatch with 30 Workout Modes</p>
          <div className="product_group">
            <p className="product_price"><small>$1200</small> </p>
            <div className="product_rating">4.5</div>
          </div>
        </div>
        <button>Add to Cart</button>
      </div> */}
      {/* <div className="Products">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/I/410sAdv-X5L._AC_SX368_.jpg"
          alt=" "
        />
        <div className="product_info">
          <p>Touch Smartwatch with 30 Workout Modes</p>
          <div className="product_group">
            <p className="product_price"><small>$1200</small> </p>
            <div className="product_rating">4.5</div>
          </div>
        </div>
        <button>Add to Cart</button>
      </div>
      <div className="Products">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/I/410sAdv-X5L._AC_SX368_.jpg"
          alt=" "
        />
        <div className="product_info">
          <p>Touch Smartwatch with 30 Workout Modes</p>
          <div className="product_group">
            <p className="product_price"><small>$1200</small> </p>
            <div className="product_rating">4.5</div>
          </div>
        </div>
        <button>Add to Cart</button>
      </div>
      <div className="Products">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/I/410sAdv-X5L._AC_SX368_.jpg"
          alt=" "
        />
        <div className="product_info">
          <p>Touch Smartwatch with 30 Workout Modes</p>
          <div className="product_group">
            <p className="product_price"><small>$1200</small> </p>
            <div className="product_rating">4.5</div>
          </div>
        </div>
        <button>Add to Cart</button>
      </div>
      <div className="Products">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/I/410sAdv-X5L._AC_SX368_.jpg"
          alt=" "
        />
        <div className="product_info">
          <p>Touch Smartwatch with 30 Workout Modes</p>
          <div className="product_group">
            <p className="product_price"><small>$1200</small> </p>
            <div className="product_rating">4.5</div>
          </div>
        </div>
        <button>Add to Cart</button>
      </div> */}
    </>
  );
};
export default ProductList;
