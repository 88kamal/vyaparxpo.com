import React, { useEffect, useState } from 'react'
import AdminNav from './components/AdminNav'
import AllUserDetailIcons from './components/AllUserDetailIcons'
import { db } from '../../firebase/FireBaseConfig'
import { collection, query, limit, orderBy, onSnapshot } from "firebase/firestore";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AllStallDetails from './components/AllStallDetails';
// import "react-tabs/style/react-tabs.css";

function AdminPanel({ logout,allStallDetail }) {
  const [exhibitor, setexhibitor] = useState([]);
  useEffect(() => {
    const q = query(
      collection(db, "exhibitorRegistration"),
      orderBy("createdAt"),
      // limit(50)
    );
    const data = onSnapshot(q, (QuerySnapshot) => {
      let exhibitor = [];
      QuerySnapshot.forEach((doc) => {
        exhibitor.push({ ...doc.data(), id: doc.id });
      });
      setexhibitor(exhibitor)

    });
    console.log(exhibitor.length)

    return () => data;
  }, []);
  const [visitor, setvisitor] = useState([]);
  useEffect(() => {
    const q = query(
      collection(db, "visitorRegistration"),
      orderBy("createdAt"),
      // limit(50)
    );
    const data = onSnapshot(q, (QuerySnapshot) => {
      let visitor = [];
      QuerySnapshot.forEach((doc) => {
        visitor.push({ ...doc.data(), id: doc.id });
      });
      setvisitor(visitor)

    });
    console.log(visitor)

    return () => data;
  }, []);


  // const [sixSqMeter, setSixSquMeter] = useState([]);
  // useEffect(() => {
  //   const q = query(
  //     collection(db, "sixSquareMeterPayment"),
  //     orderBy("createdAt"),
  //     // limit(50)
  //   );
  //   const data = onSnapshot(q, (QuerySnapshot) => {
  //     let sixSqMeter = [];
  //     QuerySnapshot.forEach((doc) => {
  //       sixSqMeter.push({ ...doc.data(), id: doc.id });
  //     });
  //     setSixSquMeter(sixSqMeter)

  //   });
  //   console.log(sixSqMeter)

  //   return () => data;
  // }, []);

  return (
    <div className=' h-[100%] md:h-[80em]' style={{ backgroundColor: 'rgb(32, 33, 36)' }}>
      <AdminNav logout={logout} />
      <AllUserDetailIcons exhibitor={exhibitor} visitor={visitor} />
      {/* <AllStallDetails allStallDetail={allStallDetail}  /> */}
      <div className="tab container mx-auto ">
        <Tabs defaultIndex={0} className=" " >
          <TabList className="md:flex md:space-x-8 bg-  grid grid-cols-2 text-center gap-4   md:justify-center mb-10 ">
            <Tab>
              <button type="button" className="font-medium border-b-2 shadow-2xl hover:shadow-purple-700 border-purple-500 text-purple-500 rounded-xl text-xl   px-5 py-1.5 text-center bg-[#ffffff12] ">Exhibitor</button>
            </Tab>
            <Tab>
              <button type="button" className="font-medium border-b-2 border-pink-500 bg-[#ffffff12] text-pink-500 shadow-2xl hover:shadow-pink-700  rounded-xl text-xl    px-5 py-1.5 text-center ">Visitor</button>
            </Tab>
            <Tab>
              <button type="button" className="font-medium border-b-2 border-green-500 bg-[#ffffff12] text-green-500 rounded-xl text-xl shadow-2xl hover:shadow-green-700   px-5 py-1.5 text-center ">BHU Student</button>
            </Tab>
            <Tab>
              <button type="button" className="font-medium border-b-2 border-orange-500 bg-[#ffffff12] text-orange-500 rounded-xl text-xl shadow-2xl hover:shadow-orange-700   px-5 py-1.5 text-center ">Sponsorship</button>
            </Tab>
            <Tab>
              <button type="button" className="font-medium border-b-2 border-orange-500 bg-[#ffffff12] text-orange-500 rounded-xl text-xl shadow-2xl hover:shadow-orange-700   px-5 py-1.5 text-center ">All Stall Detail</button>
            </Tab>
          </TabList>
          <TabPanel>
            <Exhibitor />
          </TabPanel>
          <TabPanel>
            <Visitor />
          </TabPanel>
          <TabPanel>
            <BHUStudent />
          </TabPanel>
          <TabPanel>
            <Sponsorship />
          </TabPanel>
          <TabPanel>
            <AllStallDetails allStallDetail={allStallDetail} />
          </TabPanel>
        </Tabs>
      </div>



    </div>
  )
}






