import React, { useEffect, useMemo, useState } from "react";

export default function Hooks() {
  const [grade, setGrade] = useState(5);
  const countPopulation = (grade) => {
    return grade ** 2;
  };

  const memoizedVal = useMemo(() => countPopulation(grade));

  useEffect(() => {
    console.log(`Initial Memoized value is: ${memoizedVal}`);
  }, [memoizedVal]);

  return (
    <div>
      <h1>useMemo</h1>
      {/* <p>Current Grade: {grade}</p>
      <p>Current Population: {memoizedVal}</p> */}
      <RenderVal grade={grade} val={memoizedVal}></RenderVal>
      <button onClick={() => setGrade((prevGrade) => (prevGrade += 1))}>
        Increase Grade
      </button>
    </div>
  );
}

const RenderVal = ({ grade, val }) => {
  return (
    <>
      <p>Current Grade: {grade}</p>
      <p>
        Current Population: {""}
        {typeof val === "function" ? val() : val}
      </p>
    </>
  );
};
