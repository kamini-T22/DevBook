// import { ChatEngine } from 'react-chat-engine-advanced';

// //import ChatFeed from './components/ChatFeed';
// //import LoginForm from './components/LoginForm';
// //import './App.css';

// const projectID = 'c5e6a3ce-e951-49b4-8177-6a27404cdcd4';

// const Message = () => {

//   return (
//     <ChatEngine
//       height="100vh"
//       projectID={projectID}
//       userName='ADS'
//       userSecret='123123'
//     />
//   );
// };

// // infinite scroll, logout, more customizations...

// export default Message;

// import React from 'react';

// import {
//   MultiChatSocket,
//   useMultiChatLogic,
//   MultiChatWindow,
// } from 'react-chat-engine-advanced';

// export default function Message() {
//   const chatProps = useMultiChatLogic(
//     'c5e6a3ce-e951-49b4-8177-6a27404cdcd4',
//     'ADS',
//     '123123'
//   );
//   return (
//     <>
//       <MultiChatWindow {...chatProps} />
//       <MultiChatSocket {...chatProps} />
//     </>
//   );
// }


import React from 'react';
import ChatFeed from './Components/ChatFeed';
import {
  MultiChatSocket,
  useMultiChatLogic,
  MultiChatWindow,
} from 'react-chat-engine-advanced';
import Header from '../navbar/Header';

const styles = {
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
};

export default function Message() {
  const chatProps = useMultiChatLogic(
    'c5e6a3ce-e951-49b4-8177-6a27404cdcd4',
    'ADS',
    '123123'
  );

  return (
    <>
     <Header/>
    <div style={styles.container}>
      <MultiChatWindow {...chatProps} />
      <MultiChatSocket {...chatProps} />
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    </div>
    </>
  );
}