function Exhibitor() {
  const [exhibitor, setexhibitor] = useState([]);
  useEffect(() => {
    const q = query(
      collection(db, "exhibitorRegistration"),
      orderBy("createdAt"),
      // limit(50)
    );
    const data = onSnapshot(q, (QuerySnapshot) => {
      let exhibitor = [];
      QuerySnapshot.forEach((doc) => {
        exhibitor.push({ ...doc.data(), id: doc.id });
      });
      setexhibitor(exhibitor)

    });
    console.log(exhibitor)

    return () => data;
  }, []);

  return (
    <div>
      <div className="exhibitor container mx-auto px-4">
        <h1 className='   text-2xl text-purple-500 fonts2 underline '>All Exhibitor</h1>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full border  text-sm font-light text-white border-gray-500">
                  <thead className="border-b font-medium border-gray-500 " style={{ backgroundColor: 'rgb(40, 44, 52)' }}>
                    <tr>
                      <th scope="col" className="border-r px-6 py-4 border-gray-500">
                        S.No.
                      </th>
                      <th scope="col" className="border-r px-6 py-4 border-gray-500">
                        Exhibiting Company's Name
                      </th>
                      <th scope="col" className="border-r px-6 py-4 border-gray-500">
                        Gst no.
                      </th>
                      <th scope="col" className="border-r px-6 py-4 border-gray-500">
                        Mobile No.
                      </th>
                      <th scope="col" className="border-r px-6 py-4 border-gray-500">
                        City
                      </th>
                      <th scope="col" className="border-r px-6 py-4 border-gray-500">
                        Email Id
                      </th>
                      <th scope="col" className="border-r px-6 py-4 border-gray-500">
                        Country
                      </th>
                      <th scope="col" className="border-r px-6 py-4 border-gray-500">
                        Website
                      </th>
                      <th scope="col" className="border-r px-6 py-4 border-gray-500">
                        Pin/Zip Code
                      </th>
                      <th scope="col" className="border-r px-6 py-4 border-gray-500">
                        PAN No.
                      </th>
                      <th scope="col" className="border-r px-6 py-4 border-gray-500">
                        Name of PAN Holder
                      </th>
                      <th scope="col" className="border-r px-6 py-4 border-gray-500">
                        Name for Stall Fasia
                      </th>
                      <th scope="col" className="border-r px-6 py-4 border-gray-500">
                        Indian / Foreign Exhibitors
                      </th>
                      <th scope="col" className="border-r px-6 py-4 border-gray-500">
                        STALL AREA REQUIRED
                      </th>
                      <th scope="col" className="border-r px-6 py-4 border-gray-500">
                        Your Message
                      </th>

                    </tr>
                  </thead>
                  <tbody>
                    {exhibitor.map((item, index) => {
                      const { exhibitingCompanysName, gstno, mobile, city, email, country, website, pin, panNumber, panHolder, stall, selectedCountry, selectedStallSpace, message, id } = item;
                      return (
                        <tr className="border-b border-gray-500">
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">
                            {index + 1}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 border-gray-500">
                            {exhibitingCompanysName}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">
                            {gstno}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">
                            {mobile}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">
                            {city}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">
                            {email}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">
                            {country}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">
                            {website}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">
                            {pin}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">
                            {panNumber}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">
                            {panHolder}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">
                            {stall}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">
                            {selectedCountry}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">
                            {selectedStallSpace}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">
                            {message}
                          </td>
                        </tr>

                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


function Visitor() {
  const [visitor, setvisitor] = useState([]);
  useEffect(() => {
    const q = query(
      collection(db, "visitorRegistration"),
      orderBy("createdAt"),
      // limit(50)
    );
    const data = onSnapshot(q, (QuerySnapshot) => {
      let visitor = [];
      QuerySnapshot.forEach((doc) => {
        visitor.push({ ...doc.data(), id: doc.id });
      });
      setvisitor(visitor)

    });
    console.log(visitor)

    return () => data;
  }, []);

  return (
    <div>
      <div className="exhibitor container mx-auto px-4">
        <h1 className='   text-2xl text-pink-500 fonts2 underline '>All Visitor</h1>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full border  text-sm font-light text-white border-gray-500">
                  <thead className="border-b font-medium border-gray-500 " style={{ backgroundColor: 'rgb(40, 44, 52)' }}>
                    <tr>
                      <th scope="col" className="border-r px-6 py-4 border-gray-500">
                        S.No.
                      </th>
                      <th scope="col" className="border-r px-6 py-4 border-gray-500">
                        Name
                      </th>
                      <th scope="col" className="border-r px-6 py-4 border-gray-500">
                        Company Name
                      </th>
                      <th scope="col" className="border-r px-6 py-4 border-gray-500">
                        Email
                      </th>
                      <th scope="col" className="border-r px-6 py-4 border-gray-500">
                        Designation
                      </th>
                      <th scope="col" className="border-r px-6 py-4 border-gray-500">
                        Phone
                      </th>
                      <th scope="col" className="border-r px-6 py-4 border-gray-500">
                        Website
                      </th>
                      <th scope="col" className="border-r px-6 py-4 border-gray-500">
                        Country
                      </th>
                      <th scope="col" className="border-r px-6 py-4 border-gray-500">
                        Products you deals
                      </th>
                      <th scope="col" className="border-r px-6 py-4 border-gray-500">
                        State
                      </th>
                      <th scope="col" className="border-r px-6 py-4 border-gray-500">
                        Selected Category
                      </th>
                      <th scope="col" className="border-r px-6 py-4 border-gray-500">
                        City
                      </th>
                      <th scope="col" className="border-r px-6 py-4 border-gray-500">
                        Selected About
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {visitor.map((item, index) => {
                      const { name, companyName, email, designation, phone, website, country, products, selectedState, city, selectedCategory, selectedAbout, id } = item;
                      return (
                        <tr className="border-b border-gray-500">
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">
                            {index + 1}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 border-gray-500">
                            {name}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">
                            {companyName}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">
                            {email}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">
                            {designation}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">
                            {phone}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">
                            {website}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">
                            {country}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">
                            {products}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">
                            {selectedState}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">
                            {selectedCategory}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">
                            {city}
                          </td>
                          <td className="whitespace-nowrap border-r px-6 py-4 font-medium border-gray-500">
                            {selectedAbout}
                          </td>

                        </tr>

                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function BHUStudent() {
  return (
    <div>
      <h1 className='text-center text-white text-lg'>No Data</h1>
    </div>
  )
}
function Sponsorship() {
  return (
    <div>
      <h1 className='text-center text-white text-lg'>No Data</h1>
    </div>
  )
}

export default AdminPanel