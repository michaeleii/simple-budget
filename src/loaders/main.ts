import { fetchData } from "../helpers";

export function mainLoader() {
  const username: string = fetchData("username");
  return {
    username,
  };
}
