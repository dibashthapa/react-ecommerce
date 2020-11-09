import React, { useState } from "react";

export const Cart = ({ name, description, url, count }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      <p>{url}</p>
      <p>{count}</p>
    </div>
  );
};
