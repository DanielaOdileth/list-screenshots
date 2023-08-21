import {useEffect, useState} from "react"

export const List = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search?limit=10').then(response => response.json()).then(data => setImages(data));
    }, [])

    return (
        <div className="grid grid-cols-4 gap-4 place-items-center m-10"> 
            {images.map(({url, id}) => {
                return (
                    <div key={id} className="bg-stone-300 p-4 cursor-pointer">
                        <a target="_blank" href={url} rel="noreferrer">
                            <img src={url} alt="Screenshot" className="object-cover w-80 h-80"/>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}
