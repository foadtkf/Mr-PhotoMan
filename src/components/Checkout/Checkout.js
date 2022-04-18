import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

const Checkout = () => {
    const [name,setName]=useState('')
    const [phone,setPhone]=useState('')
    const [address,setAddress]=useState('')
    const handleNameblur=event=>{
        setName(event.target.value)
        }
    const handlePhoneblur=event=>{
            setPhone(event.target.value)
            }
            const handleAddressblur=event=>{
                setAddress(event.target.value)
                }
        const handleSubmitbutton=event=>{
            event.preventDefault()
        }
    return (
        <div className='m-5'>
            <Form className='container w-50 border rounded p-5' onSubmit={handleSubmitbutton}>
            <h2>Place your order</h2>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control onBlur={handleNameblur} type="text" placeholder="Enter Name" required />
  </Form.Group>
            <Form.Group className="mb-3">
    <Form.Label>Package</Form.Label>
    <Form.Control  type="text" placeholder="Enter package" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPhone">
    <Form.Label>Phone</Form.Label>
    <Form.Control onBlur={handlePhoneblur} type="text" placeholder="Enter Phone number" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicAddress">
    <Form.Label>Address</Form.Label>
    <Form.Control onBlur={handleAddressblur} type="text" placeholder="Enter Address" required />
  </Form.Group>
  <Button variant="warning" type="submit">
    Place Order
  </Button>
</Form>
        </div>
    );
};

export default Checkout;