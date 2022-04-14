import React, { useState } from 'react'
import { useMoralis } from 'react-moralis';
import SendMessage from './SendMessage';

function SendMessage() {
    const { user, Moralis } = useMoralis();
    const [message, setMessage] = useState("");
    const SendMessage = (e) =>{
        e.preventDefault();

        if (!message) return;

        const Messages = Moralis.Object.extend('Messages');
        const messages = new messages();

        messages.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get('ethAddress')
        })
        .then(
            (message) =>{
//The object was saved successfully.
            },
            (error) =>{
                // The Save failed
                // error is a Moralis.Error with an error code and message.
                console.log(error.message)
            }
        )
    }

  return (
    <form className='flex fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl w-11/12 shadow-xl rounded-full border-4 border-blue-400 '>
      <input
        type="text"
        className=" flex-grow bg-transparent text-white placeholder-gray-500 outline-none pr-5 "
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder={`Enter a Message ${user.getUsername()}....`}
      />
      <button onClick={SendMessage} type="submit" className=" font-bold text-pink-500 ">Send</button>
    </form>
  )
}

export default SendMessage
