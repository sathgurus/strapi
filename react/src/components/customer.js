import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import { configData } from '../config/config'


export function Customer() {

    const [data, setData] = useState([]);
    const loadData = async () => {
        console.log('Base URL', configData.Base_URL);
        const response = await axios.get(configData.Base_URL + '/api/customers');

        // const response = await axios.get('http://localhost:1337/api/customers');
        setData(response.data.data);
        console.log('response', response.data.data);
    }
    useEffect(() => {
        loadData();

    }, []);


    return (
        
            <div className='container-fluid'>

                <h1>Customer Table</h1>
                <Link to='/additem'>
                    <button className='btn btn-danger mt-3'>Order Product</button>
                </Link>

                <table className='table mt-3 table-bordered'>
                    <thead>
                        <tr className='bg-info text-light'>
                            <th>id</th>
                            <th>name</th>
                            <th>brand</th>
                            <th>Email</th>
                            <th>Website</th>
                            <th>Reference</th>
                            <th>Billing Address</th>
                            <th>Shipping Address</th>
                            <th>customer notes</th>
                            <th>phone number</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data.map((customer, index) => {

                            return (
                                <tr key={customer.id}>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{customer.attributes.customer_name}</td>
                                    <td>{customer.attributes.company_name}</td>
                                    <td>{customer.attributes.Email}</td>
                                    <td>{customer.attributes.Website}</td>
                                    <td>{customer.attributes.Reference}</td>
                                    <td>
                                        <p>{customer.attributes.Billing_Address.name1},</p>
                                        <p>{customer.attributes.Billing_Address.address.city1},</p>
                                        <p>{customer.attributes.Billing_Address.address.state1},</p>
                                        <p>{customer.attributes.Billing_Address.address.pincode1},</p>
                                        <p>{customer.attributes.Billing_Address.address.country1}</p>

                                    </td>
                                    <td>
                                        <p>{customer.attributes.Shipping_Address.name2}</p>
                                        <p>{customer.attributes.Shipping_Address.address.city2},</p>
                                        <p>{customer.attributes.Shipping_Address.address.state2},</p>
                                        <p>{customer.attributes.Shipping_Address.address.pincode2},</p>
                                        <p>{customer.attributes.Shipping_Address.address.country2}</p>

                                    </td>
                                    <td>{customer.attributes.Customer_notes}</td>
                                    <td>{customer.attributes.Mobile_number}</td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>


            </div>

    
    );
}
