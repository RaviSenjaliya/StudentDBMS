import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const Progressbar = () => {
  return (
    <div>
      <ProgressBar className=" my-3 ProgressBar Progress ">
        <ProgressBar animated striped variant="success" now={25} key={1} />
        <ProgressBar animated striped variant="warning" now={25} key={2} />
        <ProgressBar animated striped variant="danger" now={25} key={3} />
        <ProgressBar animated striped variant="primary" now={25} key={4} />
        <ProgressBar animated striped variant="dark" now={25} key={5} />
      </ProgressBar>
    </div>
  );
};

export default Progressbar;
