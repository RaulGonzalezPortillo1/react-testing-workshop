import React from "react";

interface TDTProps {
  number: number
}

export const TDT = (props: TDTProps) => {
  const multipliedNumber = props.number * 2;
  return (
    <>
      <h1>TDT</h1>
      <h2>{multipliedNumber}</h2>
    </>
  );
};
