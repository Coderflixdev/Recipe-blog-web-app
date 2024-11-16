import img from '../../assets/img1.webp'
import hot from '../../assets/hot.png'
import video from '../../assets/video.png'

const Banner = () => {
    return (
        <div className="overflow-hidden ">
        <div className="bg-base z-0 lg:w-[150%] lg:-ms-[25%] relative -mt-[1800px] h-[2460px] rounded-b-[10000px]">
        </div>

            <div className="absolute top-20 lg:flex-col flex justify-center lg:left-40 lg:right-40 left-10 right-10">
           <div className='lg:flex justify-between items-center'>

        <div>
            
           <h2 className="text-headTextColor text-[48px]  font-bold z-10">Dive into Testy <br /> Food <span className="text-primary">Recipe</span> </h2>
      <div className='flex gap-4 items-center lg:mt-20'>
      <button className="my-4 py-4 px-10 border-b bg-primary border-primary text-white hover:transition-all duration-150 rounded-full">Order Now</button>
           <span>Watch Video</span>
           <img className='mt-8' width={70} src={video} alt="" />
      </div>
        </div>
           

           <div className='relative'>
            <img className='md:w-64 w-52 absolute lg:-ms-[79px] -ms-[50px] lg:mt-[56px] mt-[16px]' src={hot} alt="" />
               <img className='lg:w-[524px] w-[350px]' src={img} alt="" />
           </div>
           </div>
            </div>


        
            
        </div>
    );
};

export default Banner;







