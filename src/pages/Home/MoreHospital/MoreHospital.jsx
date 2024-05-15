/* eslint-disable react/prop-types */
const MoreHospital = ({ hospital }) => {
  const { title, description, img } = hospital;
  return (
    <div className="w-[300px] rounded-md border bg-white cursor-pointer">
      <img
        src={img}
        alt="hospital"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold text-[#223645] hover:text-[#e12454] transition">
          {title}
        </h1>
        <p className="mt-3 text-sm text-[#223645]">{description}</p>
        <div className="text-center mt-3 mb-4">
          <button className="bg-[#e12454] hover:bg-[#223645] text-white transition ease-in-out duration-300 px-4 py-2 rounded">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreHospital;
