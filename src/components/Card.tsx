import React from 'react'
import Image from 'next/image';
import "../app/styles/card.css";

interface propsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  return (
    <div className={`sm:card card-sm`} data-aos="zoom-in-up">
    <div>
        <Image className={`sm:card-image card-image-sm`} 
        src={img}
        width={350}
        height={350}
        alt={title}
        />
    </div>


    <div className='card-content'>
        <div className='card-title'>{title}</div>
        <div>{desc}</div>
        <div>
            {tags.map((el) => (<div className='card-tags' key={el}>{el}</div>))}
        </div>
    </div>
      
    </div>
  )
}
export default Card;