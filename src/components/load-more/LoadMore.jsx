import { useEffect, useState } from "react";
import './styles.css';

export default function ({ url }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(0);

  async function fetchImages(getUrl) {
    try {
      const response = await fetch(`${getUrl}&skip=${limit===0 ? 0 : limit*20}`);
      const data = await response.json();
      if (data && data.products && data.products.length > 0) {
        setImages(prev => [...prev ,...data.products]);
      }
      setLoading(false);
      console.log(data);
    } catch (e) {
      console.error("Error fetching images:", e);
      setLoading(false);
    }
  }

  function loadmore(){
      setLimit(prevLimit => prevLimit+1);
      console.log(limit)


  }


  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url ,limit]);

  return (
    <div className="load-more-container">
      {loading ? (
        <div>Loading..</div>
      ) :( images.length > 0 ? (
        <div className="product-container">
          {
       images.map((i ,ind) => (
          <div className="product"
            key={ind}
           
          >
            <img src={i.thumbnail} alt={i.title} />
          </div>
        ))}
        </div>
      ) : (
        <div> No images to show here</div>
      )
      )}
      <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}>
      <button style={{
        margin:10
      }}  onClick={()=> limit<5 ? loadmore():null}>Load more</button>

      </div>
    </div>
  );
}
