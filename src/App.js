import React from 'react';
import './style.css';

function App() {
  const [numbers, setNumbers] = React.useState([])
  const [inputtedNumber, setInputtedNumber] = React.useState(0)
  const [displayedNum, setDisplayedNum] = React.useState()

  function inputNumber() {
    setNumbers([...numbers, inputtedNumber])
  }

  function generate() {
    const random = Math.floor(Math.random() * numbers.length)
    setDisplayedNum(numbers[random])
  }

  return (
    <div className="w-full h-full text-violet-500">
      <div className='max-w-[1000px] h-full mx-auto my-auto'>
        <div className='h-full flex flex-col gap-5 justify-center items-center px-7 py-24'>
          <h1 className='text-4xl font-bold uppercase text-center'>Random Number Picker by Frans</h1>
          <div className='text-xl font-medium text-center flex flex-col justify-center items-center'>
            <p>Available numbers</p>
            <p className='w-9/12 '>{numbers.length ? numbers.join(', ') : 'You haven\'t inputted any number'}</p>
            {/* <p>Inputted numbers = {inputtedNumber}</p> */}
          </div>
          <div className='flex items-center gap-5'>
            <input
              type='number'
              placeholder='Input number'
              className='px-4 w-[120px] h-[90px] text-4xl rounded-lg bg-[#1f1e1e] border-2 border-violet-500'
              name='number'
              value={inputtedNumber}
              onChange={(e) => setInputtedNumber(+e.target.value)}
            />
            <button className='bg-violet-500 text-[#1f1e1e] font-bold px-5 py-3 rounded hover:bg-violet-700 active:scale-90' onClick={inputNumber}>Input</button>
          </div>
          <div className='pt-5 flex flex-col justify-center items-center gap-5'>
            <button className='bg-violet-500 text-[#1f1e1e] text-2xl font-bold px-5 py-3 rounded hover:bg-violet-700 active:scale-90' onClick={generate}>Generate</button>
            <div className='text-7xl font-medium'>
              {/* <p>{numbers[Math.floor(Math.random() * numbers.length)]}</p> */}
              <p>{displayedNum}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
