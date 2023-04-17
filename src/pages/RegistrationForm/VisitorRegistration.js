import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { db } from '../../firebase/FireBaseConfig'
import { collection, addDoc } from 'firebase/firestore'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';

function VisitorRegistration({name,setName, unique_id,  email, setEmail, country, setCountry, city, setCity, phone, setPhone  }) {
    // const [name, setName] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [designation, setDesignation] = useState('');
    // const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [products, setProducts] = useState('');
    const [selectedState, setSelectedState] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedAbout, setSetSelectedAbout] = useState([]);
    const navigate = useNavigate()

    function handleSelectChangeOne(event) {
        setSelectedState(event.target.value);
    }
    function handleSelectChangeTwo(event) {
        setSelectedCategory(event.target.value);
    }
    function handleSelectChangeThree(event) {
        setSetSelectedAbout(event.target.value);
    }

    const Register = async () => {
        // validation
        if (name === "" || email === "" || phone === "" || country === "" || selectedState === "" || city === "") {
            return toast.error('Please Fill All Fields', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        const visitorRegistrationRef = collection(db, "visitorRegistration")

        try {
            await addDoc(visitorRegistrationRef, {
                name: name,
                companyName: companyName,
                email: email,
                designation: designation,
                phone: phone,
                website: website,
                country: country,
                products: products,
                selectedState: selectedState,
                city: city,
                selectedCategory: selectedCategory,
                selectedAbout: selectedAbout,
                unique_id : unique_id ,
                createdAt: new Date().toLocaleString(),
            })
            toast.success('Visitor Registration Success', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } catch (error) {
            console.log(error)
        }  
        navigate('/visitorpass')
                //   window.location.href= "visitorpass"
                // nav

        // after filling all the fields then fill empty
        // setName('');
        // setCompanyName('');
        // setEmail('');
        // setDesignation('');
        // setPhone('');
        // setWebsite('');
        // setCountry('');
        // setProducts('');
        // setSelectedState('');
        // setCity('');
        // setSelectedCategory('');
        // setSetSelectedAbout('')
    }

    

    return (
        <Layout>
            <div className="">
                <div className="container mx-auto px-4 md:mt-32 lg:mt-32 mt-40 mb-10">
                    <div className="outbgform bg-green-200 p-5 md:p-10  rounded-lg shadow-lg  ">
                        <div className="left mb-5">
                            <div className="">
                                <div className=" flex justify-center">
                                    <img className='w-28 ' src="image/logot.png" alt="" />
                                </div>
                                <h1 className=' mb-5 text-center text-xl fonts1 font-bold'>
                                    1ST NATIONAL FOOD & AGRICULTURE <br />
                                    VYAPAR EXPO 2023 <br />
                                    16-17-18-19-20 OCTOBER 2023 </h1>
                            </div>
                            <h1 className=' text-center text-2xl underline fonts1 font-bold'>
                                Visitors Registration</h1>
                        </div>
                        <div className="right">
                            <div className="inner">
                                <div className=" p-5 md:p-10 bg-green-100 border border-gray-400 rounded-tl-3xl rounded-br-3xl rounded-lg ">
                                    <form>
                                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                                            <div>
                                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Name *</label>
                                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-green-600 focus:border-green-600 block w-full p-2.5   " required />
                                            </div>
                                            <div>
                                                <label htmlFor="companyName" className="block mb-2 text-sm font-medium text-gray-900 ">Company Name</label>
                                                <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} id="companyName" className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-green-600 focus:border-green-600 block w-full p-2.5   " required />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email *</label>
                                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-green-600 focus:border-green-600 block w-full p-2.5   " required />
                                            </div>
                                            <div>
                                                <label htmlFor="designation" className="block mb-2 text-sm font-medium text-gray-900 ">Designation</label>
                                                <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} id="designation" className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-green-600 focus:border-green-600 block w-full p-2.5   " required />
                                            </div>
                                            <div>
                                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Phone *</label>
                                                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-green-600 focus:border-green-600 block w-full p-2.5   " required />
                                            </div>
                                            <div>
                                                <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 ">Website</label>
                                                <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} id="website" className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-green-600 focus:border-green-600 block w-full p-2.5   " required />
                                            </div>
                                            <div>
                                                <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900 ">Country *</label>
                                                <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} id="country" className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-green-600 focus:border-green-600 block w-full p-2.5   " required />
                                            </div>
                                            <div>
                                                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 ">Enter products you deals in</label>
                                                <input type="text" value={products} onChange={(e) => setProducts(e.target.value)} id="products" className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-green-600 focus:border-green-600 block w-full p-2.5   " required />
                                            </div>
                                            <div>
                                                <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 ">State *</label>
                                                <select id="countries" value={selectedState} onChange={handleSelectChangeOne} className="bg-green-50 border border-gray-300 text-gray-900 rounded-[6px] text-sm outline-0 focus:ring-green-600 focus:border-green-600 block w-full p-2.5  ">
                                                    <option selected>Select your State</option>
                                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                    <option value="Assam">Assam</option>
                                                    <option value="Bihar">Bihar</option>
                                                    <option value="Chandigarh">Chandigarh</option>
                                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                                    <option value="Daman and Diu">Daman and Diu</option>
                                                    <option value="Delhi">Delhi</option>
                                                    <option value="Lakshadweep">Lakshadweep</option>
                                                    <option value="Puducherry">Puducherry</option>
                                                    <option value="Goa">Goa</option>
                                                    <option value="Gujarat">Gujarat</option>
                                                    <option value="Haryana">Haryana</option>
                                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                                    <option value="Jharkhand">Jharkhand</option>
                                                    <option value="Karnataka">Karnataka</option>
                                                    <option value="Kerala">Kerala</option>
                                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                    <option value="Maharashtra">Maharashtra</option>
                                                    <option value="Manipur">Manipur</option>
                                                    <option value="Meghalaya">Meghalaya</option>
                                                    <option value="Mizoram">Mizoram</option>
                                                    <option value="Nagaland">Nagaland</option>
                                                    <option value="Odisha">Odisha</option>
                                                    <option value="Punjab">Punjab</option>
                                                    <option value="Rajasthan">Rajasthan</option>
                                                    <option value="Sikkim">Sikkim</option>
                                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                                    <option value="Telangana">Telangana</option>
                                                    <option value="Tripura">Tripura</option>
                                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                    <option value="Uttarakhand">Uttarakhand</option>
                                                    <option value="West Bengal">West Bengal</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 ">Select an option</label>
                                                <select id="countries" value={selectedCategory} onChange={handleSelectChangeTwo} className="bg-green-50 border border-gray-300 text-gray-900 rounded-[6px] text-sm outline-0 focus:ring-green-600 focus:border-green-600 block w-full p-2.5  ">
                                                    <option selected>Select your Category</option>
                                                    <option value="Manufacturer">Manufacturer</option>
                                                    <option value="Exporter">Exporter</option>
                                                    <option value="Distributor">Distributor</option>
                                                    <option value="Traders">Traders</option>
                                                    <option value="Services Provider">Services Provider</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 ">City *</label>
                                                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} id="city" className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-green-600 focus:border-green-600 block w-full p-2.5   " required />
                                            </div>
                                            <div>
                                                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 ">Select an option</label>
                                                <select name="source" value={selectedAbout} onChange={handleSelectChangeThree} id="countries" className="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] outline-0 focus:ring-green-600 focus:border-green-600 block w-full p-2.5 ">
                                                    <option class="hidden" selected="" disabled="">How did you hear about us?</option>
                                                    <option value="Email">Email</option>
                                                    <option value="FacebookAdvertisement">Facebook Advertisement</option>
                                                    <option value="Whatsapp">Whatsapp</option>
                                                    <option value="NewsPaper">News Paper </option>
                                                    <option value="Telecalling">Telecalling</option>
                                                    <option value="OutdoorAdvertising">Outdoor Advertising</option>
                                                    <option value="Website">Website</option>
                                                </select>
                                            </div>
                                        </div>

                                    </form>
                                    <div className=" flex justify-end">
                                        <button onClick={Register} type="submit" className="text-white w-full bg-green-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm sm:w-auto px-10 py-2.5 text-center ">Register</button>
                                        <ToastContainer />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default VisitorRegistration