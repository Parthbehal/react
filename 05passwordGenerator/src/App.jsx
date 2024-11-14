import { useState, useCallback, useEffect,useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

//use Refhook
const passwordRef =useRef(null)//abhi koi nhi ha reference

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";//if trur then add the numbers
    if (charAllowed) str += "!@#$%^&*-+=_";
//creating a password  now and now it ia determined by the  the length given
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);//passing the pass by charAt method
    }

    
    setpassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const CopyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()//to highlight the copied text 
   
    window.navigator.clipboard.writetext(password)//fix hi ha yaar ye
  },[password])

useEffect(()=>{
  passwordGenerator()
},
[length, numberAllowed, charAllowed,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg ps-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-center text-white my-3">Password Generator</h1>
        
        <div className="flex items-center rounded-lg overflow-hidden mb-4"> {/* Use flex to align input and button */}
          
          <input
            type="text"//focus on the syntax of the  input
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          
          <button 
          onClick={CopyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        
        </div>
        <div className=" flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
            type="range"
             min={6}//creating input for every  functions
             max={100}
             value={length}
             className="cursor-pointer"
             onChange={(e)=>{setLength(e.target.value)}}/>
             <label>Length:{length}</label>
          </div>
          <div className="Flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);//false ka true
            }}
            />
            <label htmlFor="numberInput">Number</label>

          </div>
          <div className="Flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            />
            <label htmlFor="numberInput">Character</label>

          </div>


        </div>
      </div>
    </>
  );
}

export default App;
