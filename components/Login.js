import Image from 'next/image'

function Login() {
  return (
    <div className="relative bg-black ">
      <h1>LOL This is the login screen</h1>
      <div className='flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4 '>
        {/* papafam logo */}
        <Image className='object-cover rounded-full' src="https://links.papareact.com/3pi" height={200} width={200} />
        {/* login button */}
        <button>Login to the Metaverse</button>
      </div>

      <div className="h-screen w-full">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default Login
