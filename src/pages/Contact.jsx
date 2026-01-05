import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MapPin, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { resumeData } from '../data/resume';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Replace these with your actual Service ID, Template ID, and Public Key from EmailJS
        const serviceID = 'service_v1kcxhj';
        const templateID = 'template_hsjcabr';
        const publicKey = '0Kc-jZ3yfdyN0GdlN';

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                setStatus('error');
                console.log(error.text);
                if (error.text.includes("The public key is required")) {
                    alert("EmailJS Error: Missing Public Key. Please add it to src/pages/Contact.jsx");
                } else {
                    alert("EmailJS Error: " + error.text);
                }
            });
    };

    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-heading font-bold mb-16 text-center"
                >
                    Get In <span className="text-accent">Touch</span>
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="glass-card p-8 rounded-2xl border-l-4 border-accent">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <a href={`mailto:${resumeData.personal.email}`} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                    <div className="p-3 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-primary transition-all">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                                        <p className="text-lg">{resumeData.personal.email}</p>
                                    </div>
                                </a>

                                <a href={`tel:${resumeData.personal.phone}`} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                                    <div className="p-3 bg-accent/10 rounded-lg text-accent group-hover:bg-accent group-hover:text-primary transition-all">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">Phone</p>
                                        <p className="text-lg">{resumeData.personal.phone}</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 text-gray-300 group">
                                    <div className="p-3 bg-accent/10 rounded-lg text-accent">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">Location</p>
                                        <p className="text-lg">{resumeData.personal.location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Message Box Placeholder or Map */}
                        <div className="glass-card p-8 rounded-2xl flex items-center justify-center min-h-[200px] text-center">
                            <div>
                                <MessageSquare size={48} className="mx-auto text-gray-600 mb-4" />
                                <p className="text-gray-400">"Always open to discussing new projects, creative ideas or opportunities to be part of your visions."</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-2xl"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="Your Name"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:bg-white/10 transition-colors"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="Your Email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:bg-white/10 transition-colors"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:bg-white/10 transition-colors"
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    rows="4"
                                    placeholder="Message"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:bg-white/10 transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-accent text-primary font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all flex items-center justify-center gap-2"
                            >
                                {status === 'sending' ? 'Sending...' : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </button>

                            {status === 'success' && <p className="text-green-400 text-center">Message sent successfully!</p>}
                            {status === 'error' && <p className="text-red-400 text-center">Failed to send message. Please try again.</p>}
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
