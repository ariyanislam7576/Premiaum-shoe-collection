import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';


const AddProduct = () => {

    const { register, handleSubmit, reset, } = useForm();
    const onSubmit = data => {
        axios.post('https://immense-crag-91398.herokuapp.com/addproduct',data)
         .then(res => {
        if(res.data){
            alert('Product added')
            reset()
        }
    })
    }
    return (
        <div className='my-5'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Product name' />
                 <br /> <br />
                <input {...register("img" ,{required: true})} placeholder='product image url' /> 
                <br /> <br />
                <input type="number" {...register("price")} placeholder='Price' /> 
                <br /> <br />
                <textarea {...register("description", { required: true, maxLength: 2000 })} placeholder='Product description' /> <br /> <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;