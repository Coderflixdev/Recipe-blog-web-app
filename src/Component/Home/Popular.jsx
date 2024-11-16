import img1 from '../../assets/burger.png'
import img2 from '../../assets/sandwich.png'
import img3 from '../../assets/icecrem.png'
import img4 from '../../assets/juice.png'
import PopularCard from './PopularCard';
import Title from './Title';

const Popular = () => {
    const popularItem = [

        {
            id: 1,
            img: img1,
            title: "Main Dish",
            items: "(86 dishes)"
        },
        {
            id: 2,
            img: img2,
            title: "Break Fast",
            items: "(12 break fast)"
        },
        {
            id: 3,
            img: img3,
            title: "Dessert",
            items: "(48 dessert)"
        },
        {
            id: 4,
            img: img4,
            title: "Juices",
            items: "(86 juices)"
        },

    ];
    
    return (
        <div className='flex flex-col items-center my-40'>

            <Title center={'text-center'} subTitle={'Customer Favorites'} title={'Popular Catagories'} />

           <div className='grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-4 gap-[82px] mx-10 lg:mx-40 justify-center'>
           {
                popularItem.map(item => <PopularCard key={item.key} item={item} />)
            }
           </div>
        </div>
    );
};

export default Popular;