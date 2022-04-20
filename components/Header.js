import Image from 'next/image'
import { useMoralis } from 'react-moralis'
import Avatar from './Avatar'
import ChangeUsername from './ChangeUsername';

function Header() {
  const { user } = useMoralis();
  return (
    <div className=" sticky top-0 p-5 z-50 bg-black shadow-sm text-blue-500 border-b-2 border-blue-700 ">
      <div className=" grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center ">
        <div className="relative mx-auto hidden h-24 w-24 lg:inline-grid ">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-full animate-pulse"
            src="https://firebasestorage.googleapis.com/v0/b/metaverse-b18a0.appspot.com/o/meta.jpg?alt=media&token=261058a0-e833-453d-b145-ea1f1fac5b7a"
          />
        </div>
        
        <div className=' col-span-4 text-left lg:text-center '>
          <div className="relative h-48 w-48 rounded-full border-8 border-blue-600 lg:mx-auto ">
            {/* avatar */}
            <Avatar logoutOnPress />
          </div>

          {/* Welcome Message */}
          <h1 className="text-3xl ">Welcome to Metaverse</h1>
          {/* Username */}
          <h2 className='text-5xl font-bold truncate '>{user.getUsername()}</h2>
          {/* Change Username Component */}
          <ChangeUsername />
        </div>
      </div>
    </div>
  )
}

export default Header