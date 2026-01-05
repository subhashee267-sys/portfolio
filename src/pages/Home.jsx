import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { resumeData } from '../data/resume';
import SEO from '../components/SEO';

const Home = () => {
    return (
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <SEO title="Home" description="Portfolio of Subhashree Sahoo - Java Developer" />
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left z-10"
                >
                    <div className="inline-block px-3 py-1 mb-4 rounded-full border border-accent/50 bg-accent/10 text-accent font-mono text-sm tracking-wider">
                        JAVA DEVELOPER & UI/UX DESIGNER
                    </div>
                    <h1 className="text-5xl sm:text-7xl font-bold font-heading mb-6 leading-tight">
                        <span className="block text-white">Hi, I'm</span>
                        <span className="bg-gradient-to-r from-blue-400 via-accent to-purple-500 bg-clip-text text-transparent">
                            {resumeData.personal.name}
                        </span>
                    </h1>
                    <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed border-l-2 border-accent/30 pl-4">
                        {resumeData.personal.objective}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            to="/projects"
                            className="group relative px-8 py-3 bg-accent text-primary font-bold rounded-none overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                View Work <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 transform skew-x-12"></div>
                        </Link>
                        <Link
                            to="/contact"
                            className="px-8 py-3 border border-white/20 text-white font-medium hover:bg-white/10 transition-colors"
                        >
                            Contact Me
                        </Link>
                    </div>

                    <div className="mt-12 flex gap-6 text-gray-400">
                        <a href={resumeData.personal.socials?.github || "#"} className="hover:text-accent transition-transform hover:-translate-y-1"><Github size={24} /></a>
                        <a href={resumeData.personal.socials?.linkedin || "#"} className="hover:text-accent transition-transform hover:-translate-y-1"><Linkedin size={24} /></a>
                        <a href={`mailto:${resumeData.personal.email}`} className="hover:text-accent transition-transform hover:-translate-y-1"><Mail size={24} /></a>
                    </div>
                </motion.div>

                {/* Visual / 3D Element Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative h-[400px] lg:h-[600px] flex items-center justify-center z-10"
                >
                    <div className="relative w-full h-full">
                        {/* Abstract Tech Circles */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-accent/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-accent/5 rounded-full blur-xl animate-pulse-glow"></div>

                        {/* Floating Cards (Glassmorphism) */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[20%] right-[10%] p-4 glass-card rounded-xl border-l-4 border-accent"
                        >
                            <div className="text-accent font-bold">Java Expert</div>
                            <div className="text-xs text-gray-400">Core & Enterprise</div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute bottom-[20%] left-[10%] p-4 glass-card rounded-xl border-l-4 border-purple-500"
                        >
                            <div className="text-purple-400 font-bold">React.js</div>
                            <div className="text-xs text-gray-400">Modern Frontend</div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [-15, 15, -15] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute top-[50%] right-[60%] p-4 glass-card rounded-xl border-l-4 border-blue-500"
                        >
                            <div className="text-blue-400 font-bold">SQL Server</div>
                            <div className="text-xs text-gray-400">Database Design</div>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Home;
