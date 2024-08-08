import { message, Modal } from 'antd';
import  Image  from 'next/image';
import { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { IoAddCircle } from "react-icons/io5";
import { BiShow } from "react-icons/bi";
import { MdDelete,MdRemoveCircle,MdTipsAndUpdates,MdAddBox  } from "react-icons/md";
import { BsPersonFillExclamation } from "react-icons/bs";
import { VscGitPullRequestCreate } from "react-icons/vsc";

export default function Roles(){
    const [isModalVisible,setIsModalVisible]=useState(false);
    const [selectedUser,setSelectedUser]=useState(null);
    const [permissions, setPermissions] =useState({
        'Jean Deo':['create','edit'],
        'Bob Dallot':['create','remove'],
        'christella':['create','change appointment']
    });

const handleModal=(user)=>{
    setSelectedUser(user);
    setIsModalVisible(true);

}

const handleCancel=()=>{
    setIsModalVisible(false);
    setSelectedUser(null);
}

// const messageHandle=()=>{
//     message.info("Permission changed Successfully");
// }

const messageHandle=(permission,isChecked)=>{
    if(selectedUser){
        setPermissions((prev)=>{
            const userPermissions=new Set(prev[selectedUser]);
            if(isChecked){
                userPermissions.add(permission);

            }
            else {
                userPermissions.delete(permission);
            }
            return{

                ...prev,[selectedUser]:Array.from(userPermissions)
            };
        });

        message.success('Permission changed successfully');
    }
}
    return(
    <div>
        <div className="bg-white rounded-md shadow-lg p-6 w-1/2">
        <p className=" text-2xl text-black"> Users Permissions</p>
 {/* user1 */}
        <div className='border-y-2 mt-5 items-center border-slate-200'>
         <div className='flex'>
        <Image src="/Images/jane.jpg" alt="example" width={100} height={30} className='rounded-md p-1'/>
        <p className='ml-2 font-semibold text-lg text-black mt-8'>Jean Deo</p>
        <button className='ml-auto  text-purple-600 py-2 px-1 flex mt-14' onClick={()=>handleModal('Jean Deo')}><MdAddBox size={40}/></button>
       </div>
       <div className='flex'><strong className='text-black'>Role:</strong><p className='text-black'>Mental Therapy</p> </div>
       <div> <label className='text-black text-md  flex'> <strong>Age:</strong> <p className='text-black'>20 years old</p></label></div>

        <div> <label className='text-black text-md  flex'><strong>Permissions:</strong><p className='text-black'>{permissions['Jean Deo'].join(',')}</p> </label></div>
        </div>

{/* user 2 */}

        <div className='border-y-2 mt-5 items-center border-slate-200'>
         <div className='flex'>
        <Image src="/Images/beauty1.jpg" alt="example" width={100} height={50} className='rounded-md p-1'/>
        <p className='ml-2 font-semibold text-lg text-black mt-8'>Bob dallot</p>
        <button className='ml-auto  text-purple-600 py-2 px-1 flex mt-14' onClick={()=>handleModal('Bob Dallot')}><MdAddBox size={40}/></button>
       </div>
       <div className='flex'><strong className='text-black'>Role:</strong><p className='text-black'>Mental Therapy</p> </div>
       <div> <label className='text-black text-md  flex'> <strong>Age:</strong> <p className='text-black'>20 years old</p></label></div>

        <div> <label className='text-black text-md  flex'><strong>Permissions:</strong><p className='text-black'>{permissions['Bob Dallot'].join(',')}</p> </label></div>
        </div>

{/* user3 */}

        <div className='border-y-2 mt-5 items-center border-slate-200'>
         <div className='flex'>
        <Image src="/Images/beauty9.jpg" alt="example" width={100} height={50} className='rounded-md p-1'/>
        <p className='ml-2 font-semibold text-lg text-black mt-8'> Christella</p>
        <button className='ml-auto  text-purple-600 py-2 px-1 flex mt-14' onClick={()=>handleModal('christella')}><MdAddBox size={40}/></button>
       </div>
       <div className='flex'><strong className='text-black'>Role:</strong><p className='text-black'>Mental Therapy</p> </div>
       <div> <label className='text-black text-md  flex'> <strong>Age:</strong> <p className='text-black'>20 years old</p></label></div>

        <div> <label className='text-black text-md  flex'><strong>Permissions:</strong><p className='text-black'> {permissions['christella'].join(',')}</p> </label></div>
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
           <input className='form-check-box size-6 p-3 ml-auto' type='checkbox' name='permit' value="create" onClick={(e)=>messageHandle('create',e.target.checked)}/>
        </div>

        <div className='flex text-lg mt-5'>
           <BiShow  size={24} color='blue'/> <p className='ml-2'>View the patient details</p>
           <input className='form-check-box size-6 p-3 ml-auto ' type='checkbox' name='permit' value="view" onClick={(e)=>messageHandle('view',e.target.checked)}/>
        </div>

          <div className='flex text-lg mt-5'>
           <CiEdit size={24} color='black'/> <p className='ml-2'>Edit the patient details</p>
           <input className='form-check-box size-6 p-3 ml-auto' type='checkbox' name='permit' value="edit" onClick={(e)=>messageHandle('edit',e.target.checked)}/>
        </div>
       
        <div className='flex text-lg mt-5'>
           <MdDelete size={24} color='red'/> <p className='ml-2'>Delete patient details</p>
           <input className='form-check-box size-6 p-3 ml-auto' type='checkbox' name='permit' value="delete" onClick={(e)=>messageHandle('delete',e.target.checked)}/>
        </div>

        <div className='flex text-lg mt-5'>
           <BsPersonFillExclamation size={24} color='purple'/> <p className='ml-2'>Make appointment</p>
           <input className='form-check-box size-6 p-3 ml-auto' type='checkbox' name='permit' value="make appointment" onClick={(e)=>messageHandle('make appointment',e.target.checked)}/>
        </div>

        <div className='flex text-lg mt-5'>
           <MdTipsAndUpdates size={24} color='green'/> <p className='ml-2'>Update appointment</p>
           <input className='form-check-box size-6 p-3 ml-auto' type='checkbox' name='permit' value="update appointment" onClick={(e)=>messageHandle('update appointment',e.target.checked)}/>
        </div>

        <div className='flex text-lg mt-5'>
           <MdRemoveCircle size={24} color='red'/> <p className='ml-2'>Remove appointment</p>
           <input className='form-check-box size-6 p-3 ml-auto' type='checkbox' name='permit' value="remove appointment" onClick={(e)=>messageHandle('remove appointment',e.target.checked)}/>
        </div>
       
        </Modal>
    </div>
);
}