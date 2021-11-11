export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">StyledJsx</p>
        <button className="btn">btn</button>
      </div>
      <style jsx="true">{`
        .container {
          background: magenta;
          border-radius: 20px;
          display: flex;
          justify-content: space-between;
          padding: 1em;
          min-height: 1em;
          margin: 1em 0;
        }
        .title {
          color: #fff;
        }
        .btn {
          background: #aaa;
          &:hover {
            background: #fff;
          }
        }
      `}</style>
    </>
  );
};
