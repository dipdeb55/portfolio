import React, { useState, useRef } from 'react';
import './Header.css'
import dip from '../assets/image/dip.jpg'
import car from '../assets/image/CarHouse.PNG'
import drone from '../assets/image/DroneM.PNG'
import muscle from '../assets/image/Muscle.PNG'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Header = () => {
    const form = useRef();

    const [result, setResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9nzwttg', 'template_kqrq5xi', form.current, 'BMNuEDDsKs1Usl43y')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setResult(true)
        toast.success('Your Message sent successfully. I will contact you soon')
    };


    return (
        <div className='header-container'>
            <div>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1  justify-items-center items-center'>
                    <article className=''>
                        <h2 className='text-6xl font-bold '>Hi <br /><span className='text-amber-500' >I am Dip.</span></h2>
                        <h2 className="text-2xl text-teal-800  pt-2">Web Developer</h2>

                        <div className='flex shrink sm:shrink-1 px-0 mx-0 pt-2'>
                            <p>Technologies: </p>
                            <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img
                                src="https://img.shields.io/badge/-JavaScript-F7DF1E?logo=JavaScript&logoColor=333333" alt='' /></a>
                            <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img
                                src="https://img.shields.io/badge/-CSS3-1572B6?logo=CSS3" alt='' /></a>
                            <a target="_blank" href="https://reactjs.org/"><img className='react'
                                src="https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB" alt='' /></a>
                            <a target="_blank" href="https://www.heroku.com/home"><img
                                src="https://img.shields.io/badge/Heroku-430098?style=flat&logo=heroku&logoColor=white" alt='' /></a>
                            <img className='mongo' src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="" />
                            <img className='mongo' src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="" />
                        </div>
                    </article>
                    <div>
                        <img className='rounded-full pt-3 w-40' src={dip} alt="" />
                    </div>
                </div>
                <a href='https://drive.google.com/file/d/18yViV7Dgn5mGD7FAKwjXIJMtIi80AQyB/view?usp=sharing' download='Resume'> <button type="submit" class="btn btn-outline-secondary ml-52 mb-3 font-semibold"> <i class="bi bi-cloud-download"></i> Resume</button></a>
            </div>
            <div>
                <h2 className='text-3xl text-center font-bold'>About Me </h2>
                <div className='grid grid-cols-2 gap-3 justify-items-center m-5'>
                    <h2 className='text-4xl text-bold text-right' >My Name is Dibbendu Deb Dip. I am a React Js Developer</h2>
                    <p>I am a Software Engineer and passionate about problem solving. I am always intrigued by the complexity and creativity of programming. Behind something so simple, like a button, takes a lot of planning and careful integration. Thus, I decided to take a leap of faith and pivoted my career toward Software Engineering. It was quite a challenging journey, but I loved every moment of it.I enjoy the entire process of building intuitive user interfaces from designing and building a road map of where I want to go to being able to hit those goals and have a product I'm proud of.</p>
                </div>
            </div>
            <div>
                <h2 className="text-3xl text-center font-bold"> Projects</h2>
                <div className='grid sm:grid-cols-1 lg:grid-cols-2 justify-items-center'>
                    <div class="card w-50 m-5">
                        <img src={car} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h2 className="text-xl font-bold text-cyan-700">CarHouse</h2>
                            <p class="card-text">Car warehouse managing website.</p>
                            <p>Technologies used: React,Bootstrap, NodeJs, MongoDb, Firebase,React Icons </p>
                            <a href="https://assignment-11-2488d.web.app/"> <button type="button" class="btn btn-outline-dark mt-2"> Visit</button></a>
                        </div>
                    </div>
                    <div class="card w-50 m-5">
                        <img src={drone} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h2 className="text-xl font-bold text-cyan-700">Drone Master</h2>
                            <p class="card-text">Drone parts manufecturing website.</p>
                            <p>Technologies used: React, NodeJs, MongoDb, Firebase, Stripe, TailwindCss, DaisyUi, Heroku</p>
                            <a href="https://flying-drone-eb0c2.web.app/"> <button type="button" class="btn btn-outline-dark mt-2"> Visit</button></a>
                        </div>
                    </div>
                    <div class="card w-50 m-5">
                        <img src={muscle} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h2 className="text-xl font-bold text-cyan-700">Build Muscle</h2>
                            <p class="card-text">Personal fitness trainer website</p>
                            <p>Technologies used: React, Bootstrap, Firebase</p>
                            <a href="https://assignment-10-8761e.web.app/"> <button type="button" class="btn btn-outline-dark mt-2"> Visit</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-3xl text-center font-bold"> Contact Me</h2>

                <form className='w-50 mx-auto' ref={form} onSubmit={sendEmail}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Phone</label>
                        <input type="text" name='phone' class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Message</label>
                        <input type="text" name='message' class="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Header;