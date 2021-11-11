import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";
import { InlineStyle } from "./components/inlineStyle";
import { CssModules } from "./components/CssModules";
import { StyledJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";

export default function App() {
  const [text, setText] = useState("");
  console.log("🎨", text);
  const [open, setOpen] = useState(false);
  const onChangeText = (e) => {
    setText(e.target.value);
  };
  const onClickOpen = () => {
    setOpen(!open);
  };
  const onClickClose = useCallback(() => {
    setOpen(false);
  }, []);
  const temp = useMemo(() => 3 + 1, []);
  console.log(temp);
  return (
    <div className="App">
      <input onChange={onChangeText} />
      <p>
        <button onClick={onClickOpen}>表示</button>
      </p>
      <ChildArea open={open} onClickClose={onClickClose} />
      <hr />
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
