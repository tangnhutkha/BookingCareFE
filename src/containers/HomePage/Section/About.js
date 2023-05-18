import React, { Component } from 'react';
import { connect } from 'react-redux';




class About extends Component {

    render() {

        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Truyền thống nói về fullstack
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        {/* <iframe
                            width="60%" height="400px"
                            src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1"
                            title='Youtube video player'
                            frameborder="0"
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture'
                            allowFullScreen>
                        </iframe> */}
                    </div>
                    <div className='content-right'>
                        <p>
                            Y tế tư nhân Việt Nam ngày càng phát triển cả về số lượng và chất lượng. Theo thống kê của Hiệp hội Bệnh viện tư nhân Việt Nam, nước ta hiện có gần 320 bệnh viện tư và 38.000 phòng khám tư.
                            Với sự tăng nhanh của nhiều cở ở y tế khám chữa bệnh tư nhân cộng với nhu cầu, yêu cầu trong chăm sóc sức khỏe ngày càng cao của khách hàng cũng đặt ra cho các đơn vị bài toán về cạnh tranh, thu hút và giữ chân nguồn bệnh nhân đủ đông để duy trì hoạt động.
                        </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
