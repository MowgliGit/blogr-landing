import React from "react";
function MainPart2() {
  return (
    <div className="container">
      <div className="layoutContainerBlue">
        <div className="ilustrationBoxPhones">
          <img
            className="ilustrationPhones"
            src={`${process.env.PUBLIC_URL}/images/illustration-phones.svg`}
            alt="Illustration Phones"
          />
        </div>
        <div className="paragraphBox paragraphBoxBlue">
          <h4 className="headingQuarternary headingQuarternaryWhite">
            State of the Art Infrastructure
          </h4>
          <p className="paragraph paragraphWhite">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            laudantium laboriosam nam deserunt, sunt minima quidem cum tenetur?
            Maxime quidem commodi quod dolorum debitis porro eos quaerat
            necessitatibus autem odio?
          </p>
        </div>
      </div>
    </div>
  );
}
export default MainPart2;
