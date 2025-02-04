"use client"
import usePlayerState from '@/hooks/usePlayerState';
import React from 'react'
import { IoPlayCircle } from "react-icons/io5";

const PlayListNav = ({playlist}) => {
  const { addSongList } = usePlayerState ()
  const {id, owner, playlistName, songList} = playlist;
  const onClickPlay = () => {
    addSongList(songList)
  };

  return (
    <li className='mx-3 px-4 h-[56px] flex flex-row justify-between items-center hover:bg-neutral-700 rounded-lg group'>
      <div>
        <div className='text-[14px]'>{playlistName}</div>
        <div className='text-[12px] text-neutral-500'>{owner}</div>
      </div>
      <div>
        <div onClick={onClickPlay} 
        className='hidden group-hover:block cursor-pointer'>
          <IoPlayCircle size={30} />
        </div>
      </div>
    </li>
  )
}

export default PlayListNav
