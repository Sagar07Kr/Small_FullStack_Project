
import React, { useEffect, useState } from 'react';
import Card from './Card';

function App() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    async function getdata() {
      try {
        const product = await fetch(
          "https://small-fullstack-project-kujd.onrender.com/"
        );

        const dataa = await product.json();

        setdata(dataa);
      } catch (error) {
        console.log(error);
      }
    }

    getdata();
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '30px',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '30px',
          color: '#222'
        }}
      >
        Products
      </h1>

      <Card data={data} />
    </div>
  );
}

export default App;

