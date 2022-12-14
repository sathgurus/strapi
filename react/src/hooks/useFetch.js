import React from 'react';
import {useState,useEffect} from 'react'

export default function useFetch() {

    const useFetch=(url)=>{
        const [data,setData]=useState('');
        const [error,setError]=useState('');
        const [loading,setLoading]=useState('');

        useEffect(()=>{
            const fetchData=async()=>{
                setLoading(true)

                try{
                    const res = await fetch(url)
                    setLoading(false)
                }catch(error){
                    setError(error)
                    setLoading(false)
                }
            }
            fetchData()
        },[url])
        return {loading,error,data}
    }
  return (
    <div>
      
    </div>
  );
}
