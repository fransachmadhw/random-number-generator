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
          <div className='mt-12'>
            <a className='p-2 text-sm flex justify-center items-center gap-2' href='https://github.com/fransachmadhw/random-number-generator' target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              <p>GitHub</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
