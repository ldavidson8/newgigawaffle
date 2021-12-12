import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Script from 'next/script';


export const ServiceCard = (props) => {
    return (
      <>
        <div className="bg-gray-50 shadow-card rounded-xl mb-4  text-center lg:text-left flex flex-col lg:flex-row items-center">
            <div className="max-w-[100px]">
                <img
                src={props.imageSrc}
                alt=""
                className="p-4 mx-auto w-24 lg:w-44 2xl:w-32"
                />
            </div>
            <div>
                <h2 className="font-bold text-lg mx-2 pt-4">
                {props.title}
                </h2>
                <p className="text-md mx-2 pb-4">
                {props.description}
                </p>
            </div>
        </div>
        {/*
        <div className="switching-card w-smcard tab:w-tabcard mobile:w-full bg-gray-100 shadow-lg rounded-lg mx-auto mb-5 mobile:col-span-3">
            <h4 className="ml-4 mr-4 mt-4 text-black font-neue font-medium text-card">{props.title}</h4>
            <div className="flex min-h-cardcontent mobile:min-h-cardcontentmb">
                <p className="w-6/10 mobile:w-8/10 ml-4 mt-4 mr-2 font-neue text-cardbody mobile:text-smalltxt line-clamp-7">{props.body}</p>
                <img className="w-4/10 mobile:w-2/10 h-cardimg object-contain" src={props.image} h="135px"></img>
            </div>
            <div className="mb-4 mt-4">
                <a className="ml-4 text-swapmyteal font-neue text-smalltxt font-medium" href={props.link}>Learn More</a>
            </div>
        </div>
        */}
      </>
    )
};

