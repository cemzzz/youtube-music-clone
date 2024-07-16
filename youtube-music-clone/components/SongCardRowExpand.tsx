"use client"
import { TopSong } from '@/types';
import Image from 'next/image';
import React from 'react'
import { FiPlayCircle } from "react-icons/fi";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { FiMoreVertical } from "react-icons/fi";
import IconButton from './elements/IconButton';
import { useRouter } from 'next/navigation';
import usePlayerState from '@/hooks/usePlayerState';

interface SongCardRowExpandProps {
    song: Song;
}

const SongCardRowExpand:React.FC<SongCardRowExpandProps> = ({ song }) => {
  const {channel, channelId} = song;
  const { push } = useRouter();
  const {addSongList} = usePlayerState();
  
  const onclickChannel = () => {
    push(`/channel/${channelId}`)
  }

  const onClickPlay = ()=>{
    addSongList([song])
  }

  return (
    <article 
        className='
        flex flex-row items-center gap-4 h-[48] w-full
        relative group
    '>
        <div className='w-[48px] h-[48px] relative'>
            <Image src={song.imageSrc} alt="img" fill className='object-cover'/>
            <section 
                onClick={onClickPlay}
                className='hidden group-hover:flex absolute top-0 w-[48px] h-[48px] items-center justify-center bg-[rgba(0,0,0,0.7)] cursor-pointer'>
                <FiPlayCircle size={20}/>
            </section>
        </div>
        <div className='flex flex-row items-center gap-4 justify-between basis-1/3'>
            <div className='w-[150px] truncate'>
                {song.name}
            </div>
            <div onClick={onclickChannel} className='text-neutral-500 hover:underline cursor-pointer'>
                {channel}
            </div>
            <section className='hidden group-hover:flex absolute top-0 right-0 flex-row items-center justify-end h-[48px] w-[120px] bg-[rgba(0,0,0,0.8)] '>
                <IconButton icon={ <FiThumbsDown size={20}/> } />
                <IconButton icon={ <FiThumbsUp size={20}/> } />
                <IconButton icon={ <FiMoreVertical size={20}/> } />
            </section>
        </div>
    </article>
  )
}

export default SongCardRowExpand
