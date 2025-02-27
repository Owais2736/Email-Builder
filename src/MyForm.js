import React, { useState } from 'react';

function MyForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                  type="text"
                  name="firstname"
                  placeholder='First Name'
                  value={formData.username}
                  onChange={handleChange}
                />
            </div>
            <div>
                <input
                  type="text"
                  name="lastname"
                  placeholder='Last Name'
                  value={formData.password}
                  onChange={handleChange}
                />
            </div>
            <div>
                <input
                  type="text"
                  name="message"
                  placeholder='Message'
                  value={formData.password}
                  onChange={handleChange}
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

export default MyForm;
