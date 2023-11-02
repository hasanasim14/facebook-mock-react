const DateSelector = () => {
  const date = Array.from({ length: 31 }, (_, index) => index + 1);

  const startYear = 2023;
  const endYear = 1905;
  const years = Array.from(
    { length: startYear - endYear + 1 },
    (_, index) => startYear - index
  );

  return (
    <div>
      <p className="ContentText">Date of birth</p>
      {/* date of birth kay sath click for more information wala button question mark wala */}
      {/* <input type="text" placeholder="First Name" /> */}

      <select name="" id="number" className="DateSelector">
        {date.map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>

      <select name="" id="" className="DateSelector">
        <option>Jan</option>
        <option>Feb</option>
        <option>Mar</option>
        <option>Apr</option>
        <option>May</option>
        <option>Jun</option>
        <option>Jul</option>
        <option>Sep</option>
        <option>Aug</option>
        <option>Oct</option>
        <option>Nov</option>
        <option>Dec</option>
      </select>

      <select name="" id="year" className="DateSelector">
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DateSelector;
