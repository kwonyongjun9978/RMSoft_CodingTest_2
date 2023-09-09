import React from 'react';
import image from '../Images/main.jpg';

const Home = () => {
    return (
        <div className="Home">
            <div className="top">
                <div className="Me_img">
                <img
                    src={image}
                    style={{ width: '300px', height: '400px', borderRadius: '100px' }}
                />
                </div>
                <div className="Me_content">
                    <h1>내 사전에 오류란 없다, 개발계의 세스코, 오류박멸 개(발자어)린이 권용준입니다!</h1>
                    <hr/>
                    <h2>📧 Email : skszcz@gmail.com</h2>
                    <h2>💻 Github : <a href="https://github.com/kwonyongjun9978" >https://github.com/kwonyongjun9978</a></h2>
                    <h2>🎓 원광대학교 디지털콘텐츠공학부 학사</h2>
                </div>
                <div className="bottom"></div>
            </div>
        </div>
    );
};

export default Home;