import React, { useState, useEffect, Fragment } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    //const name = prompt('please enter your name')
    setUsername(prompt('please enter your name'));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // all the logic to send a message goes here

    setInput('');
  };

  return (
    <div className='App'>
      <h1>hello</h1>
      <h2>welcome, {username} . </h2>
      <img
        src='https://i2.wp.com/getsiteglue.com/wp-content/uploads/2017/12/facebook-messenger-logo.jpg?ssl=1'
        alt=''
        width='200px'
        height='100px'
        style={{ marginLeft: '300px' }}
      />

      <form className='app__form'>
        <FormControl className='app__formControl'>
          <Input
            className='app__input'
            placeholder='Enter a message...'
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton
            className='app__iconButton'
            variant='contained'
            color='primary'
            type='submit'
            disabled={!input}
            onClick={sendMessage}
          >
            <SendIcon></SendIcon>
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message}></Message>
        ))}
      </FlipMove>

      {/* message themselves */}
    </div>
  );
}

export default App;
