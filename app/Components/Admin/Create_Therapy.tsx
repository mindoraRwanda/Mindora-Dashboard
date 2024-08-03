import { Typography, Form, Input, Button } from 'antd';
const Label=Typography;
export default function Create_Therapy() {
  return (

    <div className='flex justify-center'>
      
      <Form className='bg-white p-10 rounded'>
        <p className='text-black mb-8 text-center text-xl font-semibold  '>Create New Therapy</p>

        <div className='grid grid-cols-2 gap-4'>
        <Form.Item >
         <Label class="font-semibold  text-sm mb-2">Names:</Label>
          <Input className="flex w-80 h-3 p-4 rounded mt-2 bg-transparent border border-blue-600" />
        </Form.Item>
        <Form.Item >
         <Label class="font-semibold  text-sm mb-2">Email:</Label>
          <Input className="flex w-80 h-3 p-4 rounded mt-2 bg-transparent border border-blue-600" />
        </Form.Item>
        <Form.Item >
          <Label class="font-semibold  text-sm mb-2"> Ages:</Label>
          <Input className='flex w-80 h-3 p-4 rounded mt-2 bg-transparent border border-blue-600'/>
        </Form.Item>
        <Form.Item>
          <Label class="font-semibold  text-sm mb-2">Speciality:</Label>
          <Input className='flex w-80 h-3 p-4 rounded mt-2 bg-transparent border border-blue-600'/>
        </Form.Item>
        <Form.Item>
          <Label class="font-semibold  text-sm mb-2">Address:</Label>
          <Input className='flex w-80 h-3 p-4 rounded mt-2 bg-transparent border border-blue-600'/>
        </Form.Item>
       
        <Form.Item >
        <Label class="font-semibold  text-sm mb-2">Gender:</Label> 
        <input class="form-check-input text-2xl" type="radio" name="gender" id="gender" value="male"/>Male
        <input class="form-check-input text-2xl ml-3" type="radio" name="gender" id="gender" value="female"/>Female  
        <input class="form-check-input text-2xl ml-3" type="radio" name="gender" id="gender" value="other"/>Others    
         </Form.Item>


        </div>
      
        <Form.Item className='text-center'>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    
    </div>
  
   
  );
}
