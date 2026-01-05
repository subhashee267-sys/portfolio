import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Skills', path: '/skills' },
        { name: 'Projects', path: '/projects' },
        { name: 'Experience', path: '/experience' },
        { name: 'Education', path: '/education' },
        { name: 'Contact', path: '/contact' },
    ];

    const handleDownloadResume = () => {
        // Determine the base URL
        const baseUrl = window.location.origin;
        // Construct the full URL to the PDF
        const pdfUrl = `${baseUrl}/resume.pdf`;

        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Subhashree_Sahoo_Resume.pdf'; // Suggested filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 glass-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <NavLink to="/" className="text-2xl font-bold font-heading text-white tracking-wider hover:text-accent transition-colors">
                            SUBHASHREE<span className="text-accent">.</span>
                        </NavLink>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${isActive
                                            ? 'text-accent bg-white/10 shadow-[0_0_10px_rgba(0,255,255,0.3)]'
                                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <button
                                onClick={handleDownloadResume}
                                className="flex items-center gap-2 px-4 py-2 rounded-md bg-accent/20 border border-accent/50 text-accent hover:bg-accent/30 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] transition-all duration-300"
                            >
                                <Download size={16} /> Resume
                            </button>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            {isOpen ? (
                                <X size={24} />
                            ) : (
                                <motion.div
                                    animate={{
                                        rotate: [0, 20, -20, 10, -10, 0],
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatDelay: 2,
                                        ease: "easeInOut",
                                    }}
                                    className="text-accent"
                                >
                                    <Menu size={24} />
                                </motion.div>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-card border-b border-white/10"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `block px-3 py-2 rounded-md text-base font-medium ${isActive
                                            ? 'text-accent bg-white/10'
                                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <div className="px-3 pt-2">
                                <button
                                    onClick={handleDownloadResume}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-accent/20 border border-accent/50 text-accent hover:bg-accent/30"
                                >
                                    <Download size={16} /> Download Resume
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
