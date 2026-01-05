import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="glass-card border-t border-white/10 mt-auto">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-heading font-bold text-white mb-2">
                            SUBHASHREE<span className="text-accent">.</span>
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Premium Digital Experiences
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 text-gray-400 text-sm">
                        <a href="mailto:subhashee267@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                            <Mail size={16} /> subhashee267@gmail.com
                        </a>
                        <a href="tel:+917815022289" className="flex items-center gap-2 hover:text-accent transition-colors">
                            <Phone size={16} /> +91-7815022289
                        </a>
                        <div className="flex items-center gap-2">
                            <MapPin size={16} /> Cuttack, Odisha, India
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Subhashree Sahoo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
