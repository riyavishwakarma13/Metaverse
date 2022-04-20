import React, { useState } from 'react'
import { useMoralis } from 'react-moralis'

function SendMessage({endOfMessagesRef}) {
  const { user, Moralis } = useMoralis()
  const [message, setMessage] = useState("");
  
  const sendMessage = (e) => {
    e.preventDefault();
    
    if (!message) return;
    
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages.save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      }).then(
        (message) => {
          //The object was saved successfully.
        },
        (error) => {
          // The Save failed
          // error is a Moralis.Error with an error code and message.
          console.log(error.message)
        }
      )
    endOfMessagesRef.current.scrollIntoView({behaviour:"smooth"});

    setMessage("");
  }

  return (
    <form className="fixed bottom-10 flex w-11/12 max-w-2xl rounded-full border-4 border-blue-400 bg-black px-6 py-4 opacity-80 shadow-xl ">
      <input
        type="text"
        className=" flex-grow bg-transparent pr-5 text-white placeholder-gray-500 outline-none "
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Enter a Message ${user.getUsername()}...`}
      />
      <button
        onClick={sendMessage}
        type="submit"
        className=" font-bold text-blue-500 "
      >
        Send
      </button>
    </form>
  )
}

export default SendMessage
