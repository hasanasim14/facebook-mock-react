const TextInput = () => {
  return (
    <>
      <div>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="TextInputName"
          />
          <input type="text" placeholder="Surname" className="TextInputName" />
        </div>

        <div>
          <input type="text" placeholder="Mobile number or email address" />
        </div>

        <input type="password" placeholder="New password" />
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
      </div>
    </>
  );
};

export default TextInput;
