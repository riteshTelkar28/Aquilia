import TestimonialCard from "./TestimonialCard";


const Testimonials = () => {
  return (
    <div className="bg-[#172933] py-16 px-4 text-white flex flex-col items-center ">
      <h2 className="text-3xl font-bold mb-12 text-[#F6765E]  border-[#F6765E] pb-1">
        Testimonials
      </h2>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <TestimonialCard
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          name="Lorem Ipsum is"
        />
        <TestimonialCard
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          name="Lorem Ipsum is"
        />
        <TestimonialCard
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          name="Lorem Ipsum is"
        />
      </div>
    </div>
  );
};

export default Testimonials;
