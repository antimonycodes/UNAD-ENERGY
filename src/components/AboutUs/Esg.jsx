const Esg = () => {
  return (
    <div className="bg-primary px-4 py-8 md:px-12 text-darkText text-center items-center">
      <h1 className="font-semibold text-3xl text-center py-8">
        Our HSE Commitments (Health and Safety Environment)
      </h1>
      <div className="relative flex flex-col md:flex-row gap-8 pt-8">
        <div className="basis-[50%] flex flex-col gap-4">
          <p className="font-medium text-center text-lg md:text-left lg:leading-10">
            We are committed to exemplary performance at UNAB, which is why we
            comply with notable international Environmental, Social, and
            Governance (ESG) standards to ensure that we leave a positive
            impact on people and the environment.
          </p>
          <p className="font-medium text-center text-lg md:text-left lg:leading-10">
            Our internal practices align with the International Finance
            Corporation (IFC) Performance Standards on Environmental and Social
            Sustainability. We are committed to safely executing projects to
            protect our employees’ well-being and the environment we work in.
          </p>
          <p className="font-medium text-center md:text-left text-lg lg:leading-10">
            Our ESG commitments also drive us to ensure our business produces a
            more significant development impact in society. We record several
            relevant developmental impact indicators to help us track our
            results and for stakeholder feedback.
          </p>
        </div>
        <div className="flex flex-col md:flex-row  relative">
          {/* Mobile Images */}
          <img
            src="/worldmobile.png"
            alt=""
            width={200}
            className="md:hidden mx-auto"
          />
          <img
            src="/tggmobile.png"
            alt=""
            width={200}
            className="md:hidden mx-auto"
          />
          {/* Desktop Images */}
          <img
            src="/public/world.png"
            alt=""
            width={300}
            className="hidden md:block absolute right-[-84%] top-[8%] "
          />
          <img
            src="/tgg.png"
            alt=""
            width={300}
            className="hidden md:block h-[300px] mt-[100%] "
          />
        </div>
      </div>
    </div>
  );
};

export default Esg;
