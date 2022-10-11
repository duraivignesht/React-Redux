import React from "react";
import PropTypes from 'prop-types';

export const ProductImage = ({img}) => {
 
    if(!img) return null;
    const {url,title} = img;
    return (
        <>    
        {url && 
            <img
              src={url} 
              alt={title}
            />
        }
        </>
        )
}
ProductImage.propTypes = {
    img: PropTypes.shape({
        url:PropTypes.string,
        title:PropTypes.string
    })
  }