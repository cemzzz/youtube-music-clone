'use client'
import React from 'react'
import WhiteButton from '@/components/elements/WhiteButton'
import DarkButton from '@/components/elements/DarkButton'
import { FiMusic, FiShuffle } from 'react-icons/fi';
import usePlayerState from '@/hooks/usePlayerState';

  function shuffleArray(array) {
    const shuffledArray = array.slice();

    for (let i = shuffledArray.length -1 ; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1))
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
    }

    return shuffledArray
  }

  const ChannelHead = ({channel}) => {
    const { addSongList } = usePlayerState()
    
    const onClickShuffle = () => {
        addSongList(shuffleArray(channel.songList))
    }

    return (
        <section>
            <div className='text-[28px] font-extrabold'>{channel.name}</div>
            <article className='mt-4 lg:hidden'>
            <div>
                <DarkButton 
                className={"w-[230px] flex justify-center"} 
                label={'구독중 5.15만'}
                />
            </div>
            <div className='flex flex-row gap-4 mt-4'>
                <WhiteButton 
                    onClick={onClickShuffle}
                    label={"셔플"} 
                    icon={<FiShuffle scale={16} />} 
                />
                <WhiteButton 
                    onClick={onClickShuffle}
                    label={"뮤직스테이션"} 
                    icon={<FiMusic scale={16} />} 
                />
            </div>
            </article>
            <div className='hidden lg:flex flex-row items-center gap-4 text-[14px] mt-4'>
            <WhiteButton 
                label={"셔플"} 
                icon={<FiShuffle scale={16} />} 
            />
            <WhiteButton 
                label={"뮤직스테이션"} 
                icon={<FiMusic scale={16} />} 
            />
            <DarkButton 
                className={"w-[230px] flex justify-center"} 
                label={'구독중 5.15만'}
            />
            </div>
        </section>
  )
}

export default ChannelHead
