import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import DynamicText from '../components/DynamicText';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';
import { motion } from 'framer-motion';

const Home = () => {
    const variants ={
        initial: {
            opacity: 0,
            transition: {duration: 0.5},
            x: 100,
        },

        animate: {
            opacity: 1,
            x: 0,
        },

       exit: {
            opacity: 0,
            transition: { duration: 0.3},
            x: -100,
        }
    }
    return (
    <main>
        
        <motion.div className = "home"
        initial = "initial"
        animate = "animate"
        exit = "exit"
        variants = {variants}
        >
            <Navigation />
            <SocialNetwork />
            <div className="home-main">
                <div className="main-content">
                    <h1>SY msypro</h1>
                    <h2>
                        <DynamicText />
                    </h2>
                </div>
                <ButtonsBottom  right = {"/project1"}/>
            </div>
        </motion.div>
    </main>
    );
};

export default Home;