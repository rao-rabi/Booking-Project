import exterior from "../../assets/john-fornander-tVzyDSV84w8-unsplash.jpg";
import kitchen from "../../assets/pexels-houzlook-com-3926542.jpg";
import lounch from "../../assets/pexels-vecislavas-popa-1571458.jpg";
import room from "../../assets/pexels-andrew-neel-3201763.jpg";
import bathroom from "../../assets/pexels-jean-van-der-meulen-1457847.jpg";

function Gallery() {
  return (
    <>
      {/* house images */}
      <div className="flex flex-wrap justify-center lg:px-0 px-4 py-8 gap-3">
        <img
          className="w-full md:w-6/12 lg:w-5/12 h-[300px] rounded-3xl"
          src={exterior}
          alt="exterior"
        />

        <img
          className="w-full md:w-5/12 lg:w-3/12 h-[300px] rounded-3xl"
          src={lounch}
          alt="lounch"
        />

        <div className="w-full lg:w-3/12 flex lg:flex-col md:flex-row flex-col justify-between gap-2 lg:mx-0 md:mx-6">
          <img
            className="lg:w-full md:w-1/2 w-full lg:h-[145px] h-[200px] rounded-3xl"
            src={room}
            alt="room"
          />
          <div className="flex flex-row gap-2">
            <img
              className="lg:w-1/2 w-1/2 lg:h-[145px] h-[200px]  rounded-3xl"
              src={kitchen}
              alt="kitchen"
            />
            <img
              className="lg:w-1/2 w-1/2 lg:h-[145px] h-[200px]  rounded-3xl"
              src={bathroom}
              alt="bathroom"
            />
          </div>
        </div>
      </div>

      {/* name and rating */}
      <div className="lg:px-16 md:px-8 px-4 flex justify-between flex-wrap">
        <div>
          <h1 className="text-cyan-700 text-xl font-medium">
            3 Bauhonia Cress
          </h1>
          <p className="text-sm">
            Stunning houses 2 minutes walk from the beach
          </p>
        </div>
        {/* rating */}
        <div>
          <div className="flex md:justify-end items-center gap-2">
            <div>
              <h2 className="text-base">Superb</h2>
              <p className="text-xs text-slate-400">52 ratings</p>
            </div>
            <div>
              <button className="rounded-3xl border-2 w-12 border-black text-sm flex-none">
                4.8/5
              </button>
            </div>
          </div>
          <div className="flex md:justify-end items-center gap-2">
            <div>
              <h2 className="text-base">Repeat Customers</h2>
            </div>
            <div>
              <button className="rounded-3xl border-2 w-12 border-black text-sm flex-none">
                140
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
