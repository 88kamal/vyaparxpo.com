// import React, { useEffect } from 'react'


// function RegistrationForm() {
//   useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [])
//   return (
// <Layout>
//   <Navbar2 />
//   <div className="img">
//     <img className=' mt-20' src="image/reg.jpg" alt="" />
//   </div>
//   <div className=' container mx-auto px-4 my-5'>
//     <h1 className=' text-center text-3xl md:text-4xl mb-2 font-bold '>Registration Form</h1>
//     <h2 className=' text-center mb-2 md:text-lg text-red-600'>(Fields marked as * mandatory)</h2>
//     <div className="field flex justify-center gap-5 mb-6">
//       <div className="flex items-center">
//         <input defaultChecked id="default-radio-2" type="radio" defaultValue name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " />
//         <label htmlFor="default-radio-2" className="ml-2 text-lg md:text-xl font-medium text-gray-900 ">EXHIBITOR</label>
//       </div>
//       <div className="flex items-center">
//         <input defaultChecked id="default-radio-2" type="radio" defaultValue name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " />
//         <label htmlFor="default-radio-2" className="ml-2 text-lg md:text-xl font-medium text-gray-900 ">VISITOR</label>
//       </div>
//     </div>
//     <div className="form">
//       <form>
//         <div className="mb-6">
//           <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Name *</label>
//           <input type="email" id="email" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="full name" required />
//         </div>
//         <div className="mb-6">
//           <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email *</label>
//           <input type="email" id="email" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@example.com" required />
//         </div>
//         <div className="mb-6">
//           <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Designation *</label>
//           <input type="email" id="email" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
//         </div>
//         <div className="mb-6">
//           <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Mobile *</label>
//           <input type="email" id="email" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
//         </div>
//         <div className="mb-6">
//           <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Company Name *</label>
//           <input type="email" id="email" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
//         </div>
//         <div className="mb-6">
//           <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Company Website *</label>
//           <input type="email" id="email" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
//         </div>
//         <div className="mb-6">
//           <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Country *</label>
//           <input type="email" id="email" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
//         </div>

//         <div className="mb-6">
//           <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">State *</label>
//           <input type="email" id="email" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
//         </div>
//         <div className="mb-6">
//           <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">City *</label>
//           <input type="email" id="email" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
//         </div>
//        <div className="mb-6">
//        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Type of User *</label>
//         <select id="countries" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
//           <option selected>Choose a user</option>
//           <option value="US">Exporter</option>
//           <option value="CA">Distributor</option>
//           <option value="FR">Traders</option>
//           <option value="DE">Services</option>
//           <option value="DE">other</option>
//         </select>
//        </div>

//         <div className="mb-6">
//           <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Source *</label>
//           <input type="email" id="email" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
//         </div>


//         <button type="submit" className="text-white w-full md:w-full bg-green-700 mb-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center ">Submit</button>
//       </form>
//     </div>
//   </div>
//   <ScrollBtn/>
//   <Map />
// </Layout>
//   )
// }

// export default RegistrationForm


import React, { Component } from 'react';
import PDF from './PDF';
import Layout from '../components/Layout'
import Map from '../components/Map'
import Navbar2 from '../components/Navbar2'
import ScrollBtn from '../ScrollBtn/ScrollBtn'
class RegistrationForm extends Component {
  state = {
   all:'',
    fname: '',
    email: '',
    designation: '',
    mobile: '',
    companyName: '',
    companyWebsite: '',
    country: '',
    state: '',
    city: '',

    source: '',

    postSubmitted: false
  }

  onChange = input => e => {
    const { name, value } = e.target;

    this.setState({
      [input]: e.target.value,
      [name]: value
    });
  }

  sunmitPost = (e) => {

    if (!this.state.fname || !this.state.email) {
      alert('All fields are required!');
      e.preventDefault();
    } else {
      this.setState({
        postSubmitted: true
      });
    }
  }

