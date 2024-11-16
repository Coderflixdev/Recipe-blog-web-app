/* eslint-disable react/prop-types */


const Title = ({center, title, subTitle}) => {
    return (
        <div className="mb-20">
            <p className={`text-primary ${center}`}>{subTitle}</p>
            <h2 className={`text-[38px] text-headTextColor ${center} font-bold`}>{title}</h2>
        </div>
    );
};

export default Title;