import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image4 from '../Images/BitMarket.png';
import image5 from '../Images/front2.png'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import "./ModalCSS.css";

const Card2 = () => {
    const [lgShow, setLgShow] = useState(false);

    return (
        <Card style={{ width: '18rem', marginLeft: '80px', }}>
            <Card.Img variant="top" src={image4} style={{height: '200px'}} />
            <Card.Body style={{display:'flex', justifyContent:'center'}}>
                <Button variant="warning" style={{fontWeight:'bold'}}
                        onClick={() => setLgShow(true)}>
                    BitMarket(중고 거래 플랫폼)
                </Button>
                <Modal
                    size="lg"
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                    scrollable
                >
                    <Modal.Header closeButton className='Mh'>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        <h1>🍒BitMarket(중고 거래 플랫폼)</h1>
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='Mb'>
                    <div className="m_img">
                        <img 
                            src={image4}
                            style={{ width: '500px', height: '500px', alignContent: 'center'}}
                        />
                    </div>
                    <div style={{marginTop:'30px', marginBottom: '60px'}}>
                    1️⃣ BitMarket은 환경 보호와 지속 가능한 소비 문화를 더욱 확산시키기 위한 중고 거래 플랫폼입니다.<br/>
                    2️⃣ 소비자들은 경제적 이점을 누리고, 관계자 간에는 직접적인 소통이 가능해집니다.<br/>
                    3️⃣ 장기적인 관점에서 지구를 지키며, 경제적 이익을 창출할 수 있는 중고 거래 플랫폼 입니다.<br/>
                    4️⃣ 중고 거래 플랫폼의 특성상 중요한 특징을 생각해보았을때 처음 들었던 생각이 바로 판매자와 구매자간의 원활한 의사소통이였습니다🤔<br/>
                    판매자와 구매자간의 원활한 의사소통이 되어야 물건을 보다 손쉽게 사거나 팔수 있겠죠..?👌<br/>
                    그래서 저는 해당 프로젝트를 진행하면서 구매자와 판매자간의 원활한 의사소통을 할수 있게끔 해주는 <span style={{color:'rgba(223, 84, 82, 1)'}}>실시간 채팅 기능 개발</span>을 진행해 보았습니다.
                    </div>
                    <hr/>
                    <h4>📆 제작기간</h4>
                    <h5><br/>2023년 5월 12일 → 2023년 7월 2일</h5>
                    <hr/>
                    <h4><a href="https://github.com/kwonyongjun9978" style={{textDecoration: 'none'}}>💻 Github</a></h4>
                    <hr/>
                    <h4><a href="https://www.canva.com/design/DAFlqRNOHns/Vfh2agL7aMnATAE47xbCOA/edit" style={{textDecoration: 'none'}}>📜 PPT</a></h4>
                    <hr/>
                    <h4><a href="https://ncamp.magicecole.com/Home/Project/0f897457-d327-4920-adef-aa3c48fbd731?page=1&groupId=0" style={{textDecoration: 'none'}}>📺 시연영상(발표영상)</a></h4>
                    <hr/>
                    <h4>🛠️ Specification</h4>
                    <div className="m_img">
                        <img 
                            src={image5}
                            style={{ width: '500px', height: '300px', alignContent: 'center'}}
                        />
                    </div>
                    </Modal.Body>
                </Modal>
            </Card.Body>
        </Card>
    );
};

export default Card2;