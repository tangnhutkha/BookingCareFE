import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class OutStandingDoctor extends Component {

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToshow: 3,
            slidesToScroll: 1
        }
        return (
            <div className='section-share section-outstanding-doctor'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cẩm nang</span>
                        <button className='btn-section'>xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className="section-customize">
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor' />
                                    </div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, Tiến sĩ hỏi fullstack</div>
                                        <div>Cơ xương khớp 1</div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor' />
                                    </div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, Tiến sĩ hỏi fullstack</div>
                                        <div>Cơ xương khớp 2</div>
                                    </div>
                                </div>
                            </div><div className="section-customize">
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor' />
                                    </div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, Tiến sĩ hỏi fullstack</div>
                                        <div>Cơ xương khớp 3</div>
                                    </div>
                                </div>
                            </div><div className="section-customize">
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor' />
                                    </div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, Tiến sĩ hỏi fullstack</div>
                                        <div>Cơ xương khớp 4</div>
                                    </div>
                                </div>
                            </div><div className="section-customize">
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor' />
                                    </div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, Tiến sĩ hỏi fullstack</div>
                                        <div>Cơ xương khớp 5</div>
                                    </div>
                                </div>
                            </div><div className="section-customize">
                                <div className='customize-border'>
                                    <div className='outer-bg'>
                                        <div className='bg-image section-outstanding-doctor' />
                                    </div>
                                    <div className='position text-center'>
                                        <div>Giáo sư, Tiến sĩ hỏi fullstack</div>
                                        <div>Cơ xương khớp 6</div>
                                    </div>
                                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutStandingDoctor);
