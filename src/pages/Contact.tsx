import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import * as Yup from "yup";
import { Formik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';

import Testimonial from '../components/Testimonial';
import ContactInfo from '../components/ContactInfo';
import config from '../config';
import { ContactValuesData } from '../types';
import HeaderText from '../components/HeaderText';

const validationSchema = Yup.object({
    name: Yup.string().required("Your name is required!"),
    email: Yup.string().email("Invalid email address").required("The email is required!"),
    message: Yup.string().required("The project brief message is required!"),
});

const Contact: React.FC = () => {
    emailjs.init(config.USER_ID);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const openMail = () => {
        window.open('mailto:www.phanordpicsouroberto11@gmail.com?subject=Services&body=Salut Roberto');
    }

    const handleSubmitMessage = async (values: ContactValuesData) => {
        try {
            setIsLoading(true);
            const { name, email, message } = values;
            
            const templateParams = {
                from_name: name, email, message,
            }
            
            await emailjs.send(config.SERVICES_ID, config.TEMPLATES_ID, templateParams, config.USER_ID)
                .then(async (response) => {
                    await window.alert(alert);
                    console.log('SUCCESS!', response.status, response.text);
                    
                    setIsLoading(false);
                }).catch((err) => {
                    console.log('FAILED...', err);
                    setIsLoading(false);
                });
            
            values.name = "";
            values.email = "";
            values.message = "";
            toast.success(`Your message has been sent successfully \n Thank you for contacting me`);
        } catch (error) {
            setIsLoading(false);
            toast.error(`Contactthing went wrong, please try again!`);
        }
    }
    
    return (
        <div id="contact" className="">
            <section className="py-10 px-6 bg-gray-900 sm:py-16 lg:py-24 text-white">
                <Toaster />
                
                <HeaderText
                    subTitile='Contact'
                    title='Contact Me'
                    text='I will you with fingind a solution and solved you problems, I use process design to create digital products.Besids that also their Business.'
                />
                
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
                        <div className="flex flex-col justify-between lg:py-5">
                            <div>
                                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-5xl">It’s time to build Contactthing exciting!</h2>
                                
                                <div className="py-8 space-y-8">
                                    <ContactInfo
                                        handleClick={() => openMail()} 
                                        caption='Email me'
                                        text='robertophanord13@gmail.com'
                                    >
                                        <svg className="flex-shrink-0 w-10 h-10 text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </ContactInfo>
                                    
                                    <ContactInfo
                                        handleClick={() => window.open('tel:+18094298594')}
                                        caption='Call me'
                                        text='(809) 429-8594'
                                    >
                                        <svg className="flex-shrink-0 w-10 h-10 text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1"
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                    </ContactInfo>
                                </div>

                                <img className="relative max-w-xs mx-auto -mb-16 md:hidden -z-0" src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line-mobile.svg" alt="" />

                                <img className="hidden w-full translate-x-24 translate-y-8 md:block" src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line.svg" alt="" />
                            </div>
                            
                            <div className="hidden md:mt-auto md:block">
                                <Testimonial />
                            </div>
                        </div>

                        <div className="lg:pl-12 my-auto z-0">
                            <div className="overflow-hidden bg-white rounded-md">
                                <div className="p-6 sm:p-10">
                                    <h3 className="text-3xl font-semibold text-black">Send me a message</h3>
                                    <p className="mt-4 text-base text-gray-600">If you have decided to work with me then, please do not hesitate to contact me.</p>

                                    <Formik
                                        validationSchema={validationSchema}
                                        initialValues={{
                                            name: "",
                                            email: "",
                                            message: ""
                                        }}
                                        onSubmit={(values) => handleSubmitMessage(values)}
                                    >
                                        {({ values, errors, handleChange, handleSubmit, handleBlur, touched }) => (
                                            <form
                                                onSubmit={handleSubmit} 
                                                className="mt-4"
                                            >
                                                <div className="space-y-6">
                                                    <div>
                                                        <label htmlFor="" className="text-base font-medium text-gray-900"> Your name </label>
                                                        <div className="mt-2.5 relative">
                                                            <input
                                                                type="text"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.name}
                                                                name="name"
                                                                id="name"
                                                                placeholder="Enter your full name"
                                                                className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-secondary focus:border-secondary caret-secondary"
                                                            />
                                                            {errors.name && touched.name && <p className='text-red-700'>{errors.name}</p>}
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label htmlFor="" className="text-base font-medium text-gray-900"> Email address </label>
                                                        <div className="mt-2.5 relative">
                                                            <input
                                                                type="text"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.email}
                                                                name="email"
                                                                id="email"
                                                                placeholder="Enter your full name"
                                                                className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-secondary focus:border-secondary caret-secondary"
                                                            />
                                                            {errors.email && touched.email && <p className='text-red-700'>{errors.email}</p>}
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label htmlFor="" className="text-base font-medium text-gray-900"> Project brief </label>
                                                        <div className="mt-2.5 relative">
                                                            <textarea
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.message}
                                                                name="message"
                                                                id="message"
                                                                placeholder="Enter your project brief"
                                                                className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:ring-secondary focus:border-secondary caret-secondary"
                                                                rows={4}
                                                            ></textarea>
                                                            {errors.message && touched.message && <p className='text-red-700'>{errors.message}</p>}
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <button type="submit"
                                                            className="inline-flex items-center justify-center w-full px-4 py-4 font-semibold text-white transition-all duration-200 hover:bg-primary border border-transparent rounded-md focus:outline-none bg-secondary gap-x-3">
                                                            <p className="text-lg">Contact Me</p>
                                                            {isLoading && (<div
                                                                className="h-4 w-4 rounded-full border-l-2 border-t-2 border-white border-right-secondary animate-spin"
                                                            />)}
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>

                        <div className="md:hidden">
                            <Testimonial />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;