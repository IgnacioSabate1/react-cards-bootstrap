import React from 'react'
import PropTypes from 'prop-types'
import './cards.css'


function Card({tittle, imagenURL,url}) {
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp" >
            <div className="overflow"><img src={imagenURL} className="card-img-top" ></img></div>
            
            <div className="card-body text-light">
                  <h4 className="card-tittle">
                           {tittle}
                 </h4>
                 <p className="card-text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, , 

                </p>
                <a href={url} className="btn btn-outline-secondary">Entrá YA</a>

            </div>
        </div>
    )
}


Card.propTypes={
    tittle:PropTypes.string.isRequired,
    url:PropTypes.string,
    imagenURL:PropTypes.string
}

export default Card
