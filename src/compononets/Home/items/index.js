import React, { Component } from 'react';
import ProgressiveImage from 'react-progressive-image';

class Items extends Component {
    render() {
        const { item } = this.props;
        return (
            <React.Fragment>
                <div className='pt-3' key={item.id} >
                    <div className='d-flex flex-column h-100 justify-content-start py-1 '>
                        <ProgressiveImage
                            delay={20}
                            src={item.imageUrl}
                            placeholder={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/blue_placeholder'}
                        >
                            {(src, loading) => (
                                <img
                                    className="item-img"

                                    src={src}
                                    alt='main-item'
                                />
                            )}
                        </ProgressiveImage>
                        <span className='item-name w-700 common-color pt-1'>{item.Ingredient}</span>
                        <span className='item-text '>{item.Shorttext}</span>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Items;
