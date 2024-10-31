import { useEffect, useState, useSyncExternalStore } from "react"

export default function ImageSlider({ url, limit }) {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl) {
        setLoading(true);
        try {
            const response = await fetch(`${getUrl}?limit=${limit}`);
            const data = await response.json();
            setImages(data)
            setLoading(false);

        } catch (e) {
            setErrorMsg(e);
        }
    }
    
    function leftSlide() {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    }
    function rightSlide() {
        setCurrentSlide((prev) => (prev < images.length - 1 ? prev + 1 : 0))
    }

    useEffect(() => {
        if (url !== "") {
            fetchImages(url);

        }
    }, [url])

    return (
        <div>
            {loading ? (
                <div> Loading</div>
            ) : errorMsg ? (<div>{errorMsg}</div>) :
                (
                    <div>
                        <button onClick={leftSlide}>Left</button>
                        <button onClick={rightSlide}>Right</button>
                        <div>
                            {images.length > 0 ?

                                <div>
                                    <img src={images[currentSlide].download_url} height="500" width="700" />
                                </div>

                                : <div>No image i available</div>}
                        </div>
                    </div>
                )
            }

        </div>



    )
}