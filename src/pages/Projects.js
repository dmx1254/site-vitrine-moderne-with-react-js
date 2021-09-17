import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Project from '../components/Project';

export const project1 = () =>{
    return (
        <main>
            <div className="project">
               <Navigation />
               <Logo />
               <Project projectNumber = {0}/>
               <ButtonsBottom left = {"/"} right = {"/project2"}/>
            </div>
        </main>
    )
}

export const Project2 = () =>{
    return (
        <main>
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber = {1}/>
                <ButtonsBottom left = {"/project1"} right = {"/project3"}/>
            </div>
        </main>
    )
}

export const Project3 = () =>{
    return (
        <main>
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber = {2}/>
                <ButtonsBottom left = {"/project2"} right = {"/project4"}/>
            </div>
        </main>
    )
}

export const Project4 = () =>{
    return (
        <main>
            <div className="project">
                <Navigation />
                <Logo />
                <Project projectNumber = {3}/>
                <ButtonsBottom left = {"/project3"} right = {"/contacts"}/>
            </div>
        </main>
    )
}