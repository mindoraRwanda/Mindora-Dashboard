import { Typography, Form, Input, Button,Radio } from 'antd';
import { useState } from 'react';
const Label =Typography;
export default function Create_User({addUser}){

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [age,setAge]=useState("");
const [gender,setGender]=useState("");

const handleSubmit=()=>{
  const newUser={
    name,
    email,
    lastLogin:new Date().toISOString().split("T")[0],
    age,
    gender
  };

  addUser(newUser);

};

    return(
        <div className='flex justify-center'>
      
        <Form className='bg-white rounded'>
          <p className='text-black mb-8 text-center text-xl font-semibold'>Create New User</p>
  
          <div className='grid grid-cols-1 gap-4'>
          <Form.Item  >
           <Label class="font-semibold  text-sm mb-2">Names:</Label>
            <Input className="flex w-96 h-5  p-4 rounded mt-2 bg-transparent border border-blue-600" 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
          </Form.Item>
          <Form.Item >
           <Label class="font-semibold  text-sm mb-2">Email:</Label>
            <Input className="flex w-96 h-3  p-4 rounded mt-2 bg-transparent border border-blue-600" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item >
            <Label class="font-semibold  text-sm mb-2"> Ages:</Label>
            <Input className='flex w-96 h-3 pr-10 p-4 rounded mt-2 bg-transparent border border-blue-600'
            value={age}
            onChange={(e)=>setAge(e.target.value)}
            />
          </Form.Item>
          {/* <Form.Item>
            <Label class="font-semibold  text-sm mb-2">Kind of User:</Label>
            <Input className='flex w-80 h-3 p-4 rounded mt-2 bg-transparent border border-blue-600'/>
          </Form.Item>
          <Form.Item>
            <Label class="font-semibold  text-sm mb-2">Address:</Label>
            <Input className='flex w-80 h-3 p-4 rounded mt-2 bg-transparent border border-blue-600'/>
          </Form.Item> */}
         
          <Form.Item >
          <Label class="font-semibold  text-sm mb-2">Gender:</Label> 
          <Radio.Group>
        {/* <input class="form-check-input text-2xl" type="radio" name="gender" id="gender" value="male" onChange={(e)=>setGender(e.target.value)}/>Male */}
        {/* {/* <input class="form-check-input text-2xl ml-3" type="radio" name="gender" id="gender" value="female" onChange={(e)=>setGender(e.target.value)}/>Female   */} 
        {/* {/* <input class="form-check-input text-2xl ml-3" type="radio" name="gender" id="gender" value="other" onChange={(e)=>setGender(e.target.value)}/>Others    */} 
  <Radio value="male" onChange={(e)=>setGender(e.target.value)}>Male</Radio>
  <Radio value="female" onChange={(e)=>setGender(e.target.value)}>Female</Radio>
  <Radio value="Others" onChange={(e)=>setGender(e.target.value)}>Others</Radio> 
        </Radio.Group>   
           </Form.Item>
  
  
          </div>
        
          <Form.Item className='text-center'>
            <Button type="primary" onClick={handleSubmit}>Submit</Button>
          </Form.Item>
        </Form>
      
      </div>
    )
}