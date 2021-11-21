import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);  // Loading component will be displayed by default
  const [tours, setTours] = useState([]);  // empty array by default

  //fetching data
  const fetchTours = async () => {
    // if setLoading == false, set it to true
    setLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json(); // get the list of tours
      // console.log(tours);  // fetched data
      //set state loading to false after fetching
      setLoading(false);
      //set state tours and pass there the data fetched from API
      setTours(tours);
    } catch (error) {
      //even if we have an error, set loading to false
      setLoading(false);
      console.log(error);
    }


  }
   // invoke fetchTours once the component renders
   // only runs once the component renders (initial render)
  useEffect(() => {
    fetchTours();
  },[])


  if(loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Tours />
    </main>
  );
}

export default App
