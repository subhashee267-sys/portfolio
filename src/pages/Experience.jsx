import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-heading font-bold mb-16 text-center"
                >
                    Professional <span className="text-accent">Experience</span>
                </motion.h2>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-12 space-y-12">
                    {resumeData.projects.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute top-0 left-[-5px] w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_#00FFFF]"></div>

                            <div className="glass-card p-6 md:p-8 rounded-2xl group hover:bg-white/5 transition-all">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">{job.role}</h3>
                                        <p className="text-lg text-gray-300">{job.client}</p>
                                    </div>
                                    <div className="flex flex-col md:items-end text-sm text-gray-400 gap-1">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={14} /> {job.duration}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={14} /> {job.location}
                                        </div>
                                    </div>
                                </div>

                                <div className="text-gray-400 mb-4">
                                    <span className="text-xs font-mono uppercase tracking-wider text-accent/80 border border-accent/20 px-2 py-1 rounded">
                                        Project: {job.title}
                                    </span>
                                </div>

                                <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm md:text-base">
                                    {job.responsibilities.slice(0, 3).map((resp, i) => (
                                        <li key={i}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
