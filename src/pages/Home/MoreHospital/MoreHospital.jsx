/* eslint-disable react/prop-types */
const MoreHospital = ({ hospital }) => {
  const { title, description, img } = hospital;
  return (
    <div className="w-[300px] rounded-md border shadow-xl">
      <img
        src={img}
        alt="hospital"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="mt-3 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default MoreHospital;
