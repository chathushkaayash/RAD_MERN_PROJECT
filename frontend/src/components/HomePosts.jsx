const Homeposts = () => {

    


    return (
      <div className="flex w-full mt-8 space-x-4 ">
       
       <div className="w-[35%] h-[200px] flex justify-center items-center">
            <img src ="http://www.debraduffydds.com/wp-content/uploads/2015/01/drinking-water.jpg" alt = "" className="object-cover w-full h-full"/>

        </div>
        
        <div className="flex flex-col w-[65%]">
        <h1 className="mb-1 text-xl font-bold md:mb-2 md:text-2xl">How to drink water in the correct way</h1>
        <div className="flex items-center justify-between mb-2 text-sm font-semibold text-gray-500 md:mb-4">
            <p>@senuputha</p>
            <div className="flex space-x-2 text-sm">
                <p>09/05/2023</p>
                 <p>11:40</p>        
            </div>
        </div>
        <p className="text-sm md:text-lg">the whimsical town of Sipsville, they took drinking water to a whole new level. Meet Wally the Water Wizard, who believed hydration was an art. He wore a water hat with a built-in straw and danced while sipping, wiggling like a water waltzer. His grand finale? A spectacular water-balloon stunt, squeezing a balloon over his head with a flourish, causing a hilarious shower. Sipsville's folks laughed and learned: hydrating could be a splashy affair. </p>
        </div>
        
      </div>
    );
  }
  
  export default Homeposts;