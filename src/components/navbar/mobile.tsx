import Link from 'next/link';
import { motion } from 'motion/react';

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Projects', href: '/projects' },
  // { title: 'Blog', href: '/blog' },
  // { title: 'Resources', href: '/resources' },
  { title: 'Contact', href: '/contact' }
];

const MobileNavbar = ({ setIsOpen }: { setIsOpen?: (v: boolean) => void }) => (
  <motion.nav className="flex flex-col items-center gap-6 text-lg font-medium text-center"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } }}>
    {navItems.map(({ title, href }, idx) => (
      <motion.div key={idx}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.2 * (idx + 1), ease: "easeInOut" } }}>
        <Link
          href={href}
          onClick={() => setIsOpen?.(false)}
          className="text-zinc-800 dark:text-zinc-100 transition-colors"
        >
          {title}
        </Link>
      </motion.div>

    ))}
  </motion.nav>
);

export default MobileNavbar;
