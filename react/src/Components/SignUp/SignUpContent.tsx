// import Input from "./Input";
import DateSelector from "./DateSelector";
import RadioInput from "./RadioInput";
import SignUpButton from "./SignUpButton";
import TextInput from "./TextInput";

const Content = () => {
  return (
    <>
      {/* <div> */}
      <div className="content-border">
        <p id="HeaderTitle">Create a new account</p>
        <p style={{ color: "#606770" }}>It's quick and easy.</p>

        <div className="Line" />
        <TextInput />

        {/* <p>Gender</p> */}
        <DateSelector />

        <RadioInput />

        {/* <Input /> */}

        <p id="ContentMessage">
          People who use our service may have uploaded your contact information
          to Facebook. Learn more.
        </p>
        <p id="ContentMessage">
          By clicking Sign Up, you agree to our Terms, Privacy Policy and
          Cookies Policy. You may receive SMS notifications from us and can opt
          out at any time.
        </p>
        <SignUpButton />
        <a href="">Already have an account?</a>
      </div>
      {/* </div> */}
    </>
  );
};

export default Content;
