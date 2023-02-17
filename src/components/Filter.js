import React from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.warn(searchParams.get("age"));
  console.warn(searchParams.get("city"));
  const age = searchParams.get("age");
  const city = searchParams.get("city");
  return (
    <>
      <h1>Filter Page</h1>
      <h1>My age is : {age}</h1>
      <h1>My city is: {city}</h1>
      <input
        type="text"
        onChange={(e) => {
          setSearchParams({ text: e.target.value, age: 10 });
        }}
      />
      <button
        onClick={() => {
          setSearchParams({ age: 50 });
        }}>
        Set Age is Query Params
      </button>
    </>
  );
};

export default Filter;
