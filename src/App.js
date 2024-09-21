import { useState } from 'react';
import './App.css';

function App() {
  const [firstname,setFirstname] = useState('')
  const [lastname,setLastname] = useState('')
  const [email,setEmail] = useState('')
  const [contact,setContact] = useState('')
  const [gender,setGender] = useState('')
  const [resume,setResume] = useState('')
  const [url,setUrl] = useState('')
  const [about, setAbout] = useState('')


  const handleSubmit=(e)=>{
   e.preventDefault()
   console.log({firstname,lastname,email,contact,gender,resume,url,about})
  }

  const handleReset=(e)=>{
    setFirstname('')
    setLastname('')
    setEmail('')
    setContact('')
    setGender('')
    setResume('')
    setUrl('')
    setAbout('')
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>First Name<span>*</span></label>
        <input type='text' name='firstname' placeholder='Enter First Name' value={firstname} onChange={(e)=>setFirstname(e.target.value)} required></input>
        <label>Last Name<span>*</span></label>
        <input type='text' name='lastname' placeholder='Enter Last Name' value={lastname} onChange={(e)=>setLastname(e.target.value)} required></input>
        <label>Email<span>*</span></label>
        <input type='email' name='email' placeholder='Enter Your email' value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
        <label>Contact<span>*</span></label>
        <input type='number' name='contact' placeholder='Enter Contact Number' value={contact} onChange={(e)=>setContact(e.target.value)} required></input>
        <label>Gender<span>*</span></label>
        <input type='radio' name='male' value='male' onChange={(e)=>setGender(e.target.value)} required/>Male
        <input type='radio' name='male' value='female' onChange={(e)=>setGender(e.target.value)} required/>Female
        <input type='radio' name='male' value='other' onChange={(e)=>setGender(e.target.value)} required/>Other
        <label>Resume<span>*</span></label>
        <input type='file' name='resume' onChange={(e)=>setResume(e.target.files[0])} required />
        <label>Enter URL<span>*</span></label>
        <input type='url' name='url' value={url} onChange={(e)=>setUrl(e.target.value)} required/>
        <label>About<span>*</span></label>
        <textarea name='about' placeholder='Write About Yourself...' value={about} onChange={(e)=>setAbout(e.target.value)} required/>
          <div className='btn'>
        <button type='submit'>SUBMIT</button>
        <button type='reset' onClick={handleReset}>RESET</button>
        </div>
      </form>
    </div>
  );
}

export default App;
