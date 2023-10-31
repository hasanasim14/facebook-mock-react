const RadioInput = () => {
  return (
    <>
      <div>
        <input
          type="radio"
          id="option1"
          name="options"
          value="option1"
          //   checked={selectedOption === "option1"}
          //   onChange={handleOptionChange}
        />
        <label htmlFor="option1">Male</label>
        {/* </div> */}
        {/* <div> */}
        <input
          type="radio"
          id="option2"
          name="options"
          value="option2"
          //   checked={selectedOption === "option2"}
          //   onChange={handleOptionChange}
        />
        <label htmlFor="option2">Female</label>
        {/* </div> */}
        {/* <div> */}
        <input
          type="radio"
          id="option3"
          name="options"
          value="option3"
          //   checked={selectedOption === 'option3'}
          //   onChange={handleOptionChange}
        />
        <label htmlFor="option3">Custom</label>
      </div>
    </>
  );
};

export default RadioInput;
