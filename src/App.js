import React, {useState, useEffect} from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(()=> {
    (async () => {
      try{
        const req = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`);
        const data = await req.json();
        setImages(data.hits);
        setIsLoading(false);
        console.log(data)
      }
      catch(err){
          console.log(err)
      } 
  })()
  },[term]);

  const  searchText = text => {
        return setTerm(text)
  }

  
    


  return (
        <div className="container mx-auto">
           <ImageSearch searchText={searchText}/>
           {(!isLoading && images.length <= 0) && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> }
            { isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> : 
           <div className="
             grid grid-cols-1 gap-4 
             justify-items-center
             md:grid-cols-2 
             lg:grid-cols-3 m-5">
             {images.map(image=> <ImageCard key={image.id} image={image}/>)}
           </div>}
          
        </div>
  );
}

export default App;
