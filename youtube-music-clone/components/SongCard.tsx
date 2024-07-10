"use client"
import { TopSong } from '@/types';
import Image from 'next/image';
import React from 'react'
import { FaCircle } from "react-icons/fa";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { FiPlayCircle } from "react-icons/fi";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { FiMoreVertical } from "react-icons/fi";
import IconButton from './elements/IconButton';

interface SongCardProps {
    song: TopSong;
}

const SongCard:React.FC<SongCardProps> = ({ song }) => {
  return (
    <article 
        className='
        flex flex-row items-center gap-4 h-[48] w-full
        relative group
    '>
        <div className='w-[48px] h-[48px] relative'>
            <Image src={song.imageSrc} alt="img" fill className='object-cover'/>
            <section className='hidden group-hover:flex absolute top-0 w-[48px] h-[48px] items-center justify-center bg-[rgba(0,0,0,0.7)] cursor-pointer'>
                <FiPlayCircle size={20}/>
            </section>
        </div>
        <div className='flex flex-row items-center gap-4'>
            <div>
            {
                song.rank === song.prevRank ? <FaCircle size={10}/> :
                song.rank > song.prevRank ? <AiOutlineCaretUp color="#3CA63F" size={10} /> :
                <AiOutlineCaretDown color="#FF0000" size={10} />
            }
            </div>
            <div>
                {song.rank + 1}
            </div>
            <div className=''>
                {song.name}
            </div>
            <section className='hidden group-hover:flex absolute top-0 right-0 flex-row items-center justify-end h-[48px] w-1/2 bg-[rgba(0,0,0,0.8)] '>
                <IconButton icon={ <FiThumbsDown size={20}/> } />
                <IconButton icon={ <FiThumbsUp size={20}/> } />
                <IconButton icon={ <FiMoreVertical size={20}/> } />
            </section>
        </div>
    </article>
  )
}

export default SongCard
