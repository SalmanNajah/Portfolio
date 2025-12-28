import { IconMenu3 } from '@tabler/icons-react'

const Hamburger = ({setIsOpen}: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <div>
      <button className="md:hidden flex items-center justify-center" onClick={() => setIsOpen(prev => !prev)}>
        <IconMenu3 className="text-black dark:text-white cursor-pointer shadow-standard rounded-full p-2 w-9 h-9" />
      </button>
    </div>
  )
}

export default Hamburger