const RadioInput = () => {
  return (
    <>
      <div>
        <p className="ContentText">Gender</p>
        <div className="RadioInput">
          <label htmlFor="option1">Male</label>
          <input
            className="RadioInput"
            // id="option1"
            name="options"
            value="option1"
            type="radio"
          />
        </div>

        <div className="RadioInput">
          <label htmlFor="option2">Female</label>
          <input
            type="radio"
            // id="option2"
            name="options"
            value="option2"
          />
        </div>
        <div className="RadioInput">
          <label htmlFor="option3">Custom</label>
          <input
            type="radio"
            // id="option3"
            name="options"
            value="option3"
          />
        </div>
      </div>
    </>
  );
};

export default RadioInput;
