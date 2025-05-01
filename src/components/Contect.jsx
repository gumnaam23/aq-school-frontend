import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Contect = () => {

  const [name, setname] = useState('');
  const [message, setmessage] = useState('')
  const [responseMessage, setresponseMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
     const sendingMessage = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/contect`,
        {
          name,
          message
        },
        {
          headers:{
            "Content-Type": "application/json"
          },
          withCredentials: true
        }
      )
      setresponseMessage(sendingMessage.data.message)
      setname('')
      setmessage('')
    } catch (error) {

      const errorMsg = error?.response?.data?.message || error.message;

      console.log(error)
      
      if (
        errorMsg === "unauthorized token found" ||
        errorMsg === "Invalid or expire token found"
      ) {
        navigate('/login');
        return;
      }

      if(error.name == "ValidationError"){

        console.error('send message error', errorMsg)
        setresponseMessage(errorMsg)

      }else{

        console.error("Internal server error", error);
        setresponseMessage(errorMsg)

      }
      
    }
  }

  return (
    <section className='contect_section' id='contect'>

      <h3>Contect Us</h3>
      <form className='contect_container' onSubmit={handleSubmit}>

        <input required type="text" value={name} minLength={4} onChange={e=> setname(e.target.value)} placeholder='Your Name' />
        <textarea required minLength={10} maxLength={100} name="" value={message} onChange={e=> setmessage(e.target.value)} placeholder='Your Message' id=""></textarea>
        <button type='submit'>Send</button>
    <p>{responseMessage}</p>
      </form>

    </section>
  )
}

export default Contect
