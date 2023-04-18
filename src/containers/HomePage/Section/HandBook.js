import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class HandBook extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToshow: 3,
            slidesToScroll: 1
        }
        return (
            <div className='section-share section-handbook'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cẩm nang</span>
                        <button className='btn-section'>xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className="section-customize">
                                <div className='bg-image section-handbook' />
                                <h3>Cơ xương khớp 1</h3>
                            </div>
                            <div className="section-customize">
                                <div className='bg-image section-handbook' />
                                <h3>Cơ xương khớp 2</h3>
                            </div>
                            <div className="section-customize">
                                <div className='bg-image section-handbook' />
                                <h3>Cơ xương khớp 3</h3>
                            </div>
                            <div className="section-customize">
                                <div className='bg-image section-handbook' />
                                <h3>Cơ xương khớp 4</h3>
                            </div>
                            <div className="section-customize">
                                <div className='bg-image section-handbook' />
                                <h3>Cơ xương khớp 5</h3>
                            </div>
                            <div className="section-customize">
                                <div className='bg-image section-handbook' />
                                <h3>Cơ xương khớp 6</h3>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
