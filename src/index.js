import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav.js";
import Slide from "./Slide.js";
// import Carousel from "./Carousel.js";

ReactDOM.render(<Nav />, document.getElementById("navbar"));
// ReactDOM.render(<Carousel />, document.getElementById("slide"));
ReactDOM.render(<Slide />, document.getElementById("slide"));
