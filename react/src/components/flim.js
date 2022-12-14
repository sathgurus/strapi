import React from 'react';
import { useState,useEffect } from 'react';
import { configData } from '../config/config';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'

export function Flim() {

    const [data,setData]=useState([]);

    const loadData = async () => {

        const response = await axios.get(configData.Base_URL + '/api/flims?populate=*')
        
            setData(response.data.data);
        console.log('response', data);

    }

    useEffect(() => {
        loadData();

    }, []);


  return (
    <div className='container'>

        <h1>Flim Reviews</h1>
        <table className='table table-bordered mt-5'>
            <thead>
            <tr className='bg-success'>
                <th>id</th>
                <th>Movie_Name</th>
                <th>Reviews</th>
                <th>Reviewer</th>
                
            </tr>
            </thead>
            <tbody>
                {data.map((flim,index)=>{
                    
                    const review = flim.attributes.reviews.data;

                    // let demo=review.map(function (val){
                    //     let newval=[val.attributes.review,val.attributes.reviewer];
                    //     let obj={id:val.id,newval};
                    //     return obj;
                    // })
                
                    console.log("review",review)
                   
    
                    
                    return(
                        <tr key={flim.id}>
                            <td scope='row'>{index+1}</td>
                            <td>{flim.attributes.Movie_Name}</td>
                            <td>
                            
                            {review.map((value)=>{ 
                                return (
                               
                                <p>{value.attributes.review}</p>
                               
                                );
                                
                            })}
                             </td>
                             <td>
                            
                            {review.map((value)=>{ 
                                
                                return(
                                
                                <p>{value.attributes.reviewer}</p>

                                );
                            
                            })}
                            
                            </td>

                                
                            
                

                             
                    
                        </tr>
                    )
                }
                )}
            </tbody>
        </table>


      
    </div>
  );
}
