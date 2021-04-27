import React, { useRef } from 'react'
interface Props {
    recordTime: Array<number>,
}

// interface RefObject {
//     current: object
// }

const TimeStamp: React.FC<Props> = ({ recordTime }) => {
    // const timeRef = React.useRef<HTMLDivElement>(null)
    // const onClickSelectAllCopy = () => {
    //     // console.log('onClickSelectAllCopy');
    //     // console.log(timeRef.current)
    //     console.log(timeRef.current.innerHTML)
    // }

    return (
        <div className='timestamp'>
            {recordTime.map((currentValue, index) => {
                if (index <= 1) return
                return <div key={index}>{currentValue}</div>
            })}
        </div>
    )
}

export default TimeStamp
