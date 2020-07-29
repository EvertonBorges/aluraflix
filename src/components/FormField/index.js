import React from 'react';

function FormField({ label, type, name, value, handleChange }) {
    return (
        <div>
            <label>
                {label}:
                {
                    type === 'textarea' ?
                    <textarea 
                        name={name}
                        value={value}
                        onChange={handleChange}
                    />
                    :
                    <input 
                        type={type}
                        name={name}
                        value={value}
                        onChange={handleChange}
                    />
                }
                
            </label>
        </div>
    );
}

export default FormField;