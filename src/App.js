import React, { useEffect, useState } from 'react';
import './App.css';
import Tours from './components/Tours';
import Loading from "./components/Loading";

// const url = 'https://course-api.com/react-tours-project';
// const url = '/react-tours-project';

function App() {
  // fetching the data is complete try maping the data and rendering it to Tours.jsx component
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true)
  async function fetchData() {
    try {
      //   "private": true,
      //     "proxy": "https://course-api.com",
      setLoading(true)
      // const res = await fetch(url);
      // console.log('Raw response: ', res)
      // const result = await res.json();
      const res = await fetch('/netlify/functions/fetchData.js');
      const result = await res.json();
      console.log('this is from fetchData: ', result)
      setData(result)
      console.log(result);
      setLoading(false)
    } catch (error) {
      console.log(`Error from fetchData: ${error.message}`)
      setLoading(false)
    }
  }

  useEffect(() => {
    console.log('inside useEffect')
    fetchData();
  }, [])

  // We need some function to remove one item at a time in response to a 'Not Interested' button click
  // const removeTour = (id) =>{
  //   setData(data.filter((id) => data.id !== id));
  // }

  function removeTour(id) {
    setData(data.filter((tour) => tour.id !== id));
  }
  useEffect(() => {
    console.log('With in removeTour function: ', data);
  }, [data])
  //This should be written inside a useEffect

  // if (data === null) {
  //   return (
  //     < div className='App'>
  //       <h1>No Tours Left</h1>
  //       <button>Refresh</button>
  //     </div>
  //   )
  // }


  return (
    <div className='App'>
      {loading ? <Loading /> : <Tours data={data} removeOneItem={removeTour} refresh={fetchData} />}
    </div>
  )



  // return (
  //   <div className="App">
  //     {/* data === [] ? <div> <h1>No Tours Left</h1> <button>Refresh</button>  </div>:  {loading ? <Loading /> : <Tours data={data} removeOneItem={removeTour} />} */}

  //     {loading ? <Loading /> : <Tours data={data} removeOneItem={removeTour} />}
  //   </div>
  // );
}

export default App;

//June 21, 2025 Saturday: The project is completed
