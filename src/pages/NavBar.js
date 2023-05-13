import { NavLink } from "react-router-dom";
import "/src/styles.css";

export function NavBar() {
  return (
    <div>
      <div class="nav">
        <NavLink to="/">MyShoppingCart</NavLink>
        <div class="otherPages">
          <NavLink id="link" to="/cart">
            Cart
          </NavLink>
          <NavLink id="link" to="/wishList">
            Wish
          </NavLink>
        </div>
      </div>
    </div>
  );
}
