"use client"
import React from 'react'
import IconButton from './elements/IconButton';
import { FiMoreVertical, FiPlay, FiFolderPlus  } from 'react-icons/fi';
import Image from 'next/image';
import { getRandomElementFromArray } from '@/lib/utils';
import WhiteButton from '@/components/elements/WhiteButton'
import DarkButton from '@/components/elements/DarkButton'

const PlayListHead = ({playlist = {} } = {}) => {
  
  const{ playlistName, owner, songList} = playlist;
  const randomSong = getRandomElementFromArray(songList)

  return (
    <section>
        <div className='flex flex-row gap-[50px]'>
            <div className='relative h-[160px] w-[160px] lg:h-[240px] lg:w-[240px]'>
                <Image alt='songImg' fill src={randomSong?.imageSrc}/>
            </div>
            <article className='flex flex-col justify-center'>
                <div className='font-bold text-[28px]'>{playlistName}</div>
                <div className='text-neutral-400 mt-4 text-[14px]'>
                    <div>{`앨범 ⸰ ${owner} ⸰ 2024`}</div>
                    <div>{`${songList.length}곡 ⸰ 10분`}</div>
                </div>
                <ul className='hidden lg:flex flex-row gap-4 mt-4'>
                    <WhiteButton className={"w-[80px]"} icon={<FiPlay />} label='재생' />
                    <DarkButton className={"w-[190px]"} icon={<FiFolderPlus />} label='보관함에 저장' />
                    <IconButton icon={<FiMoreVertical size={24}/>} />
                </ul>
            </article>
        </div>
       
        <ul className='flex flex-row gap-4 mt-4 lg:hidden'>
            <WhiteButton className={"w-[80px]"} icon={<FiPlay />} label='재생' />
            <DarkButton className={"w-[190px]"} icon={<FiFolderPlus />} label='보관함에 저장' />
            <IconButton icon={<FiMoreVertical size={24}/>} />
        </ul>
    </section>
  )
}

export default PlayListHead
