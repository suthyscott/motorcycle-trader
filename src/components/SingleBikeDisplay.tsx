import React, { useState, useEffect } from "react";

type Props = {
  make: string;
  model: string;
  color: string;
  miles: number;
  year: number;
  id: number;
};

const SingleBikeDisplay: React.FC<Props> = ({ make, model, color, year, miles, id}) => {

  return (
    <div className="single-bike">
      <h1>{year} {make} {model}</h1>
    </div>
  );
};

export default SingleBikeDisplay;
