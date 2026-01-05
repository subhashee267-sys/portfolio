import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-heading font-bold mb-16 text-center"
                >
                    Academic <span className="text-accent">Credentials</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resumeData.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all group"
                        >
                            <div className="p-4 bg-primary rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-accent/50">
                                <GraduationCap size={40} className="text-white group-hover:text-accent transition-colors" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 font-heading">{edu.degree}</h3>
                            <p className="text-gray-400 mb-6 flex-grow">{edu.institution}</p>

                            <div className="w-full pt-4 border-t border-white/10">
                                <span className="text-2xl font-bold text-accent">{edu.score.split(': ')[1]}</span>
                                <span className="block text-xs text-gray-500 uppercase tracking-widest mt-1">
                                    {edu.score.split(': ')[0]}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
