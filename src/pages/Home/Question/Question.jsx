const Question = () => {
  return (
    <>
      <div className="mt-12 font-custom max-w-7xl mx-auto">
        <h2 className="text-center text-[#e12454] text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
          Have Questions?
        </h2>
        <div className="mx-5">
          <div className="collapse collapse-plus bg-[#eaf3f8] mb-4">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium text-[#e12454]">
              Can ProHealth predict my future health risks?
            </div>
            <div className="collapse-content">
              <p className="text-[#223645]">
                We've built several AI-based predictive risk scores that will be
                included in your ProHealth report – the cardiac score predicts
                your chance of having a heart event within 10 years, the
                pre-diabetes score predicts your chance of being diagnosed with
                pre-diabetes within 3 years, etc. These scores bring you up to
                speed on the A-Z of your health and help you take the right
                actions.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-[#eaf3f8] mb-4">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium text-[#e12454]">
              Does ProHealth Check Packages includes all the important test?
            </div>
            <div className="collapse-content">
              <p className="text-[#223645]">
                The package has been specially curated by the doctors to include
                exactly the tests you need for a proper analysis of your
                health—no more & no less.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-[#eaf3f8] mb-8">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium text-[#e12454]">
              How can I book the ProHealth Check Package?
            </div>
            <div className="collapse-content">
              <p className="text-[#223645]">
                Simply, fill all the required details on booking form, choose
                your appointment date & time and pay INR 12999. Visit the Apollo
                Clinic on the selected date & time and avail a Apollo ProHealth
                Package.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-[#eaf3f8] mb-8">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium text-[#e12454]">
              The doctor didn't prescribed the tests, Is it wise to go for a
              ProHealth Check?
            </div>
            <div className="collapse-content">
              <p className="text-[#223645]">
                It is always best to keep an eye on your health. Apollo Clinic
                brings doctor-curated packages those can provide you with
                valuable insight on what is affecting your body. It's advisable
                to get your reports properly assessed by a doctor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
