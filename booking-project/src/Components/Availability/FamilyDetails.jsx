function FamilyDetails() {
  return (
    <div className="lg:w-6/12 w-full md:flex md:space-y-0 space-y-7 justify-between px-5 md:px-9 lg:px-0 lg:me-14 lg:mt-14 mt-4 pt-2 ">
      {/* details */}
      <div className="space-y-6">
        {/* input boxes */}
        <div className="flex gap-6">
          <label className="text-sm" htmlFor="adults">
            Adults
          </label>
          <input
            type="text"
            id="adults"
            value={4}
            className="w-12 h-fit border border-black rounded-2xl text-center"
          />
        </div>
        <div className="flex gap-3">
          <div>
            <label className="text-sm" htmlFor="children">
              Children
            </label>
            <p className="text-slate-300 text-xs text-end">0-12years</p>
          </div>
          <input
            type="text"
            id="children"
            value={12}
            className="w-12 h-fit border border-black rounded-2xl text-center"
          />
        </div>

        {/* checkboxes */}
        <div className="flex items-center gap-[20px]">
          <label htmlFor="cleaning" className="text-sm">
            Additional <br /> Cleaning
          </label>
          <input type="checkbox" name="cleaning" id="cleaning" />
        </div>
        <div className="flex items-center gap-[59px]">
          <label htmlFor="pets" className="text-sm">
            Pets
          </label>
          <input type="checkbox" name="pets" id="pets" />
        </div>
        <div className="flex items-center gap-[17px]">
          <label htmlFor="equipment" className="text-sm">
            High Infant <br /> Equipment
          </label>
          <input type="checkbox" name="equipment" id="equipment" />
        </div>
      </div>

      {/* checks */}
      <div className="flex flex-col justify-between md:gap-y-0 gap-y-11">
        <div className="flex justify-between gap-7 border-b-2 border-cyan-200 pb-4">
          <div>
            <h1>Check In</h1>
            <p className="text-sm ps-3">Friday 22 June</p>
            <p className="text-xs text-slate-300 ps-3">2pm</p>
          </div>
          <div>
            <h1>Check Out</h1>
            <p className="text-sm ps-3">Monday 25 June</p>
            <p className="text-xs text-slate-300 ps-3">10pm</p>
          </div>
        </div>

        <div>
          <button
            type="button"
            className="border-2 border-black rounded-2xl px-2 text-sm py-0.5  hover:bg-cyan-700 hover:text-white hover:border-gray-500"
          >
            Continue Booking
          </button>
        </div>
      </div>
    </div>
  );
}

export default FamilyDetails;
