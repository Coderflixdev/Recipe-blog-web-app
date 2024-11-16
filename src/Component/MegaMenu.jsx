

const MegaMenu = () => {
    return (
        <div
        className="hidden group-hover:flex flex-col absolute left-0 p-20 w-full bg-base z-20 text-black duration-300">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 justify-center">
            <div className="flex flex-col">
                <h3 className="mb-4 text-2xl text-primary">Recipe 1</h3>
                <a href="#" className="hover:underline hover:text-primary">Fast Food</a>
                <a href="#" className="hover:underline hover:text-primary">Salad</a>
                <a href="#" className="hover:underline hover:text-primary">Dessert</a>
                <a href="#" className="hover:underline hover:text-primary">Juces</a>
            </div>

            <div className="flex flex-col">
                <h3 className="mb-4 text-2xl text-primary">Recipe 2</h3>
                <a href="#" className="hover:underline hover:text-primary">Fast Food</a>
                <a href="#" className="hover:underline hover:text-primary">Salad</a>
                <a href="#" className="hover:underline hover:text-primary">Dessert</a>
                <a href="#" className="hover:underline hover:text-primary">Juces</a>
            </div>

            <div className="flex flex-col">
                <h3 className="mb-4 text-2xl text-primary">Recipe 2</h3>
                <a href="#" className="hover:underline hover:text-primary">Fast Food</a>
                <a href="#" className="hover:underline hover:text-primary">Salad</a>
                <a href="#" className="hover:underline hover:text-primary">Dessert</a>
                <a href="#" className="hover:underline hover:text-primary">Juces</a>
            </div>

            <div className="flex flex-col">
                <h3 className="mb-4 text-2xl text-primary">Recipe 3</h3>
                <a href="#" className="hover:underline hover:text-primary">Fast Food</a>
                <a href="#" className="hover:underline hover:text-primary">Salad</a>
                <a href="#" className="hover:underline hover:text-primary">Dessert</a>
                <a href="#" className="hover:underline hover:text-primary">Juces</a>
            </div>

           

          
        </div>
    </div>
    );
};

export default MegaMenu;