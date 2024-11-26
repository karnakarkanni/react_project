import { useEffect, useState } from "react";

function Bkdetalis() {
  const [a, setv] = useState(null);

  useEffect(() => {
    const v = localStorage.getItem("booking_data");
    if (v) {
      const parsedData = JSON.parse(v);
      setv(parsedData); 
    }
  }, []); 
  useEffect(() => {
    if (a !== null) {
      console.log(a); 
    }
  }, [a]); 

  return (
    <div>
     {console.log(a)} 
      
      <h1>{a ? JSON.stringify(a) : "Loading..."}</h1> 
    </div>
  );
}

export default Bkdetalis;






