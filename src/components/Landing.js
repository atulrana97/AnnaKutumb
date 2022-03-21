import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "../features/counter/counterSlice";

import SlideShow from "./corousel/SlideShow";
import Banner from "./Banner/Banner";

export default function Landing() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#323766",
        backgroundColor: "#fff",
      }}
    >
      <Banner />
      <SlideShow />
    </div>
  );
}
