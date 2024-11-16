/* eslint-disable react/prop-types */


const CardCategoryBlog = ({item}) => {
    const {img, title, des} = item;
    return (
        <div className=" justify-center flex flex-col">
        <img className="" src={img} alt="" />
        <h2 className="mt-6 mb-2 text-[20px] font-semibold">{ title }</h2>
        <p>{des.slice(1, 69) + '...'}</p>
        <button className="text-primary rounded-full font-semibold border-[2px] mt-4 border-primary w-32">Read More</button>
    </div>
    );
};

export default CardCategoryBlog;