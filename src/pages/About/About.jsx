import about from "/public/image/about-image.jpg";
const About = () => {
  return (
    <div className="mt-6 md:mb-12 md:mt-10 max-w-7xl mx-auto px-4 py-2 sm:px-6">
      <div className="md:flex md:items-center md:gap-8">
        <div>
          <img src={about} alt="about image" className="rounded-md" />
        </div>
        <div className="mt-6 sm:mt-0">
          <h1 className="text-blue-700 text-4xl font-semibold">
            Medical Care Healthy
          </h1>
          <p className="my-4">
            Medical Care Healthy is the largest network of the world’s finest
            medical experts and has pioneered ground-breaking healthcare
            technologies in India. It also has India’s first, largest and most
            trusted branded pharmacy network, with over 5000 plus outlets
            covering the entire nation.
            <br />
            <br />
            The core specialities of the hospitals are Cardiac surgery, Spine
            surgery, Orthopedics, Cancer care, Neurosciences, Transplants,
            Gastroenterology, etc. The Medical Heart Institute is one of the
            best heart hospitals in India and performed over 1,52,000 cardiac
            and cardiothoracic surgeries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
