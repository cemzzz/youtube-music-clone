import { create } from "zustand";

interface PlayerState {
    isVisiblePlayer:boolean
    setisVisiblePlayer: (isVisiblePlayer:boolean)=> void;
}


const usePlayerState = create<PlayerState>((set)=>({
    isVisiblePlayer: true,
    setisVisiblePlayer: (isVisiblePlayer:boolean)=> set({isVisiblePlayer})
}))

export default usePlayerState;