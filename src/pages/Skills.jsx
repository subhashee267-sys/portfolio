import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Code, Database, Layout, Terminal } from 'lucide-react';

const Skills = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-heading font-bold mb-16 text-center"
                >
                    Technical <span className="text-accent">Skills</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Web Technologies */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="glass-card p-6 rounded-2xl border-t-4 border-blue-500"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                                <Layout size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Web Technologies</h3>
                        </div>
                        <div className="space-y-4">
                            {resumeData.skills.web.map((skill, idx) => (
                                <motion.div key={idx} variants={item} className="group">
                                    <div className="flex justify-between mb-1">
                                        <span className="text-gray-300 group-hover:text-white transition-colors">{skill}</span>
                                    </div>
                                    <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '90%' }} // Generic high percentage
                                            transition={{ duration: 1, delay: 0.2 }}
                                            className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                                        ></motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Languages */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="glass-card p-6 rounded-2xl border-t-4 border-accent"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-accent/20 rounded-lg text-accent">
                                <Terminal size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Programming</h3>
                        </div>
                        <div className="space-y-4">
                            {resumeData.skills.languages.map((skill, idx) => (
                                <motion.div key={idx} variants={item} className="group">
                                    <div className="flex justify-between mb-1">
                                        <span className="text-gray-300 group-hover:text-white transition-colors">{skill}</span>
                                    </div>
                                    <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: idx === 0 ? '95%' : '85%' }} // Java higher
                                            transition={{ duration: 1, delay: 0.2 }}
                                            className="h-full bg-accent shadow-[0_0_10px_rgba(0,255,255,0.5)]"
                                        ></motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Databases */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="glass-card p-6 rounded-2xl border-t-4 border-purple-500"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                                <Database size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Database</h3>
                        </div>
                        <div className="space-y-4">
                            {resumeData.skills.database.map((skill, idx) => (
                                <motion.div key={idx} variants={item} className="group">
                                    <div className="flex justify-between mb-1">
                                        <span className="text-gray-300 group-hover:text-white transition-colors">{skill}</span>
                                    </div>
                                    <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '80%' }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                            className="h-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                                        ></motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
