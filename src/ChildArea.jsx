import { memo } from "react";

const style = { width: "100%", height: "200px", background: "#aaf" };

export const ChildArea = memo(({ open, onClickClose }) => {
  const data = [...Array(300).keys()];
  console.log("🎨 ChildAre表示！");

  data.forEach((v, i) => {
    console.log("...");
  });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポ</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
