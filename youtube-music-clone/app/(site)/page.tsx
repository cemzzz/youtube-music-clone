import { sleep } from '@/lib/utils'
import React from 'react'

const page = async () => {

  console.log("before HomePage sleep ...");
  await sleep(4000)
  console.log("after HomePage sleep ...");

  return (
    <div>
      <div>HomePage</div>
    </div>
  )
}

export default page

