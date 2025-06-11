import Link from 'next/link';

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Projects', href: '/projects' },
  { title: 'Blog', href: '/blog' },
  { title: 'Contact', href: '/contact' },
];

const MobileNavbar = ({ setIsOpen }: { setIsOpen?: (v: boolean) => void }) => (
  <nav className="flex flex-col items-center gap-6 text-lg font-medium text-center">
    {navItems.map(({ title, href }) => (
      <Link
        key={href}
        href={href}
        onClick={() => setIsOpen?.(false)}
        className="text-zinc-800 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        {title}
      </Link>
    ))}
  </nav>
);

export default MobileNavbar;
