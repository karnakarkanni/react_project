import { useState } from "react";
import { Link } from "react-router-dom"; 

function Book() {
  const [a, seta] = useState([]); 

  const sub = (e) => {
    e.preventDefault();

    const b = {
      Ownername: e.target[0].value,
      phone_number: e.target[1].value,
      email_id: e.target[2].value,
      vachile_number: e.target[3].value,
      licence_number: e.target[4].value,
      date: e.target[5].value,
      vachile_type: e.target[6].value,
    };
    const updatedData = [...a, b]; 
    seta(updatedData);
    localStorage.setItem("booking_data", JSON.stringify(updatedData));
    alert("Details submitted successfully");
  };

  return (
    <>
      <div id="book">
        <div id="book1">
          <form action="" id="row" onSubmit={sub}>
            <label htmlFor="">Owner name</label>
            <input type="text" placeholder="Owner name" id="int1" />
            <br />
            <br />
            <label htmlFor="">Phone Number</label>
            <input type="text" id="int1" placeholder="Phone Number" />
            <label htmlFor="">Email id</label>
            <input type="email" id="int1" placeholder="Email id" />
            <br />
            <br />
            <label htmlFor="">Vehicle Number</label>
            <input type="text" placeholder="Vehicle Number" id="int1" />
            <br />
            <br />
            <label htmlFor="">Licence Number</label>
            <input type="text" placeholder="Licence Number" id="int1" />
            <br />
            <br />
            <label htmlFor="">Date/Time</label>
            <input type="datetime-local" id="int1" />
            <label htmlFor="">Vehicle type</label>
            <select id="int1">
              <option value="bike">Bike</option>
              <option value="Car">Car</option>
              <option value="Truck">Truck</option>
              <option value="Bus">Bus</option>
            </select>
            <br />
            <input type="submit" value="Submit" id="int2" />
          </form>
        </div>
      </div>
   
      {/* <Bkdetalis data={a} /> */}
    </>
  );
}

export default Book;
