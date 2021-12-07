import { createContext, useState } from "react";
import songs from "../utils/songs";

export const SongContext = createContext({
    songs: [] as {
        name: string,
        length: string,
        title: string,
        text: string,
        videoYoutubeID: string
    }[],
    currentSong: {
        name: "" as string,
        length: "" as string,
        title: "" as string,
        text: "" as string,
        videoYoutubeID: "" as string
    },
    setCurrentSong: (song: {
        name: string,
        length: string,
        title: string,
        text: string,
        videoYoutubeID: string
    }) => {  }
})

interface SongContextProviderProps {
    children: any
}

export const SongContextProvider = (props: SongContextProviderProps) => {
    const [currentSong, setCurrentSong] = useState(songs[0])
    
    return (
        <SongContext.Provider value={{
            songs,
            currentSong,
            setCurrentSong
        }}>
            {props.children}
        </SongContext.Provider>
    )
}