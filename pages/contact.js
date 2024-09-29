import React, { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [desc, setDesc] = useState('')
  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value)
    } else if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else if (e.target.name === 'phone') {
      setPhone(e.target.value)
    } else if (e.target.name === 'desc') {
      setDesc(e.target.value)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = {
      name,
      email,
      phone,
      desc
    }
    const reset = () => {
      setName('')
      setEmail('')
      setPhone('')
      setDesc('')
    }
    try {
      const res = await fetch('http://localhost:3000/api/postcontact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'content-type': 'application/json'
        }
      })
    
      if (res.ok) {
       alert("success")
      } else {
        console.log("Oops! Something is wrong.")
      }
    } catch (error) {
      console.log(error)
    }
    reset()
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="mb-3">
            <h1>Contact</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" value={name} className="form-control" id="name" aria-describedby="name" name='name' onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" value={email} name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="number" value={phone} className="form-control" id="phone" name='phone' aria-describedby="phone" onChange={handleChange} />
            </div>
            <div className="mb-3">

              <textarea type='text' name="desc" id="desc" value={desc} className="form-control" placeholder='Leave your message' onChange={handleChange} />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  )
}

export default Contact
