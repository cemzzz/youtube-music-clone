import {create} from "zustand"

const useUIState = create((set) => ({
    homeCategory: "",
    headerImageSrc: "https://images.unsplash.com/photo-1719859891354-1cf01dd78ae4",
    setHomeCategory:(value)=> set({homeCategory:value}),
    setHeaderImageSrc:(src)=> set({headerImageSrc:src}),

}));


export default useUIState;