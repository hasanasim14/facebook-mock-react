const Input = () => {
  return (
    <>
      <div className="radio-container">
        <label className="radio-label" htmlFor="radioButton">
          Label Text
        </label>
        <input
          type="radio"
          id="radioButton"
          className="radio-input"
          name="radioGroup"
        />
      </div>
    </>
  );
};

export default Input;
