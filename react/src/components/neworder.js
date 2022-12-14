import React from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import './order.css'
import { configData } from '../config/config'

export default function Neworder() {

    const handle=async(event)=>{
        event.preventDefault();


    let name=document.getElementById('name').value;
    let brand=document.getElementById('brand').value;
    let email=document.getElementById('email').value;
    let website=document.getElementById('website').value;
    let ref=document.getElementById('ref').value;
    let notes=document.getElementById('notes').value;
    let number=document.getElementById('number').value;

    let name1=document.getElementById("name1").value;
    let city1=document.getElementById("city1").value;
    let state1=document.getElementById("state1").value;
    let pincode1=document.getElementById("pincode1").value;
    let country1=document.getElementById("country1").value;
    
  

    let name2=document.getElementById("name2").value;
    let city2=document.getElementById("city2").value;
    let state2=document.getElementById("state2").value;
    let pincode2=document.getElementById("pincode2").value;
    let country2=document.getElementById("country2").value;


    const bill={name1:name1,address:{city1:city1,state1:state1,pincode1:pincode1,country1:country1}}

      const ship={name2:name2,address:{city2:city2,state2:state2,pincode2:pincode2,country2:country2}}


    const details={  "data":{
      customer_name:name,
      company_name:brand,
        Email:email,
        Website:website,
        Reference:ref,
        Billing_Address:bill,
        Shipping_Address:ship,
        Customer_notes:notes,
        Mobile_number:number

    }
  }
    // console.log('details',details )

         axios.post(configData.Base_URL + '/api/customers',details)
        .then(function (res){
            if(res.error){
                alert('Error');
                window.location.reload();
                
                
            }
            else{
                alert('Added');
                window.location.href = "./";
                
                
                
                
            }
        })
        .catch(function (err){
            alert(err);
            
        })
        
     
}

  return (
    <body>
        <div className='container'>
            <h1 className='text-center'>Order Table</h1>
            <form className='form' onSubmit={handle}>
                <div className='col-lg-12 mt-5 d-flex'>
              
                <div className='col-lg-3 mt-3 '>
                <label>Fullname</label><br></br>
                <input type='text' className='name mt-2' id='name' name='name'/><br></br>
                <label className='mt-2'>Brand</label><br></br>
                <input type='text' className='brand' id='brand' name='brand'/><br></br>
                <label className='mt-2'>Email</label><br></br>
                <input type='email' className='email mt-2' id='email' name='email'/><br></br>
                <label className='mt-2'>Website</label><br></br>
                <input type='text' className='website mt-2' id='website' name='website'/><br></br>
                <label className='mt-2'>Reference</label><br></br>
                <input type='text'  className='ref mt-2' id='ref' name='ref'/><br></br>
                </div>
                <div className='col-lg-3 mt-2 '>
                <label className='mt-2'>Billing Address :</label><br></br>
                <label>name</label><br></br>
                <input type='text' className='address mt-2' id='name1' name='bill'/><br></br>
                <label>city</label>
                <input type='text' className='address mt-2' id='city1' name='bill'/><br></br>
                <label>state</label>
                <input type='text' className='address mt-2' id='state1' name='bill'/><br></br>
                <label>pincode</label>
                <input type='number' className='address mt-2' id='pincode1' name='bill'/><br></br>
                <label>country</label>
                <input type='text' className='address mt-2' id='country1' name='bill'/><br></br>
                
                </div>
                <div className='col-lg-3 '>
                <label className='mt-2'>Shipping Address</label><br></br>
                <label>name</label><br></br>
                <input type='text' className='address mt-2' id='name2' name='bill'/><br></br>
                <label>city</label>
                <input type='text' className='address mt-2' id='city2' name='bill'/><br></br>
                <label>state</label>
                <input type='text' className='address mt-2' id='state2' name='bill'/><br></br>
                <label>pincode</label>
                <input type='number' className='address mt-2' id='pincode2' name='bill'/><br></br>
                <label>country</label>
                <input type='text' className='address mt-2' id='country2' name='bill'/><br></br>
                

                </div>
                <div className='col-lg-3'>
                <label className='mt-2'>Customer Notes</label><br></br>
                <input type='text' className='notes mt-2' id='notes' name='notes'/><br></br>
                <label className='mt-2'>Mobile Number</label><br></br>
                <input type='number' className='number mt-2' id='number' name='number'/>
                <input type='submit' value='submit' className='btn btn-dark  mt-5 ml-5'/>
                </div>
                
            </div>
        
            </form>
        
      
        </div>
    </body>
  );
}

