/* eslint-disable react/prop-types */

const Service = ({ service }) => {
  const { name, description, img } = service;
  return (
    <div className="card bg-white shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="max-w-[80%]" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-blue-700">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
