import Input from "./Input";
import Links from "./Links";
import LogInButton from "./LogInButton";

const Content = () => {
  return (
    <>
      <div className="content-border">
        <p style={{ fontSize: "18px" }}>Log in to Facebook</p>

        <Input />
        <LogInButton />
        <Links />
      </div>
    </>
  );
};

export default Content;