  render() {
    return (
      // <>
      //   {!this.state.postSubmitted ?
      //     (<div className="container">
      //       <div className="jumbotron mt-3">
      //         <div className="row">
      //           <div className="col-md-12">
      //             <div className="well well-sm">
      //               <form className="form-horizontal" method="post">
      //                 <fieldset>
      //                   <legend className="text-center header">Add new Post</legend>
      //                   <div className="form-group">
      //                     <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
      //                     <input onChange={this.onChange('title')} name="title" type="text" placeholder="Post Title" className="form-control" />
      //                   </div>
      //                   <div className="form-group">
      //                     <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
      //                     <input onChange={this.onChange('image')} name="image" type="text" placeholder="https://" className="form-control" />
      //                   </div>
      //                   <div className="form-group">
      //                     <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
      //                     <textarea onChange={this.onChange('content')} className="form-control" name="content" placeholder="Enter your text here" rows="7"></textarea>
      //                   </div>
      //                   <div className="form-group">
      //                     <button type="button" onClick={this.sunmitPost} className="btn btn-primary btn-lg">Submit</button>
      //                   </div>
      //                 </fieldset>
      //               </form>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>) : (
      //       <PDF title={this.state.title} content={this.state.content} image={this.state.image} />
      //     )
      //   }
      // </>
      <Layout>
        <Navbar2 />
        <div className="img">
          <img className=' mt-20' src="image/reg.jpg" alt="" />
        </div>
        {!this.state.postSubmitted ?
        (<div className=' container mx-auto px-4 my-5'>
        <h1 className=' text-center text-3xl md:text-4xl mb-2 font-bold '>Registration Form</h1>
        <h2 className=' text-center mb-2 md:text-lg text-red-600'>(Fields marked as * mandatory)</h2>
        <div className="field flex justify-center gap-5 mb-6">
          {/* <div className="flex items-center">
            <input onChange={this.onChange} checked   id="default-radio-2" type="radio"  name="exhibitor" value='exhibitor' className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " />
            <label htmlFor="default-radio-2" className="ml-2 text-lg md:text-xl font-medium text-gray-900 ">EXHIBITOR</label>
          </div>
          <div className="flex items-center">
            <input onChange={this.onChange}   id="default-radio-2" type="radio"  name="visitor" value='visitor' className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 " />
            <label htmlFor="default-radio-2" className="ml-2 text-lg md:text-xl font-medium text-gray-900 ">VISITOR</label>
          </div> */}
           <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Are you Exhibitor or Visitor? *</label>
              <input onChange={this.onChange('all')} name="all" type="text" id="all" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 " placeholder="Enter Exihibitor Or Visitor" required />
            </div>
        </div>
        <div className="form">
          <form>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Name *</label>
              <input onChange={this.onChange('fname')} name="fname" type="text" id="fname" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="full name" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email *</label>
              <input onChange={this.onChange('email')} type="email" id="email" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@example.com" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Designation *</label>
              <input onChange={this.onChange('designation')} type="text" id="designation" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Mobile *</label>
              <input onChange={this.onChange('mobile')} type="text" id="mobile" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Company Name *</label>
              <input onChange={this.onChange('companyName')} type="companyName " id="companyName " className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Company Website *</label>
              <input onChange={this.onChange('companyWebsite')} type="text" id="companyWebsite" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Country *</label>
              <input onChange={this.onChange('country')} type="text" id="country" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">State *</label>
              <input onChange={this.onChange('state')} type="text" id="state" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">City *</label>
              <input onChange={this.onChange('city')} type="text" id="city" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
            </div>
            {/* <div className="mb-6">
         <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Type of User *</label>
          <select id="countries" class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
            <option selected>Choose a user</option>
            <option value="US">Exporter</option>
            <option value="CA">Distributor</option>
            <option value="FR">Traders</option>
            <option value="DE">Services</option>
            <option value="DE">other</option>
          </select>
         </div> */}

            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Source *</label>
              <input onChange={this.onChange('source')} type="text" id="source" className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
            </div>


            <button onClick={this.sunmitPost} type="submit" className="text-white w-full md:w-full bg-green-700 mb-6 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center ">Submit</button>
          </form>
        </div>
      </div>)
        
      :
      ( <PDF 
        all={this.state.all} 
        fname={this.state.fname} 
        email={this.state.email}
        designation={this.state.designation} 
        mobile={this.state.mobile} 
        companyName={this.state.companyName} 
        companyWebsite={this.state.companyWebsite} 
        country={this.state.country} 
        state={this.state.state} 
        city={this.state.city} 
        source={this.state.source} 
         />)
      
      }
        
        <ScrollBtn />
        <Map />
      </Layout>
    );
  }
}

export default RegistrationForm;