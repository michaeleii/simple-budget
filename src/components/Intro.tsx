import { Form } from "react-router-dom";

import { UserPlusIcon } from "@heroicons/react/24/solid";

import illustration from "../assets/illustration.jpg";

function Intro() {
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent">Your Money</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom. Start your
          journey today.
        </p>
        <Form method="post" name="username">
          <input
            type="text"
            name="username"
            required
            aria-label="Your name"
            autoComplete="given-name"
            placeholder="What is your name?"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="Person with money" width={600} />
    </div>
  );
}
export default Intro;
