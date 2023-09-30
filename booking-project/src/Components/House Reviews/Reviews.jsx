function Reviews() {
  return (
    <div className="md:w-8/12 w-full lg:ms-5 md:me-8 px-5 md:px-0 lg:me-14 mt-10">
      <div>
        <div className="md:flex block justify-between">
          <div>
            <p className="font-medium text-base">
              Excellent value for the price!
            </p>
            <p className="text-sm text-slate-400">John D.</p>
            <p className="pt-1">
              We loved our stay at this beach house. We will definately come
              back!
            </p>
          </div>
          <div className="flex md:pt-0 pt-3 md:justify-end items-center gap-2">
            <div>
              <h2 className="text-base">Excellent</h2>
            </div>
            <div>
              <button className="rounded-3xl border-2 py-0.5 w-12 border-black text-sm flex-none">
                5
              </button>
            </div>
          </div>
        </div>

        <div className="md:flex block justify-between mt-5">
          <div>
            <p>
              <span className="font-bold pe-2">+</span> Great Location{" "}
            </p>
            <p>
              <span className="font-bold pe-2">+</span> Service{" "}
            </p>
            <p>
              <span className="font-bold pe-2">+</span> Complimentory bottle of
              champagne in the room!{" "}
            </p>
          </div>
          <div>
            <p className="text-sm text-slate-400 pt-5">
              Reviewed on 20
              <br /> September, 2022{" "}
            </p>
          </div>
        </div>
      </div>

      <hr className="border-cyan-200 my-4" />
      <div>
        <div className="md:flex block justify-between">
          <div>
            <p className="font-medium text-base">
              Great beach house with a lively
            </p>
            <p className="text-sm text-slate-400">Amy S.</p>
            <p className="pt-1">
              Had a room facing the beach and it was amazing. Unfortunately, we
              couldn&#39;t extend countinue our stay
            </p>
          </div>
          <div className="flex md:pt-0 pt-3 md:justify-end items-center gap-2">
            <div>
              <h2 className="text-base">Great</h2>
            </div>
            <div>
              <button className="rounded-3xl border-2 w-12 py-0.5 border-black text-sm flex-none">
                4.8
              </button>
            </div>
          </div>
        </div>

        <div className="md:flex block justify-between items-center mt-2">
          <div>
            <p>
              <span className="font-bold pe-2">-</span> Noise{" "}
            </p>
          </div>
          <div>
            <p className="text-sm text-slate-400 md:pt-0 pt-4">
              Reviewed on 10
              <br /> September, 2022{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
