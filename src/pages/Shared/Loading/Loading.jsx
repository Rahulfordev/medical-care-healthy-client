import loader from "/public/image/page-spinner.svg";
const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <img src={loader} className="w-10" alt="" />
    </div>
  );
};

export default Loading;
