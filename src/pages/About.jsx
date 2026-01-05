import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { User, Globe, MessageSquare, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-heading font-bold mb-12 text-center">
                        About <span className="text-accent">Me</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Personal Details Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="col-span-1 glass-card p-8 rounded-2xl h-fit"
                    >
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <User className="text-accent" /> Personal Details
                        </h3>
                        <div className="space-y-4 text-sm text-gray-300">
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span>Name:</span>
                                <span className="text-white text-right">{resumeData.personal.name}</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span>Location:</span>
                                <span className="text-white text-right">{resumeData.personal.location}</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span>Nationality:</span>
                                <span className="text-white text-right">{resumeData.personal.nationality}</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span>Gender:</span>
                                <span className="text-white text-right">{resumeData.personal.gender}</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span>Marital Status:</span>
                                <span className="text-white text-right">{resumeData.personal.maritalStatus}</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span>Languages:</span>
                                <span className="text-white text-right">{resumeData.personal.languages.join(", ")}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Professional Summary */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="col-span-1 lg:col-span-2 glass-card p-8 rounded-2xl"
                    >
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <CheckCircle className="text-accent" /> Professional Summary
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {resumeData.personal.summary.map((item, index) => (
                                <div key={index} className="flex items-start gap-3 p-3 hover:bg-white/5 rounded-lg transition-colors">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-accent flex-shrink-0"></span>
                                    <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
