import { useEffect, useState } from "react"


export default function ScrollTracker({ getUrl }) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [ScrollPercentage, setScrollPercentage] = useState()



    async function fetchData(url) {

        try {

            const res = await fetch(url);
            const D = await res.json()

            if (D && D.products && D.products.length > 0) {
                setData(D.products)
                console.log(D.products)
            }


        } catch (err) {
            console.log(err);
        }


    }

    useEffect(() => {


        fetchData(getUrl);
    }, [getUrl])
    function handleScrollPercentage() {

        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled / height) * 100);



    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage);
        return () => {
            window.removeEventListener('scroll', () => { });
        }

    }, [])

    console.log(ScrollPercentage)

    return (
        <div>
            <h1>Scroll Indicator</h1>
            <div className="data-container">
                {data && data.length > 0
                    ? data.map((dataItem, index) => (
                        <p key={index}>{dataItem.title}</p>
                    ))
                    : <p>No data available.</p>}
            </div>

        </div>
    )
}