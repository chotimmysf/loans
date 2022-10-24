import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
  return (
    <Link to='/client/add' className='btn btn-success btn-block'>
        <i className="fas fa-plus"/> Add New Client</Link>
  )
}
