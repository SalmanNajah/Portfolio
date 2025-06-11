import { IconMenu, IconMenu2, IconMenu3 } from '@tabler/icons-react'
import React from 'react'

const Hamburger = () => {
  return (
    <button className="md:hidden flex items-center justify-center" >
      <IconMenu3 className="text-black dark:text-white cursor-pointer shadow-standard rounded-lg p-2 w-9 h-9" />
    </button>
  )
}

export default Hamburger