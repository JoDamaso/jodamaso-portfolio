import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers'

function ContactForm(props) {
    // ability to initialize the values of the state, we want to clear the input fields on the component loading
    const [formState, setFormState] = useState({ name: '', email: '', message: '', }); // defaultValue = {formState.name}
    const { name, email, message } = formState; // we destructure it instead, defaultValue={name}, etc.
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
                // else nothing is wrong, set back to emptry string
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
                // checking for message and name, which is required to have SOMETHING
            } else {
                setErrorMessage('');
                // else nothing is wrong, set back to emptry string
            }
        }

        
    // This function will sync the internal state of the component formState with the user input from the DOM. 
    // The onChange event listener will ensure that the handleChange function fires whenever a keystroke is typed into the input field for name.
    // We use the spread operator, ...formState, so we can retain the other key-value pairs in this object. Without the spread operator, the formState object would be overwritten to only contain the name: value key pair.
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
        // e.target.name matches the attribute on the input element, thus being dynamic
        
        // console.log('errorMessage', errorMessage);
    }

    console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h2>Contact me</h2>
            <ul>
                <li>Email: <a href='#'>darryldamaso@gmail.com</a></li>
                <li>Phone Number: <a>713-277-5859</a></li>
                <li>LinkedIn: <a href='https://www.linkedin.com/in/john-damaso-1bb214211/' target='_blank'>https://www.linkedin.com/in/john-damaso</a></li>
            </ul>
            <form id="contact-form" onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="name">Name: </label>
                    {/* onBlur={} waits for them to change focus, for email the conditonal will render after clicked off and is not valid */}
                    <input type="text" name="name" onBlur={handleChange} defaultValue={name} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                {/* conditonally render this div */}
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
    // Due to keywords reserved in JavaScript, we need to replace the for attribute in the <label> element to htmlFor, just as class had to be changed to className previously.
};

// name of the function needs to be in the export statement.
export default ContactForm;