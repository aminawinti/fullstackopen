const Notification = ({ message }) => {
  if (message.content === null || message.content === '') {
    return null;
  }

  return (
    <div className={message.level === 'error' ? 'error' : 'info'}>
      {message.content}
    </div>
  );
};

export default Notification;
