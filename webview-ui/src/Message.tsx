import React from 'react';

type MessageProps = {
  author: string;
  message: string;
}
export default function Message(props: MessageProps) {
  const lines = props.message.split('\n');
  const renderedLines = lines.map((line, index) => {
    return <React.Fragment key={index}>
      {line} {index + 1 != lines.length && <br />}
    </React.Fragment >
  });

  return (
    <div className='message'>
      <span className='message-author'>{props.author}</span>
      <p className="message-text">
        {renderedLines}
      </p>
    </div>
  );
}
