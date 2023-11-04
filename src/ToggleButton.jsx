import React, { useCallback, useEffect, useState } from 'react'

const ToggleButton = () => {


    const [color, setColor] = useState(false)
    const [colorText, setColorText] = useState(false)

    useEffect(() =>{

        if(color){
            setColorText("Red")
        }else{
            setColorText("Blue")
        }
        // ChangeText()

    },[color])

    // const ChangeText = useCallback(() =>{

    //     if(color){
    //         setColorText("Red")
    //     }else{
    //         setColorText("Blue")
    //     }

    // },[color])


    return (
        <div>
            <h5>ToggleButton Example</h5>
            <button style={{ background: color ? "blue" : "red" }}
             className='btn btn-light' onClick={() => setColor(!color)} >{`Change Color to ${colorText}` }</button>
        </div>
    )
}

export default ToggleButton