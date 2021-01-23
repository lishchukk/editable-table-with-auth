import React from 'react';
import './inputs-container.css'

const InputsContainer = ({ onChangeInputValue, elemToEdit, isEditMode}) => {


    return (
        <div className='inputs-container'>
            <legend>
                <label>ID:</label>
                <input type="text" className="form-control" placeholder="ID"
                       aria-label="Recipient's username" aria-describedby="basic-addon2"
                       name='id' onChange={onChangeInputValue}  required defaultValue={isEditMode ? elemToEdit.id : null}/>
            </legend>

            <legend>
                <label>First Name:</label>
                <input type="text" className="form-control" placeholder="First Name"
                       aria-label="Recipient's username" aria-describedby="basic-addon2"
                       name='firstName' onChange={onChangeInputValue}  required
                       defaultValue={isEditMode ? elemToEdit.firstName : null}/>
            </legend>
            <legend>
                <label>Last Name:</label>
                <input type="text" className="form-control" placeholder="Last Name"
                       aria-label="Recipient's username" aria-describedby="basic-addon2"
                       name='lastName' onChange={onChangeInputValue}  required
                       defaultValue={isEditMode ? elemToEdit.lastName : null}/>
            </legend>
            <legend>
                <label>Email:</label>
                <input type="text" className="form-control" placeholder="Email"
                       aria-label="Recipient's username" aria-describedby="basic-addon2"
                       name='email' onChange={onChangeInputValue}  required
                       defaultValue={isEditMode ? elemToEdit.email : null}/>
            </legend>
            <legend>
                <label>Phone:</label>
                <input type="text" className="form-control" placeholder="Phone"
                       aria-label="Recipient's username" aria-describedby="basic-addon2"
                       name='phone' onChange={onChangeInputValue}  required
                       defaultValue={isEditMode ? elemToEdit.phone : null}/>
            </legend>
        </div>
    );
};

export default InputsContainer;