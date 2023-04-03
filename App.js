import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "H1",
//   {
//     id: "heading",
//   },
//   "Namaste React!!!"
// );
// JSX => Babel transpiled code to React.createElement => ReactElement -JS Object => HTMLElement(render);
// const jsxHeading = (
//   <h1 className="head" tabIndex="1">
//     Namaste React Using JSX!!!
//   </h1>
// );

const Title = () => (
  <h1 className="title" tabIndex="2">
    Namaste React Using JSX
  </h1>
);

const elem = <h1>This is Element</h1>;

const HeadingComponent = () => (
  // <React.Fragment>
  <>
    {elem}
    {12345 + 54321}
    {Title()}
    <Title></Title>
    <Title />
    <h1 className="heading" tabIndex="1">
      Namaste React Using React Component!!!
    </h1>
  </>
  // </React.Fragment>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
