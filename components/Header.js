import Image from 'next/image'
import { useMoralis } from 'react-moralis'
import Avatar from './Avatar'

function Header() {
  const { user } = useMoralis()
  return (
    <div>
      <div className="">
        <div className="relative mx-auto hidden h-24 w-24 lg:inline-grid ">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            src="https://links.papareact.com/3pi"
          />
        </div>
        <div>
          <div className="relative h-48 w-48 rounded-full border-8 border-pink-500 lg:mx-auto ">
            {/* avatar */}
            <Avatar logoutOnPress />
          </div>

          {/* Welcome Message */}
          <h1>Welcome to Metaverse</h1>

          {/* Username */}
          {/* Change Username Component */}
        </div>
      </div>
    </div>
  )
}

export default Header
