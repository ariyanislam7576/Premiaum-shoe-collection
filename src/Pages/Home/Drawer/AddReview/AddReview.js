import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddReview = () => {

    const { register, handleSubmit, reset, } = useForm();
    const onSubmit = data => {
        axios.post('https://immense-crag-91398.herokuapp.com/addreview',data)
         .then(res => {
        if(res.data){
            alert('Review added')
            reset()
        }
    })
    }
    return (
        <div className='my-5'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder='Your name' />
             <br /> <br />
            <input {...register("img" ,{required: true})} placeholder='Your image url' /> 
            <br /> <br />
            <input type="number" {...register("rating",{ required: true, maxLength: ">5" })} placeholder='Rating'  /> 
            <br /> <br />
            <textarea {...register("review", { required: true, maxLength: 2000 })} placeholder='Review' /> <br /> <br />
            <input type="submit" />
        </form>
    </div>
    );
};

export default AddReview;