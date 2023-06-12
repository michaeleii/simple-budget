import { Form, NavLink } from "react-router-dom";
import logo from "../assets/logomark.svg";
import { TrashIcon } from "@heroicons/react/24/solid";

function Nav({ username }: { username: string }) {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to home">
        <img src={logo} alt="" />
        SimpleBudget
      </NavLink>
      {username && (
        <Form
          method="post"
          action="/logout"
          onSubmit={(e) => {
            if (!confirm("Are you sure you want to log out?"))
              e.preventDefault();
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>
            <TrashIcon width={20} />
          </button>
        </Form>
      )}
    </nav>
  );
}
export default Nav;
