import React from 'react'
import { useForm } from 'react-hook-form'

export default function SearchProduct(props) 
{
    let {register, handleSubmit , formState}= useForm()
    function collectFormData (data)
    {
        console.log(data);
        props.searchProductsByNameFunction(data.productName)
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit(collectFormData)}>
            <div className="mb-3 d-flex">
                <input type="text" className="form-control" placeholder='Enter product name'
                {...register("productName", {required:true,message:"username is required"})}/>
                {formState.errors?.productName?alert("product name is require"):""}
                <input type="submit" className="btn btn-primary"/>
            </div>
        </form>
    </div>
  )
}
