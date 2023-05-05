import React from 'react';
import Marquee from 'react-fast-marquee';

const CardMarquee = () => {
    return (
        <div className='p-10 '>
            <Marquee direction='left' speed={100}  childMargin={20}>
            <div className="bg-white rounded-md shadow-md  m-4 w-3/4">
            <div className="relative grid grid-cols-1 gap-4  mb-8 border rounded-lg bg-white shadow-lg">
    <div className="relative flex gap-4">
        <img src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png" className="relative rounded-full -top-8 -mb-4 bg-gray-200 border h-20 w-20" alt="" loading="lazy"/>
        <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between">
                <p className="relative text-xl whitespace-nowrap truncate text-red-400 overflow-hidden">M.Jhon</p>
                <a className="text-gray-500 text-xl" href="#"><i className="fa-solid fa-trash"></i></a>
            </div>
            <p className="text-gray-400 text-sm">20 April 2022, at 14:88 PM</p>
        </div>
    </div>
    <p className="-mt-4 p-2 text-gray-500">I had the pleasure of being taught by Chef  and I can confidently say that their teaching was top-notch. <br /> I highly recommend Chef to anyone looking to learn or improve their culinary skills.</p>
</div>
</div>

</Marquee>
        </div>
    );
};

export default CardMarquee;