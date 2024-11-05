import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Rating } from '@mui/material';
function App() {
 const [principal,setPrincipal] = useState("")
 const [rate,setRate] = useState("")
 const [year,setYear] = useState("")

const[isPrincipal,setIsprincipal]=useState(true)
const[isRate,setIsRate]=useState(true)
const[isYear,setIsYear]=useState(true)

const [interest,setInterest]=useState(0)


 const validate=(e)=>{
  const {name,value}=e.target
  console.log(name);
  console.log(value);
  console.log(value.match('^[0-9]*$'));
  if(!!value.match('^[0-9]*$')){
    if(name=='principal'){
      setPrincipal(value)
      setIsprincipal(true)
    }
    else if(name=='rate'){
      setRate(value)
      setIsRate(true)
    }
    else{
      setYear(value)
      setIsYear(true)
    }
  }
  else{
    if(name=='principal'){
      setPrincipal(value)
      setIsprincipal(false)
    }
    else if(name=='rate'){
      setRate(value)
      setIsRate(false)
    }
    else{
      setYear(value)
      setIsYear(false)
    }
  }

 }

 const reset =()=>{
  setPrincipal("")
  setIsprincipal(true)
  setRate("")
  setIsRate(true)
  setYear("")
  setIsYear(true)
  setInterest(0)
}

const calculate =()=>{
  setInterest((principal*rate*year)/100)
}
  return (
    <>
     <div className='container-fluid w-100' style={{height:"100vh"}}>
        <div className='row pt-5'>
            <div className='col-md-4'></div>
            <div className='col-md-4 '>
             <div className='d-flex align-items-center justify-content-center' style={{width:'100%',height:'100vh'}}>
                <div className='border bg-light w-100 p-5 rounded'>
                    <div className='text-center' >
                      <h1 style={{fontSize:'40px'}}>Simple Interest</h1>
                      <p>Calculate your Simple Interest easily</p>
                    </div>
                    <div className='bg-warning p-3 mt-4 rounded d-flex align-items-center justify-content-center flex-column' style={{height:'150px'}}>
                      <h1>₹ {interest}</h1>
                      <p>Total Simple Interest</p>
                    </div>
                    <div className='my-3'>
                    <TextField id="outlined-basic" className='w-100' label="₹ Principal Amount" name='principal' variant="outlined" value={principal} onChange={(e)=>validate(e)}/>
                    {isPrincipal==false &&  <p className='text-danger'>*Invalid Input</p>}
                    </div>
                    <div className='mb-3'>
                    <TextField id="outlined-basic" className='w-100'value={rate} label="Rate of interest (%)" variant="outlined" name='rate' onChange={(e)=>validate(e)}/>
                    {isRate==false && <p className='text-danger'>*Invalid Input</p>}
                    </div>
                    <div className='mb-3'>
                    <TextField id="outlined-basic"  className='w-100' value={year} label="Year (Yr)" variant="outlined" name='year'onChange={(e)=>validate(e)}/>
                    {isYear==false && <p className='text-danger'>*Invalid Input</p>}
                    </div>
                    <div className='mb-3 d-flex justify-content-between'>
                    <Button disabled={isPrincipal && isRate && isYear? false : true} variant="contained" color='success' className='p-3' style={{width:'150px'}} onClick={
                      calculate
                    }>Calculate</Button>
                    <Button variant="outlined" color='success' className='p-3' style={{width:'150px'}} onClick={reset}>Reset</Button>
                    </div>
                </div>
             </div>
            </div>
            <div className='col-md-4'></div>
        </div>
     </div>
    </>
  )
}

export default App
