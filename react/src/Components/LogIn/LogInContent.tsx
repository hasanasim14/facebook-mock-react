import Links from "./Links";

const Content = () => {
  return (
    <>
      <div className="content-border">
        <p style={{fontSize:'18px'}}>Log in to Facebook</p>
        <input
          type="text"
          placeholder="Email address or phone number"
          className="TextInput"
        />
        <input type="password" placeholder="Password" className="TextInput" />

        <button className="LogInButton">Log in</button>

        {/* <a href="">Forgotten account?</a>
        <a href="">Sign up for Facebook</a>
      */}

        <Links />
      </div>
      <p>asdsadad</p>
      <p>asdsadad</p>
      <p>asdsadad</p>
      <p>asdsadad</p>
      <p>asdsadad</p>
      <p>asdsadad</p>
      <p>asdsadad</p>
    </>
  );
};

export default Content;
