import { GreetProps } from "./Greet.types";

export const Greet = (props: GreetProps) => {
  return <div>Hello {props.name}</div>;
};
