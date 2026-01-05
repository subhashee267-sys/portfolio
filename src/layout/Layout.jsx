import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="min-h-screen flex flex-col relative bg-primary text-textLight overflow-hidden">
            {/* Background Elements */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[120px] animate-float opacity-30"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] animate-float opacity-30" style={{ animationDelay: '-3s' }}></div>
                <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-purple-600/10 rounded-full blur-[100px] animate-pulse-glow"></div>
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
            </div>

            <Navbar />

            <main className="flex-grow pt-20 z-10 relative">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
