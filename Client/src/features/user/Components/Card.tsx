import React from 'react';
import './style.css';

export type cardProps = {
    photoUrl:string;
    email:string;
    name:string;
}
const Card:React.FC<cardProps> = ({name,email,photoUrl}) => {
  return (
    <div className='card flex flex-col items-center p-4'>
        <div className='image w-24 h-24 flex rounded-full align-items-center '>
            <img src={photoUrl} alt='naruto' className='profile-picture' />
        </div>
        <div className='flex flex-col items-center'>
            <p className='text-black'>{email}</p>
            <p className='text-black'>{name}</p>
        </div>
    </div>
  );
}

export default Card;
