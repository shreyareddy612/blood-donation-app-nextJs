"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { useState } from "react";

import toast from "react-hot-toast";
import axios from "axios";

export default function LoginPage() {




  
  const [user, setUser] = React.useState({
        email:"",
        username:"",
        password:""
        
    });
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const route = useRouter(); 

    useEffect(()=>{
      if(user.email.length>0 && user.password.length>0 && user.username.length>0){
        setButtonDisabled(false);
      } else{
        setButtonDisabled(true);
      }
    },[user]);



    const onSignup = async () => {

      try{
        // setLoading(true);
        const response = await axios.post("/api/users/signup", user);
        console.log(response, "signup success")
        // route.push('/login');
        routeToLogin();

      }
      catch(error:any){
        console.log(error.message,"error during sigining up")
        toast.error(error.message);

      }
    }

    const routeToLogin = async()=>{
      route.push('/login');
    }

    return (
      <>
    
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          {loading ?
           "Page Loading"
         : 
         <div className="mx-auto w-full max-w-lg">
           
           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
             Signup here!!
           </h2>
         </div> }
         
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email"
                    // autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={user.email}
                    onChange={(e)=>setUser({...user,email:e.target.value})}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                    User Name
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="username"
                    placeholder="username"
                    // autoComplete="current-username"
                    required
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={user.username}
                    onChange={(e)=>setUser({...user,username:e.target.value})}
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  {/* <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div> */}
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    // autoComplete="current-password"
                    placeholder="password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={user.password}
                    onChange={(e)=>setUser({...user,password:e.target.value})}
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  onClick={onSignup}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                
                >
               {buttonDisabled ? "Enter details before signing up" : "Signup here"}
                  
                </button>
                <Link href="/login">Visit Login Page</Link>
              </div>
            </form>
  
            {/* <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial
              </a>
            </p> */}
          </div>
        </div>
      </>
    )
  }
  