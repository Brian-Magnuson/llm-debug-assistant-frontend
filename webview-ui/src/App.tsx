import { vscode } from "./utilities/vscode";
import { VSCodeTextArea, VSCodeButton } from "@vscode/webview-ui-toolkit/react";
import React from "react";
import "./App.css";

function App() {
  function handleHowdyClick() {
    vscode.postMessage({
      command: "echo",
      text: inputValue,
    });
  }

  const [inputValue, setInputValue] = React.useState("");

  return (
    <main>
      <h1>Hello World!</h1>
      <VSCodeTextArea
        resize='vertical'
        value={inputValue}
        onInput={e => setInputValue((e as React.ChangeEvent<HTMLInputElement>).target.value)}
      >
        Ask me anything...
      </VSCodeTextArea>
      <VSCodeButton appearance="icon" onClick={handleHowdyClick}>
        <span className="codicon codicon-check"></span>
      </VSCodeButton>
    </main>
  );
}

export default App;
