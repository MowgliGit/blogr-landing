function MainPart1() {
  return (
    <div className="container">
      <div className="layoutContainerThree">
        <div className="illustrationImgBox">
          <img
            src={`${process.env.PUBLIC_URL}/images/illustration-laptop-desktop.svg`}
            alt="editor desktop ilustartion"
            className="illustrationImg"
          />
        </div>
        <div className="paragrapxBoxes">
          <div className="paragraphBox">
            <h4 className="headingQuarternary">Free, open, simple</h4>
            <p className="paragraph ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              laudantium laboriosam nam deserunt sunt minima quidem cum tenetur?
              Maxime quidem commodi quod dolorum, debitis porro eos quaerat
              necessitatibus autem odio? Impeditlaudantium laboriosam nam
              deserunt sunt minima quidem cum tenetur?
            </p>
          </div>
          <div className="paragraphBox">
            <h4 className="headingQuarternary">Powerful tooling</h4>
            <p className="paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
              laudantium laboriosam nam deserunt sunt minima quidem cum tenetur?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainPart1;
