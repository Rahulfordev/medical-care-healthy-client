/* eslint-disable react/prop-types */

const Service = ({ service }) => {
  const { name, description, img } = service;
  return (
    <div className="card bg-white">
      <figure className="px-10 pt-12">
        <img src={img} alt="Shoes" className="max-w-[80%]" />
      </figure>
      <div className="card-body items-center text-center pb-12">
        <h2 className="card-title text-2xl font-bold text-[#223645] hover:text-[#e12454]">
          {name}
        </h2>
        <p className="text-[#223645] max-w-[278px]">{description}</p>
        <div className="text-center mt-3">
          <button className="bg-[#e12454] hover:bg-[#223645] text-white transition ease-in-out duration-300 px-4 py-2 rounded">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
