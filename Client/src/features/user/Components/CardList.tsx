import React from 'react';
import { useSelector } from 'react-redux';
import { usersSelector } from '../userSlice';
import Card, { cardProps } from './Card';
import './style.css';
type Props = {
    cards:cardProps[]
}
const CardList:React.FC = () => {
    const arr = [1,2,3,4,5,6,7]
    const users = useSelector(usersSelector)
  return (
    <div className='flex flex-row gap-10 flex-wrap'>
      {users.map((user)=>{
        return <Card key={user.id} name={user.name} email={user.email} photoUrl={user.photoUrl}/>
      })}
        {arr.map((key)=>{
            return <Card key={key} name='Om Thorat' email='omthorat1005@gmail.com' photoUrl='https://wallpapers.com/images/featured/naruto-r5aa4v805ovp5cv4.webp'/>
        })}
    </div>
  );
}

export default CardList;
