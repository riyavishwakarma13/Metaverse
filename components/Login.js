import Image from 'next/image'
import { useMoralis } from 'react-moralis';

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="relative bg-black ">
      <h1>LOL This is the login screen</h1>
      <div className='flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4 '>
        {/* papafam logo */}
        <Image className='object-cover rounded-full' src="https://firebasestorage.googleapis.com/v0/b/metaverse-b18a0.appspot.com/o/meta.jpg?alt=media&token=261058a0-e833-453d-b145-ea1f1fac5b7a" height={200} width={200} />
        {/* login button */}
        <button onClick={authenticate} className='bg-violet-900 rounded-lg text-white p-5 font-bold '>Login to the Metaverse</button>
      </div>

      <div className="h-screen w-full">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/metaverse-b18a0.appspot.com/o/metaverse-meaning.jpg?alt=media&token=0a2dc846-36b8-4190-8269-7e9e8040da99"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default Login
