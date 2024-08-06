import { message, Modal } from 'antd';
import  Image  from 'next/image';
import { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { IoAddCircle } from "react-icons/io5";
import { BiShow } from "react-icons/bi";
import { MdDelete,MdRemoveCircle,MdTipsAndUpdates,MdAddBox  } from "react-icons/md";
import { BsPersonFillExclamation } from "react-icons/bs";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { Input } from 'postcss';
export default function Roles(){
    const [isModalVisible,setIsModalVisible]=useState(false);

const handleModal=()=>{
    setIsModalVisible(true);

}

const handleCancel=()=>{
    setIsModalVisible(false);
}

const messageHandle=()=>{
    message.info("Permission changed Successfully");
}

    return(
    <div>
        <div className="bg-white rounded-md shadow-lg p-6 w-1/2">
        <p className=" text-2xl text-black"> Users Permissions</p>
        <div className='border-y-2 mt-5 flex items-center  border-slate-100'>
        <Image src="/Images/jane.jpg" alt="example" width={50} height={40} className='rounded-full p-1'/>
        <p className='ml-2 font-semibold text-lg text-black mt-3'>Jean Deo</p>
        <button className='ml-auto border-2 rounded-lg bg-purple-600 text-white px-3 py-2 ' onClick={handleModal}> Open</button>
        </div>
        <div className='border-y-2 mt-5 flex items-center  border-slate-100'>
        <Image src="/Images/beauty1.jpg" alt="example" width={50} height={40} className='rounded-full p-1'/>
        <p className='ml-2 font-semibold text-lg text-black mt-3'>Bob Mallie</p>
        <button className='ml-auto  border-2 rounded-lg bg-purple-600 text-white px-3 py-2 ' onClick={handleModal}> Open</button>
        </div>
         <div className='border-y-2 mt-5 flex items-center border-slate-100'>
        <Image src="/Images/beauty9.jpg" alt="example" width={50} height={40} className='rounded-full p-1'/>
        <p className='ml-2 font-semibold text-lg text-black mt-3'>Deo Martin</p>
       
        <button className='ml-auto  border-2  rounded-lg bg-purple-600 text-white px-3 py-2 ' onClick={handleModal}> Open</button>
        </div>
        </div>
        <Modal 
        title="Assign Permissions to User"
       visible={isModalVisible}
       footer={null}
       onCancel={handleCancel}
        >
        <div className='flex text-lg mt-5'>
           <MdAddBox size={24} color='green'/> <p className='ml-2'>create new patient</p>
           <input className='form-check-box size-6 p-3 ml-auto' type='checkbox' name='permit' value="permit" onClick={messageHandle}/>
        </div>

        <div className='flex text-lg mt-5'>
           <BiShow  size={24} color='blue'/> <p className='ml-2'>View the patient details</p>
           <input className='form-check-box size-6 p-3 ml-auto ' type='checkbox' name='permit' value="permit" onClick={messageHandle}/>
        </div>

          <div className='flex text-lg mt-5'>
           <CiEdit size={24} color='black'/> <p className='ml-2'>Edit the patient details</p>
           <input className='form-check-box size-6 p-3 ml-auto' type='checkbox' name='permit' value="permit" onClick={messageHandle}/>
        </div>
       
        <div className='flex text-lg mt-5'>
           <MdDelete size={24} color='red'/> <p className='ml-2'>Delete patient details</p>
           <input className='form-check-box size-6 p-3 ml-auto' type='checkbox' name='permit' value="permit" onClick={messageHandle}/>
        </div>

        <div className='flex text-lg mt-5'>
           <BsPersonFillExclamation size={24} color='purple'/> <p className='ml-2'>Make appointment</p>
           <input className='form-check-box size-6 p-3 ml-auto' type='checkbox' name='permit' value="permit" onClick={messageHandle}/>
        </div>

        <div className='flex text-lg mt-5'>
           <MdTipsAndUpdates size={24} color='green'/> <p className='ml-2'>Update appointment</p>
           <input className='form-check-box size-6 p-3 ml-auto' type='checkbox' name='permit' value="permit" onClick={messageHandle}/>
        </div>

        <div className='flex text-lg mt-5'>
           <MdRemoveCircle size={24} color='red'/> <p className='ml-2'>Remove appointment</p>
           <input className='form-check-box size-6 p-3 ml-auto' type='checkbox' name='permit' value="permit" onClick={messageHandle}/>
        </div>
       
        </Modal>
    </div>
);
}