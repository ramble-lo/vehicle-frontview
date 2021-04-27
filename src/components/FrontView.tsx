import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import noFrontView from '../vidoes/no-frontview.mp4'

interface Props {
    keyInCode: string,
    screenStyle: string,
    videoKind: string
}
const FrontView: React.FC<Props> = ({ keyInCode, screenStyle, videoKind }) => {
    const [isPlayed, setIsPlayed] = useState<boolean>(false)
    useEffect(() => {
        let firstPlayed = isPlayed
        if (keyInCode === 's') {
            firstPlayed = true
        } else if (keyInCode === 'a') {
            return
        }
        setIsPlayed(firstPlayed)
        console.log(keyInCode);
    }, [keyInCode, isPlayed])


    // const onClickPlayVideo = () => {
    //     setIsPlayed(!isPlayed)
    //     console.log(isPlayed);
    // }



    return (
        <div className='front-view'>
            {/* <div className="alert-screen"></div> */}
            <div className={'screen ' + screenStyle}></div>
            <ReactPlayer
                url={videoKind}
                width='100%'
                height='100%'
                playing={isPlayed}
            />
            {/* <button onClick={onClickPlayVideo}>Play</button> */}
        </div>
    )
}

export default FrontView
