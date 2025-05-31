const Footer = () => {
  const links = [
    { label: 'Creative Tim', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Licenses', href: '#' }
  ];

  return (
    <footer className="w-full mt-4 bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <div className="container mx-auto px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600">
            © 2025, made with by{' '}
            <span className="font-bold text-gray-800">Creative Tim</span>
            {' '}for a better web.
          </p>
          
          <nav className="flex gap-8">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-600 font-semibold hover:text-gray-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 