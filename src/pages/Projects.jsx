import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { ExternalLink, Layers, Server, Code } from 'lucide-react';

const Projects = () => {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-heading font-bold mb-16 text-center"
                >
                    Project <span className="text-accent">Experience</span>
                </motion.h2>

                <div className="space-y-20">
                    {resumeData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-accent/30 transition-colors duration-500"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                                {/* Left Info Panel */}
                                <div className="lg:col-span-4 bg-black/20 p-8 border-r border-white/5">
                                    <div className="flex flex-col h-full justify-between">
                                        <div>
                                            <h3 className="text-2xl font-bold font-heading text-white mb-2">{project.title}</h3>
                                            <p className="text-accent text-sm font-mono mb-6">{project.role}</p>

                                            <div className="space-y-4 text-sm text-gray-400">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-1 h-1 bg-white rounded-full"></span>
                                                    <span className="font-semibold text-gray-300">Client:</span> {project.client}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="w-1 h-1 bg-white rounded-full"></span>
                                                    <span className="font-semibold text-gray-300">Duration:</span> {project.duration}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="w-1 h-1 bg-white rounded-full"></span>
                                                    <span className="font-semibold text-gray-300">Location:</span> {project.location}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="w-1 h-1 bg-white rounded-full"></span>
                                                    <span className="font-semibold text-gray-300">Team Size:</span> {project.teamSize}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-white/10">
                                            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                                                <Layers size={14} className="text-accent" /> Tech Stack
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.techStack.map((tech, i) => (
                                                    <span key={i} className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Content Panel */}
                                <div className="lg:col-span-8 p-8 lg:p-12 relative overflow-hidden">
                                    {/* Decorative bg */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

                                    <div className="relative z-10">
                                        <h4 className="text-xl font-bold text-white mb-4">Project Overview</h4>
                                        <p className="text-gray-300 leading-relaxed mb-8">
                                            {project.description}
                                        </p>

                                        <h4 className="text-xl font-bold text-white mb-4">Roles & Responsibilities</h4>
                                        <ul className="space-y-3">
                                            {project.responsibilities.map((resp, i) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-400 group">
                                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent group-hover:shadow-[0_0_8px_#00FFFF] transition-all"></span>
                                                    <span className="group-hover:text-gray-200 transition-colors">{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
