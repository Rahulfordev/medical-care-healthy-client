import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const AddDoctor = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = import.meta.env.VITE_IMGBB_KEY;

  const navigate = useNavigate();

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch(
        "https://medical-care-healthy-server.onrender.com/appointmentSpecialty"
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(specialties);
  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };

          // save doctor information to the database
          fetch("https://medical-care-healthy-server.onrender.com/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate("/dashboard/managedoctors");
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-96 p-7">
      <h2 className="text-4xl">Add A Doctor</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", {
              required: "Name is Required",
            })}
            className="bg-white input input-bordered w-full max-w-xs"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", {
              required: true,
            })}
            className="bg-white input input-bordered w-full max-w-xs"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Specialty</span>
          </label>
          <select
            {...register("specialty")}
            className="bg-white select input-bordered w-full max-w-xs"
          >
            {specialties.map((specialty) => (
              <option key={specialty._id} value={specialty.specialty}>
                {specialty.specialty}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: "Photo is Required",
            })}
            className="bg-white input input-bordered w-full max-w-xs"
          />
          {errors.img && <p className="text-red-500">{errors.img.message}</p>}
        </div>
        <input
          className="btn btn-accent bg-[#e12454] hover:bg-[#e12453d7] border-none text-white w-full mt-4"
          value="Add Doctor"
          type="submit"
        />
      </form>
    </div>
  );
};

/**
 * Three places to store images
 * 1. Third party image hosting server
 * 2. File system of your server
 * 3. mongodb (database)
 */

export default AddDoctor;
