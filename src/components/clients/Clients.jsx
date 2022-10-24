import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Clients extends Component {
  render() {
    const clients = [{
        id: '12346',
        firstName: 'Kevin',
        lastName: 'Swanson',
        email: 'kswanson@mail.com',
        phone: '123-133-6678',
        balance: '40.59'
    },
    {
        id: '11340',
        firstName: 'Shauna',
        lastName: 'Vayne',
        email: 'shavayne@mail.com',
        phone: '928-329-1010',
        balance: '147'
    },
    {
        id: '23657',
        firstName: 'Nezuko',
        lastName: 'Kitagawa',
        email: 'nekitagawa.com',
        phone: '451-657-2911',
        balance: '79.72'
    },
    {
        id: '24361',
        firstName: 'Mike',
        lastName: 'Tyson',
        email: 'tysonm.com',
        phone: '938-238-1238',
        balance: '138.83'
    }]
    if(clients) {
        return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
                    <h2>
                        <i className="fas fa-users"></i>Clients{' '}</h2>
                </div>
            </div>

            <table className="table table-striped">
                <thead className='thead-inverse'>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Balance</th>
                        <th>Client Details</th>
                    </tr>
                </thead>
                <tbody>{clients.map(client => (
                    <tr key={client.id}>
                        <td>{client.firstName} {client.lastName}</td>
                        <td>{client.email}</td>
                        <td>${parseFloat(client.balance).toFixed(2)}</td>
                        <td>
                            <Link to={`/client/${client.id}`} className='btn btn-info btn-sm'>
                                <i className='fas fa-arrow-circle-right'></i>{client.firstName}'s Details
                            </Link>
                        </td>
                    </tr>
                ))}</tbody>
            </table>
        </div>
        )
    }else{
        return <h1>Loading...</h1>
    }
  }
}
