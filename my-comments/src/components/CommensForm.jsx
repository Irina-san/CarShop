import React, { useState, useRef } from 'react';

function CommentComponent() {
  const [comments, setComments] = useState([]);
  const commentInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newComment = commentInputRef.current.value.trim();

    if (newComment) {
      const newComments = [
        // Создаем новый комментарий со значением из поля ввода
        {
          text: newComment,
          textColor: getRandomTextColor(),
        },
        ...comments,
      ];
      setComments(newComments);
      commentInputRef.current.value = '';
    }
  };

  const getRandomTextColor = () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'black'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div>
      <h2>Комментарии</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={commentInputRef} />
        <button type="submit">Добавить комментарий</button>
      </form>
      <ul>
        {comments.map((comment, index) => (
          <li key={index} style={{ color: comment.textColor }}>
            {comment.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentComponent;