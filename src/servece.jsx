import About from "./about";
import { Link } from "react-router-dom";
function Service() {
    return (
        <>
            <div id="services">
                <h1 id="servicesh">Services</h1>
                <div id="row">
                    <div id="cards">
                        <h1 id="sh"><img src="https://www.svgrepo.com/show/243212/motor-sports-motorcycle.svg" style={{ width: 200 }} /></h1>
                        <h2 id="sh">Bike</h2>
                        <h2 id="sh">Rate:20₹  per/hr
                        </h2>
                        <center><button> <Link to={"/Service/Maps"}> More Details</Link>  </button></center>

                    </div>
                    <div id="cards">
                        <h1 id="sh"><img src="https://www.svgrepo.com/show/500081/car.svg" style={{ width: 200 }} /></h1>
                        <h2 id="sh">Car</h2>
                        <h2 id="sh">Rate:80₹  per/hr
                        </h2>
                        <center><button><Link to={"/Service/Maps"}> More Details</Link>  </button></center>
                    </div>
                    <div id="cards">
                        <h1 id="sh"><img src="https://www.svgrepo.com/show/243218/delivery-truck-cargo-truck.svg" alt="" style={{ width: 200 }} /></h1>
                        <h2 id="sh"> Truck </h2>
                        <h2 id="sh">Rate:150₹  per/hr
                        </h2>
                        <center> <button><Link to={"/Service/Maps"}> More Details</Link> </button> </center>
                    </div>
                    <div id="cards">
                        <h1 id="sh"><img src="https://www.svgrepo.com/show/243222/buses.svg" style={{ width: 200 }} /></h1>
                        <h2 id="sh">Bus</h2>
                        <h2 id="sh">Rate:130₹  per/hr
                        </h2>
                        <center><button><Link to={"/Service/Maps"}> More Details</Link>  </button></center>
                    </div>
                </div>
            </div>
            <About></About>
        </>
    )
}
export default Service;
