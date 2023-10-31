import RadioInput from "./RadioInput";
import SignUpButton from "./SignUpButton";
import TextInput from "./TextInput";

const Content = () => {
  return (
    <>
      {/* <div> */}
      <div className="content-border">
        <h1>Create a new account</h1>
        <p>It's quick and easy</p>

        <div className="Line" />
        <TextInput />

        <p>Gender</p>
        <RadioInput />
        <br />

        <p>
          People who use our service may have uploaded your contact information
          to Facebook. Learn more.
        </p>
        <p>
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
