import  {useState} from 'react';
import './App.css'
import axios from 'axios';

function App () {
  const[formData, setFormData] = useState({
    name:'',
    email:'',
    message:'',
  });

  const handleChange =(e) => {         
    const{name, value} = e.target;
    setFormData({                   
      ...formData,                 
      [name]: value                 
    });
 };

 const handleSubmit = async(e) =>{
  e.preventDefault();               
  try{
    const response = await axios.post('http://localhost:3001/submit',formData);
    console.log(response.data);       
    alert('form Submitted successfully');
  }catch(error){
    console.error('Enter Submitting form',error);
    alert('Failed to submit form');
  }
 };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>name: </label>
        <input type='text' name='name' value={formData.name} onChange={handleChange} required/>
      </div>
      <div>
        <label>email: </label>
        <input type='email' name='email' value={formData.email} onChange={handleChange} required/>
      </div>
      <div>
        <label>message: </label>
        <input type='message' name='message' value={formData.number} onChange={handleChange} required/>
      </div>
      <div>
        
        <button type="submit">Submit!</button>
      </div>
      </form>
  )
}

export default App