// import { useState } from 'react';
// import { SendOutlined, PictureOutlined } from '@ant-design/icons';
// import { sendMessage, isTyping } from 'react-chat-engine-advanced';

// const MessageForm = (props) => {
//   const [value, setValue] = useState('');
//   const { chatId, creds } = props;

//   const handleChange = (event) => {
//     setValue(event.target.value);

//     isTyping(props, chatId);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const text = value.trim();

//     if (text.length > 0) {
//       sendMessage(creds, chatId, { text });
//     }

//     setValue('');
//   };

//   const handleUpload = (event) => {
//     sendMessage(creds, chatId, { files: event.target.files, text: '' });
//   };

//   return (
//     <form className="message-form" onSubmit={handleSubmit}>
//       <input
//         className="message-input"
//         placeholder="Send a message..."
//         value={value}
//         onChange={handleChange}
//         onSubmit={handleSubmit}
//       />
//       <label htmlFor="upload-button">
//         <span className="image-button">
//           <PictureOutlined className="picture-icon" />
//         </span>
//       </label>
//       <input
//         type="file"
//         multiple={false}
//         id="upload-button"
//         style={{ display: 'none' }}
//         onChange={handleUpload.bind(this)}
//       />
//       <button type="submit" className="send-button">
//         <SendOutlined className="send-icon" />
//       </button>
//     </form>
//   );
// };

// export default MessageForm;

// import { useState } from 'react';
// import { SendOutlined, PictureOutlined } from '@ant-design/icons';
// import { sendMessage, isTyping } from 'react-chat-engine-advanced';

// const MessageForm = (props) => {
//   const [value, setValue] = useState('');
//   const { chatId, creds } = props;

//   const handleChange = (event) => {
//     setValue(event.target.value);
//     isTyping(props, chatId);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const text = value.trim();

//     if (text.length > 0) {
//       sendMessage(creds, chatId, { text });
//     }

//     setValue('');
//   };

//   const handleUpload = (event) => {
//     sendMessage(creds, chatId, { files: event.target.files, text: '' });
//   };

//   return (
//     <form className="ce-message-form" onSubmit={handleSubmit}>
//       <input
//         className="ce-message-input"
//         placeholder="Send a message..."
//         value={value}
//         onChange={handleChange}
//       />
//       <label htmlFor="ce-upload-button">
//         <span className="ce-image-button">
//           <PictureOutlined className="ce-picture-icon" />
//         </span>
//       </label>
//       <input
//         type="file"
//         multiple={false}
//         id="ce-upload-button"
//         style={{ display: 'none' }}
//         onChange={handleUpload.bind(this)}
//       />
//       <button type="submit" className="ce-send-button">
//         <SendOutlined className="ce-send-icon" />
//       </button>
//     </form>
//   );
// };

// export default MessageForm;

// import { useState } from 'react';
// import { SendOutlined, PictureOutlined } from '@ant-design/icons';
// import { sendMessage, useMultiChatLogic } from 'react-chat-engine-advanced';

// const MessageForm = () => {
//   const [value, setValue] = useState('');
//   const chatId = 'c5e6a3ce-e951-49b4-8177-6a27404cdcd4'; // Replace with your chatId
//   const creds = '123123'; // Replace with your credentials

//   const { isTyping } = useMultiChatLogic(chatId, 'ADS', creds);

//   const handleChange = (event) => {
//     setValue(event.target.value);
//     isTyping(chatId); // Assuming isTyping takes the chatId as an argument
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const text = value.trim();

//     if (text.length > 0) {
//       sendMessage({ text }, chatId, creds); // Adjust the arguments as needed
//     }

//     setValue('');
//   };

//   const handleUpload = (event) => {
//     sendMessage({ files: event.target.files, text: '' }, chatId, creds); // Adjust the arguments as needed
//   };

//   return (
//     <form className="message-form" onSubmit={handleSubmit}>
//       <input
//         className="message-input"
//         placeholder="Send a message..."
//         value={value}
//         onChange={handleChange}
//       />
//       <label htmlFor="upload-button">
//         <span className="image-button">
//           <PictureOutlined className="picture-icon" />
//         </span>
//       </label>
//       <input
//         type="file"
//         multiple={false}
//         id="upload-button"
//         style={{ display: 'none' }}
//         onChange={handleUpload.bind(this)}
//       />
//       <button type="submit" className="send-button">
//         <SendOutlined className="send-icon" />
//       </button>
//     </form>
//   );
// };

// export default MessageForm;

import { useState } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { newMessage, useMultiChatLogic } from 'react-chat-engine-advanced';

const MessageForm = () => {
  const [value, setValue] = useState('');
  const chatId = 'c5e6a3ce-e951-49b4-8177-6a27404cdcd4'; // Replace with your chatId
  const creds = '123123'; // Replace with your credentials

  const { isTyping } = useMultiChatLogic(chatId, 'ADS', creds);

  const handleChange = (event) => {
    setValue(event.target.value);
    isTyping(chatId); // Assuming isTyping takes the chatId as an argument
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) {
      newMessage(chatId, { text }, creds); // Adjust the arguments as needed
    }

    setValue('');
  };

  const handleUpload = (event) => {
    newMessage(chatId, { files: event.target.files, text: '' }, creds); // Adjust the arguments as needed
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleUpload.bind(this)}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default MessageForm;

