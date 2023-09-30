import { useState } from "react";
import { Calendar } from "react-multi-date-picker";

const weekDays = ["S", "M", "T", "W", "T", "F", "S"];
function Calender() {
  const [values, setValues] = useState([new Date()]);
  return (
    <div className="lg:px-14 md:px-8 px-4 lg:w-6/12 lg:mb-0 mb-12 w-full overflow-hidden">
      <div className="h-full overflow-auto no-scrollbar">
        {" "}
        <h1 className="text-center py-3.5 text-lg font-semibold">
          Availability and Booking
        </h1>
        <Calendar
          numberOfMonths={2}
          value={values}
          onChange={setValues}
          range
          weekDays={weekDays}
          
          
          style={{
            margin: "auto",
            boxSizing: "border-box",
          }}
        />
      </div>
    </div>
  );
}

export default Calender;
