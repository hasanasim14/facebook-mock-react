const Content = () => {
  return (
    <>
      <div className="content-border">
        <h2>Log in to Facebook</h2>
        <input
          type="text"
          placeholder="Email address or phone number"
          className="TextInput"
        />
        <br />
        <input type="password" placeholder="Password" className="TextInput" />
        <br />

        <button className="LogInButton">Log In</button>

        <br />
        <a href="">Forgotten account?</a>
        <a href="">Sign up for Facebook</a>
      </div>
    </>
  );
};

export default Content;
