import { Progress } from "antd";
const Ratings = () => {
  const arr = [
    {
      percentage: 100,
      lable: "Cleanliness",
    },
    {
      percentage: 70,
      lable: "Amenities",
    },
    {
      percentage: 90,
      lable: "Location",
    },
    {
      percentage: 80,
      lable: "Comfort",
    },
  ];
  return (
    <>
      <div className="lg:px-14 mt-4 md:px-8 px-4 md:w-4/12 w-full">
        <h1 className="text-cyan-700 text-lg font-medium">Reviews</h1>
        <h1 className="text-3xl mb-7 mt-1">
          {arr.map((item) => item?.percentage).reduce((a, b) => a + b) / 80}/5
        </h1>
        {arr.map((item, index) => (
          <div key={index}>
            {" "}
            <div className="flex justify-between mt-4">
              <h2 className="text-xs">{item?.lable}</h2>
              <p className="text-xs">{item?.percentage / 10}/10</p>
            </div>
            <Progress
              className="drop-shadow-lg"
              strokeColor={"white"}
              trailColor={"#D0D0D0"}
              showInfo={false}
              percent={item?.percentage}
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default Ratings;
