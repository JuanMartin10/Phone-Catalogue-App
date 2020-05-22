import React, { Fragment, useEffect } from 'react';
import axios from 'axios'

function App() {

  useEffect(() => {
    const getApi = async () => {
      const phones = await axios.get('http://localhost:4000/phones')
      console.log(phones.data)
    }
    getApi()


  }, [])
  return (
    <Fragment>
      <p>Hola Phones</p>
    </Fragment>
  );
}

export default App;
