import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

const styles = {
    form: {
        display: 'flex',
        flexFlow: 'row wrap',
        gap: 20,
    },
    info: {
        flex: '1 1 40%',
    },
    message: {
        flex: '1 1 80%',
    }
}

function ContactForm() {
    // Form state, initially empty
    const [formState, setFormState] = useState(
        {
            name: '',
            email: '',
            message: '',
        }
    );
    
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = ({ target }) => {
        // Update form state
        let newFormState = {...formState};
        newFormState[target.name] = target.value;
        setFormState(newFormState);

        // Clear error message when valid email is entered
        if (validateEmail(newFormState.email)) {
            setErrorMessage('');
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Check for valid email
        if (!validateEmail(formState.email)) {
            setErrorMessage('Email is invalid');
            return;
        }

        // Confirm message sent and reset form
        alert(`Message sent!`);
        setFormState(
            {
                name: '',
                email: '',
                message: '',
            }
        )
    };

    return (
        <article>
            <form style={styles.form}>
                <input
                    value={formState.email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                    style={styles.info}
                />
                <input
                    value={formState.name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                    style={styles.info}
                />
                <input
                    value={formState.message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Message"
                    style={styles.message}
                />
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </article>
    );
}

export default ContactForm;
