import { ButtonProps } from "../../types/interfaces";

const Button = (props: ButtonProps): JSX.Element => {
  return (
    <div key={props.styles} className={props.styles}>
      {props.content}
    </div>
  );
};

export default Button;
