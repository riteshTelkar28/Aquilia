import TestimonialCard from "./TestimonialCard";


const Testimonials = () => {
  return (
    <div className="bg-[#172933] h-[635px] text-white flex flex-col items-center ">
     <div className="mt-[50px] my-[14px] ">
        <h2 className="text-3xl font-bold  text-[#F6765E]  border-[#F6765E] ">
        Testimonials
      </h2>
     </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center px-[120px] mb-[50px] mt-[40px] ">
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
