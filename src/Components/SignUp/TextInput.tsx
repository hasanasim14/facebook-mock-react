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
          <input
            type="text"
            placeholder="Mobile number or email address"
            className="TextInput"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="New password"
            className="TextInput"
          />
        </div>
      </div>
    </>
  );
};

export default TextInput;
