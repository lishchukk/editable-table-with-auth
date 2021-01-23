import React from 'react';
import './contacts-page.scss'


const ContactsPage = ({data, onSort, sortField, sort, onDelete, onEdit}) => {

    const sortIcon = sort === 'asc' ? <i className="fas fa-angle-up"></i> : <i className="fas fa-angle-down"></i>;
    let counter = 1;


    return (
        <div className='table-wrapper'>

            <table className="table table-dark">
                <thead>
                <tr >
                    <th scope="col">#</th>
                    <th scope="col" onClick={() => onSort('id')}>
                        ID {sortField === 'id' ? <small>{sortIcon}</small> : null}
                    </th>
                    <th scope="col" onClick={() => onSort('firstName')}>
                        First Name {sortField === 'firstName' ? <small>{sortIcon}</small> : null}
                    </th>
                    <th scope="col" onClick={() => onSort('lastName')}>
                        Last Name {sortField === 'lastName' ? <small>{sortIcon}</small> : null}
                    </th>
                    <th scope="col" onClick={() => onSort('email')}>
                        Email {sortField === 'email' ? <small>{sortIcon}</small> : null}
                    </th>
                    <th scope="col" onClick={() => onSort('phone')}>
                        Phone {sortField === 'phone' ? <small>{sortIcon}</small> : null}
                    </th>
                    <th scope="col">
                        Edit
                    </th>
                </tr>
                </thead>

                {
                    data.map(item => (
                        <tbody>

                            <tr key={item.phone + item.id}>
                                <td>{counter++}</td>
                                <td>{item.id}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>
                                    <button type="button" className="btn btn-outline-warning btn-sm"
                                            onClick={() => onEdit(item.id)}
                                    >
                                        <i className="far fa-edit"></i>
                                    </button>
                                    <button type='button'
                                            className='btn btn-outline-danger btn-sm'
                                            onClick={() => onDelete(item.id)}
                                    >
                                        <i className="far fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                        )
                    )
                }

            </table>
        </div>
    );
};

export default ContactsPage;