
import salad from '../../assets/salad1.png'
import salad2 from '../../assets/salad2.png'
import salad3 from '../../assets/salad3.webp'


const MenuSection = () => {

    const dishes = [
        {
          id: 1,
          name: "Fattoush Salad",
          description: "Description of the item",
          price: 24.0,
          rating: 4.9,
          image: salad,
        },
        {
          id: 2,
          name: "Vegetable Salad",
          description: "Description of the item",
          price: 26.0,
          rating: 4.6,
          image: salad2,
        },
        {
          id: 3,
          name: "Egg Vegi Salad",
          description: "Description of the item",
          price: 23.0,
          rating: 4.5,
          image: salad3,
        },
        {
          id: 4,
          name: "Caesar Salad",
          description: "Description of the item",
          price: 22.0,
          rating: 4.7,
          image: salad,
        },
        {
          id: 5,
          name: "Greek Salad",
          description: "Description of the item",
          price: 21.0,
          rating: 4.8,
          image: salad2,
        },
        {
          id: 6,
          name: "Cobb Salad",
          description: "Description of the item",
          price: 25.0,
          rating: 4.6,
          image: salad3,
        },
      ];


    return (
        <div className="text-center py-6">
            <h2 className="text-sm text-primary uppercase tracking-wider mb-4">Special Dishes</h2>
            <h3 className="text-4xl font-bold text-headTextColor mb-6">Standout Dishes From Our Menu</h3>
            
            <div className="relative overflow-hidden w-full max-w-4xl mx-auto py-20">

                {/* Navigation Button  */}

                <button className="absolute top-10 right-16 transform -translate-y-1/2 active:bg-primary active:text-white text-gray-400 z-10 bg-gray-100 p-2 h-10 w-10 rounded-full shadow-full hover:bg-gray-200">
                    &lt;
                </button>
                <button className="absolute top-10 right-2 transform -translate-y-1/2 active:bg-primary active:text-white text-gray-400 z-10 bg-gray-100 p-2 h-10 w-10 rounded-full shadow-full hover:bg-gray-200">
                    &gt;
                </button>

                {/* Slider Container  */}

                <div>
           
              {
                      dishes.map((dish) => (
                        <div key={dish.id}>
                            <div className='flex-shrink-0 w-1/3 p-4'>
                                <div className='flex justify-center'>
                                    <img className='w-48' src={dish.image} alt={dish.name} />
                                </div>
                                <div className='p-8'>
                                    <h4>{dish.name}</h4>
                                    <p>{dish.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
              }
                </div>

                <div>

                </div>



            </div>
        </div>
    );
};

export default MenuSection;