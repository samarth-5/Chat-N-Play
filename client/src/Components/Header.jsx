import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import rocket from '/rocket.svg'
import {useSelector, useDispatch} from 'react-redux';
import { signOutSuccess } from '../redux/user/userSlice.js';

import { toast } from 'react-toastify';

export default function Header() {

  const dispatch=useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  const navigate=useNavigate();

  const handleSignOut=async()=>{
    try{
        const res=await fetch('/api/user/signout', {
            method: 'POST',
        });
        const data=await res.json();
        if(!res.ok)
        {
          return toast.error(data);
        }
        dispatch(signOutSuccess());
        toast.success(data);
        navigate('/login');
    }
    catch(err){
        return toast.error('Internet not connected!');
    }
  }

  return (
    <section className='flex items-center justify-around border-gray-200 border-b py-3 full-screen-bg'>
      <Link to='/'>
        <div className='flex items-center gap-2'>
          <img src={rocket} height={40} width={40} alt="logo" />
          <span className='text-xl font-extrabold'>Chat-N-Play</span>
        </div>
      </Link>

      <ul className='flex gap-14 items-center'>
        <Link to='/'>
          <li className='hidden font-bold sm:inline hover:text-[#6531e0] text-lg'>Home</li>
        </Link>
        <Link to='/about'>
          <li className='hidden font-bold sm:inline hover:text-[#6531e0] text-lg'>About</li>
        </Link>
        {
          currentUser ? (
            <button onClick={handleSignOut} className='text-[#6531e0] text-lg outline rounded-xl p-1 px-4 pb-1 hover:text-white hover:bg-[#6531e0]'>Sign out</button>
          ) : (
            <Link to='/login'>
              <button className='text-[#6531e0] text-lg outline rounded-xl p-1 px-4 hover:text-white hover:bg-[#6531e0]'>Try Demo for Free</button>
            </Link>
          )
        }
            
      </ul>
    </section>
  )
}