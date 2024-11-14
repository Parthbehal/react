import { useState } from 'react'; 
function App() {
  const[color,setColor]=useState("olive")//default rhega
  return (
   <div className="w-full h-screen duration-200"//giving properties justt tailwind css ha
   style={{backgroundColor:color}}
   >

    <div className="fixed flex flex-wrap    
      justify-center bottom-12 inset-x-0 px-2"> 
      <div className=" flex flex-wrap justify-center
      gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button
        onClick={() => setColor("red")}
         className="outline-none px-4 rounded-full text-white "//sab aaik ke andar properties ha onclick par ha  function  sybtax aacha ha tabhi
        style={{backgroundColor:""}}
        > Red</button>
         <button
           onClick={() => setColor("green")}
          className="outline-none px-4 rounded-full text-white "
        style={{backgroundColor:"green"}}
        > Green</button>
         <button
          onClick={() => setColor("orange")}
          className="outline-none px-4 rounded-full text-white "
        style={{backgroundColor:"orange"}}
        >Orange</button>
         <button 
          onClick={() => setColor("violet")}
         className="outline-none px-4 rounded-full text-white "
        style={{backgroundColor:"violet"}}
        > Violet</button>
         <button
          onClick={() => setColor("blue")}
         className="outline-none px-4 rounded-full text-white "
        style={{backgroundColor:"blue"}}
        >Blue</button>
        <button
           onClick={() => setColor("black")}
          className="outline-none px-4 rounded-full text-white "
        style={{backgroundColor:"black"}}
        >Black</button>

      </div>



     </div>
   </div>
  )
}

export default App
