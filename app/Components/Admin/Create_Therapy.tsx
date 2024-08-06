import { Typography, Form, Input, Button,Radio } from 'antd';
import { useState } from 'react';
const Label=Typography;

export default function Create_Therapy({Add_Therapy}) {

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [specialty,setSpecialty]=useState("");
const [patients,setPatients]=useState("");
const [gender,setGender]=useState("");
const [form]=Form.useForm();

const handleClick=()=>{
  const newTherapy={
  name,
  email,
  lastLogin:new Date().toISOString().split("T")[0],
  specialty,
  patients,
  gender
};
Add_Therapy(newTherapy);

};


  return (

    <div className='flex justify-center'>
      
      <Form className='bg-white  rounded'>
        <p className='text-black mb-8 text-center text-xl font-semibold  '>Create New Therapy</p>

        <div className='grid grid-cols-1 gap-4'>
        <Form.Item name="name" rules={[{required:true, message:'Please enter your Names'}]} >
         <Label class="font-semibold  text-sm mb-2">Names:</Label>
          <Input className="flex w-80 h-3 p-4 rounded  bg-transparent border border-blue-600"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        </Form.Item>
        <Form.Item name="email" rules={[{required:true, message:'Please Enter your Email'}]} >
         <Label class="font-semibold  text-sm mb-2">Email:</Label>
          <Input className="flex w-80 h-3 p-4 rounded  bg-transparent border border-blue-600" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item name="specialty" rules={[{required:true, message:'Please enter your Speciality'}]}>
          <Label class="font-semibold  text-sm mb-2"> specialty:</Label>
          <Input className='flex w-80 h-3 p-4 rounded  bg-transparent border border-blue-600'
          value={specialty}
          onChange={(e)=>setSpecialty(e.target.value)}
          />
        </Form.Item>
        {/* <Form.Item>
          <Label class="font-semibold  text-sm mb-2">Speciality:</Label>
          <Input className='flex w-80 h-3 p-4 rounded  bg-transparent border border-blue-600'/>
        </Form.Item>
         */}
        <Form.Item name="patients" rules={[{required:true, message:'Please Enter the number of Patients '}]}>
          <Label class="font-semibold  text-sm mb-2">patients:</Label>
          <Input className='flex w-80 h-3 p-4 rounded  bg-transparent border border-blue-600'
          value={patients}
          onChange={(e)=>setPatients(e.target.value)}/>
        </Form.Item>
       
        <Form.Item name="gender" rules={[{required:true, message:'Please select Gender'}]} >
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
          <Button type="primary" onClick={handleClick}>Submit</Button>
        </Form.Item>
      </Form>
    
    </div>
  
   
  );
}
