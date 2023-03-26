import React, { useState } from 'react';
import '../../styleSheet/AdminLogin.css';
// import { BsFillArrowLeftSquareFill } from 'react-icons/bs'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom'

function AdminLogin({setAdmin}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    const navigate = useNavigate();

    const login = async () => {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            console.log(result)
           const user = localStorage.setItem('currentuser', JSON.stringify(result))
           setAdmin(user);
            toast.success(' Login Successfully', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            // navigate('/adminpanel');
            window.location.href= '/adminpanel'
            setEmail('')
            setPassword('')
        } catch (error) {
            toast.error(' Login Failed', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    return (
        <div>

            <section className="bg-gray-300 adminbg h-[51.3em] ">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                    <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
                        {/* <img className="w-16 h-16 mr-2" src="image/logot.png" alt="logo" /> */}
                        {/* <h1 className=' text-black'>Vaypar Expo</h1> */}
                    </a>

                    <div className="w-full mb-5 backdrop-blur-xl bg-gray-900 rounded-3xl shadow-2xl border md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            {/* <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                                Admin Login
                            </h1> */}
                            <h1 className=' text-white fonts1 text-center text-3xl underline'>Vaypar Expo</h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    {/* <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label> */}
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required />
                                </div>
                                <div>
                                    {/* <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label> */}
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" className="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
                                </div>
                            </form>
                            <button onClick={login} type="submit" className="w-full bg-[#ff0000] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default AdminLogin