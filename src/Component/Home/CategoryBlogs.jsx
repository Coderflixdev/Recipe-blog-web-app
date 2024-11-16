import img1 from "../../assets/recipe1.png";
import img2 from "../../assets/recipe2.png";
import img3 from "../../assets/recipe3.png";
import img4 from "../../assets/recipe4.png";
import img5 from "../../assets/recipe1.png";
import img6 from "../../assets/recipe2.png";
import img7 from "../../assets/recipe3.png";
import img8 from "../../assets/recipe4.png";

import CardCategoryBlog from "./CardCategoryBlog";
import Title from "./Title";
import {useState} from 'react';

const CategoryBlogs = () => {

    const [selectCat, setSelectCat] = useState('All')


  const data = [
    {
      id: 10,
      img: img1,
      title: "Fattoush salad",
      des: "“salad, any of a wide variety of dishes...",
      cat: "salad",
    },
    {
      id: 11,
      img: img2,
      title: "Chocolate Cake",
      des: "Delicious dessert to satisfy your sweet tooth...",
      cat: "dessert",
    },
    {
      id: 12,
      img: img3,
      title: "Burger",
      des: "A classic fast food option...",
      cat: "fast food",
    },
    {
      id: 13,
      img: img4,
      title: "Caesar Salad",
      des: "A fresh and healthy salad choice...",
      cat: "salad",
    },
    {
      id: 14,
      img: img5,
      title: "Ice Cream Sundae",
      des: "A sweet and cold dessert...",
      cat: "dessert",
    },
    {
      id: 15,
      img: img6,
      title: "Fries",
      des: "Crispy and golden fast food...",
      cat: "fast food",
    },
    {
      id: 16,
      img: img7,
      title: "Greek Salad",
      des: "A mix of fresh vegetables and feta...",
      cat: "salad",
    },
    {
      id: 17,
      img: img8,
      title: "Pizza",
      des: "Classic Italian fast food...",
      cat: "fast food",
    },
  ];

  const filteredData = selectCat === 'All' ? data :  data?.filter(item => item.cat.toLowerCase() == selectCat.toLowerCase())

  console.log(filteredData)

  

  return (
    <div className="my-40">
      <Title
        center={"text-center"}
        subTitle={"Favorite Recipes"}
        title={"Popular Recipe Blogs"}
      />

      <div className="flex gap-2 lg:mx-32 mx-10">
        <button onClick={() => setSelectCat('All')} className={`text-primary rounded-full font-semibold border-[2px] mb-8 ${selectCat === 'All' && 'bg-primary text-white'} border-primary px-4 lg:px-6 py-[2px]`}>
          All
        </button>
        <button onClick={() => setSelectCat('Dessert')} className={`text-primary rounded-full font-semibold border-[2px] mb-8 ${selectCat === 'Dessert' && 'bg-primary text-white'} border-primary px-4 lg:px-6 py-[2px]`}>
          Dessert
        </button>
        <button onClick={() => setSelectCat('Fast Food')} className={`text-primary rounded-full font-semibold border-[2px] mb-8 ${selectCat === 'Fast Food' && 'bg-primary text-white'} border-primary px-4 lg:px-6 py-[2px]`}>
          Fast Food
        </button>
        <button onClick={() => setSelectCat('Salad')} className={`text-primary rounded-full font-semibold border-[2px] mb-8 ${selectCat === 'Salad' && 'bg-primary text-white'} border-primary px-4 lg:px-6 py-[2px]`}>
          Salad
        </button>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-[40px] mx-10 lg:mx-32 justify-center items-center">
        {filteredData.map((item) => (
          <CardCategoryBlog key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryBlogs;
