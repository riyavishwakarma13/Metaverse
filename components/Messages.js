import React from 'react'
import { ByMoralis, useMoralis } from 'react-moralis'
import SendMessage from './../components/SendMessage';


function Messages() {
    const { user } = useMoralis();
  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis
          variant="dark"
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      </div>

      <div>{/* each messages */}</div>

      <div className='flex justify-center'>
          <SendMessage />
      </div>

      <div className='text-center text-gray-400 mt-5 '>
        <p>You're up to date {user.getUsername()}!</p>
      </div>
    </div>
  )
}

export default Messages
