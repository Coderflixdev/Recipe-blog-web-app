/* eslint-disable react/prop-types */

const Service = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between gap-10
     lg:gap-40 items-center lg:mx-60 mx-6 my-20">
      {/* Our Story & Services  */}

      <div>
        <h3 className="text-primary uppercase text-sm font-semibold tracking-wider mb-2">
          Our Story & Services
        </h3>
        <h2 className="text-4xl font-bold my-6">
          Our Culinary Journey <br /> And Services
        </h2>
        <p className="text-gray-700 mb-8">
          Rooted in passion, we curate unforgettable dining experiences and
          offer exceptional services, blending culinary artistry with warm
          hospitality.
        </p>
        <button className="bg-primary text-white px-10 py-3 rounded-full shadow hover:bg-green-600">
          Explore
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <ServiceCard
          icon="🍽️"
          title="Catering"
          description="Delight your guests with our flavors and presentation"
        />
        <ServiceCard
          icon="🚚"
          title="Fast Delivery"
          description="We deliver your order promptly to your door"
        />
        <ServiceCard
          icon="🛒"
          title="Online Ordering"
          description="Order your favorite meals online with ease"
        />
        <ServiceCard
          icon="🎁"
          title="Gift Cards"
          description="Give the gift of exceptional dining with Foodi Gift Cards"
        />
      </div>
    </div>
  );
};

// ServiceCard Component
const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg p-4 flex flex-col
   items-center shadow-lg transition-shadow duration-300">
    <div className="text-green-500 text-3xl mb-3">{icon}</div>
    <h4 className="font-bold text-lg mb-2">{title}</h4>
    <p className="text-gray-600 text-sm text-center">{description}</p>
  </div>
);

export default Service;
