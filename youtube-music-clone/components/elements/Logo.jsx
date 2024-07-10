"use client";
import React from 'react'
import Image from 'next/image'
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from 'next/navigation';
import IconButton from "./IconButton"
import { IoCloseOutline } from "react-icons/io5";

const Logo = ({isInDrawer = false, onClickClose = () =>{} }) => {

  const {push} = useRouter ()
  const onClickLogo = ()=> {
    push("/");
  }

  const onClickMenu = () => {};


  return (
    <section className='flex flex-row items-center gap-3'>
      {
        isInDrawer ?
        (
          <IconButton
          onClick={onClickClose}
          icon={<IoCloseOutline size={30} />}
          />
        ) : 
        (
          <IconButton
          onClick={onClickMenu}
          icon={<RxHamburgerMenu size={30} />}
          />
        )
      }
     
      <div className='cursor-pointer' onClick={onClickLogo}>
        <Image alt="logo" width={100} height={100} src={"/main-logo.svg"} />
      </div>
    </section>
  )
}

export default Logo
