import CardText from "./CardText";
import DateSelector from "./DateSelector";
import RadioInput from "./RadioInput";
import SignUpButton from "./SignUpButton";
import TextInput from "./TextInput";

const Content = () => {
  return (
    <>
      <div className="content-border">
        <p id="HeaderTitle">Create a new account</p>
        <p id="HeaderText">It's quick and easy.</p>
        <div className="Line" />

        <TextInput />
        <DateSelector />
        <RadioInput />
        <CardText />
        <SignUpButton />

        <a href="./">Already have an account?</a>
      </div>
    </>
  );
};

export default Content;
