import React, {useState} from 'react'
import { GiSpikedBall } from "react-icons/gi";
import {Link, useNavigate} from 'react-router-dom'

import { toast } from 'react-toastify';

export default function SignUp() {

  const [formData,setFormData]=useState({});
  const [loading,setLoading]=useState(false);

  const navigate=useNavigate();

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value.trim()});
  }

  // const handleSubmit=async(e)=>{
  //   e.preventDefault();
  //   if(!formData.name || !formData.username || !formData.email || !formData.password || !formData.pwd)
  //   {
  //     return toast.error('Please fill out all fields!');
  //   }
  //   if(formData.password !== formData.pwd)
  //   {
  //     return toast.error('Password does not match!');
  //   }
  //   try{
  //       setLoading(true);
  //       const res=await fetch('/api/user/signup',{
  //       method:'POST',
  //       headers:{'Content-Type':'application/json'},
  //       body:JSON.stringify(formData),
  //     });
  //     const data=await res.json();  
  //     setLoading(false);
  //     if (!res.ok) 
  //     {
  //       return toast.error(data);
  //     }   
  //     toast.success(data);
  //     navigate('/signin');
  //   }
  //   catch(err){
  //     return toast.error(err.message);
  //   }
  // }

  return (
    <section className='flex items-center justify-evenly full-screen-bg p-20'> 
      <div>
        <h2 className='text-4xl font-extrabold mb-8'>TALK WITH A NARRATIVE <br />INTELLIGENCE EXPERT</h2>
        <ul className='flex flex-col gap-2'>
          <li className='flex text-xl gap-2'><GiSpikedBall />View of demo of our Constellation Platform</li>
          <li className='flex text-xl gap-2'><GiSpikedBall />Our application uses advanced NLP to understand and<br /> respond to user inputs in a conversational manner.</li>
          <li className='flex text-xl gap-2'><GiSpikedBall />Handles customer support, provide recommendations, and<br /> even assist with the image designing process.</li>
          <li className='flex text-xl gap-2'><GiSpikedBall />Offering advanced AI tools like a chatbot and an image<br /> designer sets the website apart from competitors &<br/> enhances the overall value proposition.</li>
        </ul>
      </div>
      <div>
        <form className='flex flex-col gap-4 m-16 p-10 outline rounded-xl'>
          <input type="email" placeholder='E-mail address' className='w-[300px] border border-slate-600 p-3 rounded-lg' id='email' onChange={handleChange} />
          <input type="password" placeholder='Password' className='border border-slate-600 p-3 rounded-lg' id='password' onChange={handleChange} />
          <button type='submit' className='text-white bg-[#6531e0] text-lg outline rounded-full p-2 px-5 hover:text-black'>Sign Up</button>
          
          <div className='flex gap-2 items-center'>
            <p className='text-black text-sm'>Don't have an account?</p>
            <Link to='/signup'>
              <span className='text-[#6531e0] text-sm hover:underline'>Sign up</span>
            </Link>
          </div>
        </form>
      </div>
    </section>
  )
}