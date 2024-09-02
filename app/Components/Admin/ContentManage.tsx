import React, { useState } from 'react';
import Image from 'next/image';
import { Input, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';

export default function ContentManage() {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null); 

 
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setVideo(videoURL);
    }
  };

  const handleImageSend = () => {
    if (image) {
      message.success('Image Uploaded');
    } else {
      message.warning('Please upload an image first');
    }
  };

  const handleVideoSend = () => {
    if (video) {
      message.success('Video Uploaded');
    } else {
      message.warning('Please upload a video first');
    }
  };

  return (
    <div className="flex gap-3 border border-gray-700 p-2 rounded-md">
      <div className="bg-white rounded-md h-full p-4 w-2/3">
        <p className="text-black text-2xl mb-8 capitalize">Manage content.</p>

          <button className='text-black text-2xl'>View</button>

        <hr className="my-2 border-t-2 border-gray-300" />

        <div className='flex gap-3'>
          {/* Image Upload Section */}
          <div className="mb-5 w-1/2">
            <label className="block text-black text-lg mb-2">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mb-4"
            />
            <div className="w-full h-40 border border-slate-600 relative overflow-hidden rounded-md mb-4">
              {image ? (
                <Image
                  src={image}
                  alt="Uploaded Preview"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-md"
                />
              ) : (
                <Image
                  src={'/Images/uploadImage.jpeg'}
                  layout="fill"
                  objectFit="contain"
                  alt="Default Image"
                />
              )}
            </div>
            <button onClick={handleImageSend} className="text-xl text-center p-1 rounded-md border border-gray-300 bg-purple-600 text-white">
              Publish Image
            </button>
          </div>

          {/* Video Upload Section */}
          <div className="mb-5 w-1/2">
            <label className="block text-black text-lg mb-2">Upload Video</label>
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoUpload}
              className="mb-4"
            />
            <div className="w-full h-40 border border-slate-600 relative overflow-hidden rounded-md mb-4">
              {video ? (
                <video
                  src={video}
                  controls
                  className="w-full h-full object-cover rounded-md"
                />
              ) : (
                <Image
                  src={'/Images/video.png'}
                  layout="fill"
                  objectFit="contain"
                  alt="Default Image"
                />
              )}
            </div>
            <button onClick={handleVideoSend} className="text-xl p-1 rounded-md border border-gray-300 bg-blue-600 text-white">
              Publish Video
            </button>
          </div>
        </div>

        <div className="bg-white rounded-md p-2 text-black">
        <p className='text-xl capitalize my-5'>Publish Text Message</p>
        <label className='font-semibold mt-5'>Title:</label>
        <Input placeholder='text title here' className='border-2 border-gray-400 w-1/2 ml-2 mb-3' /><br/>
        <label className='font-semibold mt-3'>Message:</label>
        <TextArea className='border-2 border-gray-400' placeholder='Text Here!'/>
        <button onClick={handleVideoSend} className="text-xl mt-3 p-1 rounded-md border border-gray-300 bg-purple-600 text-white">
             Send Updates
            </button>
      </div>
      </div>
      <div className="bg-white rounded-md p-4 text-black w-1/3">
        <p className='text-xl capitalize'>Published on: 2024/08/12</p>
        <strong className='capitalize mb-3'>Auth: Placide</strong><br />
        <label className='py-3 text-purple-600'>Image Uploaded:</label>
        <div className='border border-gray-400 h-32 rounded flex mt-2 mb-5'>
         <div className='border-r border h-32 w-1/3 border-gray-300'>Image 1</div>
         <div className='border-r border h-32 w-1/3 border-gray-300'>Image 2</div>
         <div className='border-r border h-32 w-1/3 border-gray-300'>Image 3</div>
        </div>
        <label className='py-3 text-purple-600'>Vidoes Uploaded:</label>
        <div className='border border-gray-400 h-32 mb-5 rounded flex mt-2'>
         <div className='border-r border h-32 w-1/3 border-gray-300'>Video 1</div>
         <div className='border-r border h-32 w-1/3 border-gray-300'>Video 2</div>
         <div className='border-r border h-32 w-1/3 border-gray-300'>Video 3</div>
        </div>
        <label className='py-3 text-purple-600'>Content Uploaded:</label>
        <div className='border border-gray-400 h-32 rounded flex mt-2'>
         <div className='border-r border h-32 w-1/3 border-gray-300'>Content 1</div>
         <div className='border-r border h-32 w-1/3 border-gray-300'>Content 2</div>
         <div className='border-r border h-32 w-1/3 border-gray-300'>Content 3</div>
        </div>
      </div>
    </div>
  );
}
