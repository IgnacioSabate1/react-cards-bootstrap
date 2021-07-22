import React from 'react'
import Card from './Card'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'


const cards=[{
id:1,
tittle: "Sbt WEB",
img:image1,
url: "https://faztweb.com"
},
{
id:2,
tittle: "Sbt WEB",
img:image2,
url: "https://faztweb1.com"
},
{id:3,
tittle: "Sbt WEB",
img:image3,
url: "https://faztweb2.com" 
}

]




function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100 ">
            <div className="row">
                {
                    cards.map(card => (<div className="col-md-4" key={card.id}>
                    <Card tittle={card.tittle} imagenURL={card.img} url={card.url}/>
               </div>))
                }
               
            </div>
        </div>
    )
}

export default Cards
