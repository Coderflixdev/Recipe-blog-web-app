/* eslint-disable react/prop-types */


const PopularCard = ({item}) => {
    const { img, title, items} = item
    return (
        <div className="w-[300px] h-[300px] justify-center flex flex-col items-center rounded-[20px] shadow-[4px_10px_29px_1px_rgba(0,_0,_0,_0.1)]">
            <img className="w-[90px] h-[90px] bg-base p-[14px] rounded-full " src={img} alt="" />
            <h2 className="my-2 text-[20px] font-semibold">{ title }</h2>
            <p>{items}</p>
        </div>
    );
};

export default PopularCard;