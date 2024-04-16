import { vscode } from "./utilities/vscode";
import { VSCodeTextArea, VSCodeButton } from "@vscode/webview-ui-toolkit/react";
import React from "react";
import Message from "./Message";
import Loading from "./Loading";
import "./App.css";

function App() {
  function handleHowdyClick() {
    vscode.postMessage({
      command: "echo",
      text: inputValue,
    });
  }

  const [messages, setMessages] = React.useState<{ author: string, message: string }[]>([]);
  const [inputValue, setInputValue] = React.useState("");

  const [loading, setLoading] = React.useState(true);

  function postMessage(message: { author: string, message: string }) {
    setMessages([message, ...messages]);
  }

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputValue) {
      postMessage({ author: "Me", message: inputValue });
    }
    setInputValue("");
  }

  function handleTextEnter(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      setInputValue(prev => prev + '\n');
    }
    if (e.key === 'Enter' && !e.shiftKey) {
      if (inputValue) {
        postMessage({ author: "Me", message: inputValue });
      }
      setInputValue("");
    }
  }

  function handleResetBtnClick() {
    setMessages([]);
  }

  function renderMessages() {
    return messages.map((message, index) => {
      return <Message key={index} author={message.author} message={message.message} />;
    });
  }

  function renderLoading() {
    return <Loading />;
  }


  return (
    <main>
      <div className="controls">
        <VSCodeButton onClick={handleResetBtnClick}>
          New Chat
        </VSCodeButton>
      </div>
      <div className="messages">
        {renderMessages()}
      </div>
      {loading && renderLoading()}
      <form className="text-entry" onSubmit={handleFormSubmit}>
        <VSCodeTextArea
          resize='vertical'
          cols={120}
          value={inputValue}
          onInput={e => setInputValue((e as React.ChangeEvent<HTMLInputElement>).target.value)}
          placeholder='Ask me anything...'
          onKeyDown={handleTextEnter}
        >
        </VSCodeTextArea>
        <VSCodeButton appearance="icon" type="submit">
          <span className="codicon codicon-send"></span>
        </VSCodeButton>
      </form>
    </main>
  );
}

export default App;
