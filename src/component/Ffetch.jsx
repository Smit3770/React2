import React from 'react'
import { useEffect, useState } from 'react'
export default function Ffetch() {
    const [state, setState] = useState("https://www.pixelstalk.net/wp-content/uploads/2016/07/Desktop-hd-3d-nature-images-download.jpg")

    useEffect(() => {
        console.log("mount phase")

        return () => {
            alert("unmount")
        }
    }, [])

    return (
        <div>
            <img src={state} />
            <button onClick={() => { setState("https://images.pexels.com/photos/556416/pexels-photo-556416.jpeg?cs=srgb&dl=landscape-mountains-nature-556416.jpg&fm=jpg") }}>Update</button>
        </div>
    )
}
