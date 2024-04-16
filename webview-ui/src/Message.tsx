

type MessageProps = {
  author: string;
  message: string;
}
export default function Message(props: MessageProps) {
  return (
    <div className='message'>
      <span className='message-author'>{props.author}</span>
      <p className='message-text'>{props.message}</p>
    </div>
  );
}
