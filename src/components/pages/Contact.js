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
            setFormState({ ...formState, [e.target.name]: e.target.value })
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
        <div className="d-flex justify-content-center pt-5">
            <ul>
                <h2 >Contact me:</h2>
                <li>Email <i class="fa-solid fa-envelope"></i>: <a href='#'>darryldamaso@gmail.com</a></li>
                <li>Phone Number <i class="fa-solid fa-square-phone-flip"></i>: 713-277-5859</li>
                <li>LinkedIn <i class="fa-brands fa-linkedin"></i>: <a href='https://www.linkedin.com/in/john-damaso-1bb214211/' target='_blank' rel="noreferrer">https://www.linkedin.com/in/john-damaso</a></li>
                <li>GitHub <i class="fa-brands fa-github"></i>: <a href='https://github.com/JoDamaso' target='_blank' rel="noreferrer">https://github.com/JoDamaso</a></li>
                <li>Discord <i class="fa-brands fa-discord"></i>: JayyDee#5436</li>
            </ul>
            <div className="d-flex justify-content-center">
                <form id="contact-form" onSubmit={handleSubmit} >
                    <h2>Email Me</h2>
                    <div>
                        <label htmlFor="name" class="form-label">Name: </label>
                        {/* onBlur={} waits for them to change focus, for email the conditonal will render after clicked off and is not valid */}
                        <input type="text" className="form-control" name="name" onBlur={handleChange} defaultValue={name} id="inputPassword4" placeholder="Very awesome name goes here!"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" defaultValue={email} name="email" onBlur={handleChange} id="inputEmail4" placeholder="yourEmail@email.com"/>
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" placeholder="Leave me a message..." />
                    </div>
                    {/* conditonally render this div */}
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit">Submit </button>
                </form>
            </div>
        </div>
    )
    // Due to keywords reserved in JavaScript, we need to replace the for attribute in the <label> element to htmlFor, just as class had to be changed to className previously.
};

// name of the function needs to be in the export statement.
export default ContactForm;