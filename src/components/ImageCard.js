import React from 'react'

function ImageCard({image}) {

    const tags = image.tags.split(",")
    return (
        <div className="max-w-sm 
        rounded overflow-hidden shadow-lg">
           <img id="card-img" className="w-full" 
           src={image.webformatURL}
           alt="" />
           <div id="card-body" className="px-6 py-4">
             <div className="font-bold text-purple-500 text-xl">
               Photo by {image.user}
             </div>
             <ul id="card-details">
               <li><strong>Views:</strong> {image.views}</li>
               <li><strong>Downloads:</strong> {image.downloads}</li>
               <li><strong>Likes:</strong>{image.likes}</li>
             </ul>
           </div>
           <div id="card-tags" className="px-6 py-4">
             {tags.map((tag,index)=> {
                    return ( <span key={index} className="card-tag inline-block bg-gray-200 rounded-full 
                    px-3 py-1 my-1 text-sm font-semibold text-gray-700 mr-2">
                      {tag}
                    </span>)
             })}
           </div>
        </div>
    )
}

export default ImageCard
