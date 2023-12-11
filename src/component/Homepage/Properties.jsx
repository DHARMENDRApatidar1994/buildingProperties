import React, { useEffect, useState } from 'react'

const Properties = () => {
    const [pList, setPList] = useState(0);
    const [pSales, setPSales] = useState(0);
    const [pRent, setPRent] = useState(0);
    const [pClient, setPClient] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setPList((prevPList) => {
          const nextValue = prevPList + 1;
          if (nextValue === 13000) {
            clearInterval(interval);
          }
          return nextValue;
        });
      }, 1);
      return () => clearInterval(interval);
    }, []);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setPSales((prevPSales) => {
          const nextValue = prevPSales + 1;
          if (nextValue === 8782) {
            clearInterval(interval);
          }
          return nextValue;
        });
      }, 1);
      return () => clearInterval(interval);
    }, []);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setPRent((prevPSales) => {
          const nextValue = prevPSales + 1;
          if (nextValue === 5014) {
            clearInterval(interval);
          }
          return nextValue;
        });
      }, 1);
      return () => clearInterval(interval);
    }, []);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setPClient((prevPSales) => {
          const nextValue = prevPSales + 1;
          if (nextValue === 95) {
            clearInterval(interval);
          }
          return nextValue;
        });
      }, 1);
      return () => clearInterval(interval);
    }, []);
  return (
    <div>
        <div className='linecard'>
            <img src="bgwhite.png" alt="" />
            <div className='line'>
                <h3>{pList}+</h3>
                <p>Properties Listed</p>
            </div>
           
            <div className='line'>
                <h3>{pSales}+</h3>
                <p>Properties Sales</p>
            </div>
           
            <div className='line'>
                <h3>{pRent}+</h3>
                <p>Properties Rented</p>
            </div>
            
            <div className='lastline'>
                <h3>{pClient}%</h3>
                <p>Satisfied Clients</p>
            </div>
        </div>
    </div>
  )
}

export default Properties