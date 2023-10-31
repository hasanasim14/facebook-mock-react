import Header from "../Components/SignUp/Header";
import RadioInput from "../Components/SignUp/RadioInput";
import "../assets/Css/Stylesheet.css";

const SignUpPage = () => {
  return (
    <>
      <div>
        <Header />
        <h1>Create a new account</h1>
        <p>It's quick and easy</p>

        {/* <br /> */}
        <input type="text" placeholder="First Name" />
        <br />
        <input type="text" placeholder="Surname" />
        <br />

        <input type="text" placeholder="Mobile number or email address" />
        <br />

        <input type="text" placeholder="New password" />
        <p>Date of birth</p>
        {/* date of birth kay sath click for more information wala button question mark wala */}
        {/* <input type="text" placeholder="First Name" /> */}
        <select name="" id="">
          <option>1</option>
          <option>2</option>
        </select>
        {/* <br /> */}
        <select name="" id="">
          <option>Jan</option>
          <option>Feb</option>
          <option>Mar</option>
          <option>Apr</option>
          <option>May</option>
          <option>Jun</option>
        </select>
        <select>
          <option>2023</option>
          <option>2022</option>
        </select>

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
        <button>Submit</button>
        <br />
        <a href="">Already have an account?</a>
      </div>
    </>
  );
};

export default SignUpPage;
