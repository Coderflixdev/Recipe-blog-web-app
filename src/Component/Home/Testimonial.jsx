
import cookies from "../../assets/cookies.jpg";
import bestRecipe from "../../assets/bestRecipes.png";
import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
import profile3 from "../../assets/profile3.png";

const TestimonialCard = () => {
  return (
    <div className="bg-white text-gray-900 font-sans p-8 max-w-7xl mx-auto flex flex-col items-center md:flex-row">
      {/* Image & Badge Section */}
      <div className="flex-1 relative flex justify-center lg:items-start items-center mb-6 md:mb-0">
        <div className="relative w-[300px]">
          {/* Background behind the image */}
          <div className="absolute -top-[10px] right-[0px] w-[150px] rounded-md h-[378px] z-0 bg-primary"></div>

          <img
            src={cookies}
            alt="Our Best Chef"
            className="relative w-[290px] h-[360px] rounded-md shadow-lg z-10"
          />
          <div className="absolute top-4 -left-20 flex items-center z-20">
            <img width={200} src={bestRecipe} alt="" />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="flex-1 space-y-8 px-4">
        {/* Testimonials */}
        <h3 className="text-green-500 uppercase text-sm font-semibold tracking-wider mb-2">
          Testimonials
        </h3>
        <h2 className="text-3xl font-bold mb-4">
          What Our Customers Say About Us
        </h2>
        <p className="text-gray-700 italic mb-4">
          I had the pleasure of dining at Foodi last night, and I&apos;m
          still raving about the experience! The attention to detail in
          presentation and service was impeccable.
        </p>
        <div className="flex items-center space-x-3">
          {/* Profile Images */}
          <div className="flex -space-x-2">
            <img
              src={profile1}
              alt="User 1"
              className="w-10 h-10 rounded-full border-2 border-white shadow"
            />
            <img
              src={profile2}
              alt="User 2"
              className="w-10 h-10 rounded-full border-2 border-white shadow"
            />
            <img
              src={profile3}
              alt="User 3"
              className="w-10 h-10 rounded-full border-2 border-white shadow"
            />
          </div>
          <div>
            <p className="text-sm font-semibold">Customer Feedback</p>
            <p className="text-yellow-500 flex items-center">
              <span className="mr-1">⭐</span> 4.9 (18.6k Reviews)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
