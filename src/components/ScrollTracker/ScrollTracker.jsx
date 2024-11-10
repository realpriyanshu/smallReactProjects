import { useEffect, useState } from "react"
import "../ScrollTracker/style.css"


export default function ScrollTracker({ getUrl }) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const [ScrollPercentage, setScrollPercentage] = useState()



    async function fetchData(url) {

        try {

            const res = await fetch(url);
            const D = await res.json()

            if (D && D.products && D.products.length > 0) {
                setData(D.products)
                console.log(D.products)
                setLoading(false);
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
        <div >
            {loading ? <div style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>loading..</div>

                :
                <>
                <div className="top-container">
                <h1>Scroll Indicator</h1>
                    <div className="scroll-progress-container">
                        <div className="scroll-progress" style={{ width: `${ScrollPercentage}%` }}
                        >

                        </div>

                    </div>

                </div>
                    
                    <div className="data-container">
                        {data && data.length > 0
                            ? data.map((dataItem, index) => (
                                <p key={index}>{dataItem.title}</p>
                            ))
                            : <p>No data available.</p>}
                    </div>
                </>

            }


        </div>
    )
}