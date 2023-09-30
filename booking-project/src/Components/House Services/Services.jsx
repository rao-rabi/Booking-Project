import washingMachine from "../../assets/washing-machine.png";
function Services() {
  return (
    <>
      <div className="lg:w-1/2 md:flex space-y-2 md:space-y-0 justify-around lg:mt-14 mt-4 pt-2 lg:mx-12 mx-4 border-t-2 border-cyan-200 border-opacity-50">
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-5">
            <i
              className="fa-solid fa-wifi text-lg"
              style={{ color: "#000000" }}
            ></i>
            <p>Free Wifi</p>
          </div>
          <div className="flex items-center space-x-5 py-1">
            <img src={washingMachine} className="w-6 h-6 object-contain" />
            <p>Washing Machine</p>
          </div>
          <div className="flex items-center space-x-5">
            <i
              className="fa-solid fa-fan text-lg"
              style={{ color: "#000000" }}
            ></i>
            <p>Air Conditioning</p>
          </div>
          <div className="flex items-center space-x-5">
            <i
              className="fa-solid fa-person-swimming text-lg"
              style={{ color: "#000000" }}
            ></i>
            <p>Pool</p>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-5">
            <i
              className="fa-solid fa-shower text-lg"
              style={{ color: "#000000" }}
            ></i>
            <p>Private Bathroom</p>
          </div>
          <div className="flex items-center space-x-5">
            <i
              className="fa-solid fa-tv text-lg"
              style={{ color: "#000000" }}
            ></i>
            <p>Television</p>
          </div>
          <div className="flex items-center space-x-5">
            <i
              className="fa-brands fa-accessible-icon text-lg"
              style={{ color: "#050505" }}
            ></i>
            <p>Wheelchair Access</p>
          </div>
          <div className="flex items-center space-x-5">
            <i
              className="fa-brands fa-keycdn text-lg"
              style={{ color: "#050505" }}
            ></i>
            <p>Keyed Safe</p>
          </div>
          <div className="flex justify-evenly">
            <button
              className="border-2 border-slate-500 opacity-50 text-slate-500 px-3 rounded-lg"
              type="button"
            >
              Show All
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
