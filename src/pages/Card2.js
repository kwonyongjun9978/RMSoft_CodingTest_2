import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image4 from '../Images/BitMarket.png';
import image5 from '../Images/front2.png'
import image6 from '../Images/back2.png'
import image7 from '../Images/deploy2.png'
import image8 from '../Images/etc2.png'
import image9 from '../Images/timestamp.gif'
import image10 from '../Images/promise.gif'
import image11 from '../Images/push.png'
import image12 from '../Images/emji.gif'
import image13 from '../Images/address.gif'
import image14 from '../Images/scroll.gif'
import image15 from '../Images/out.gif'
import image16 from '../Images/police.gif'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import "./ModalCSS.css";
import Accordion from 'react-bootstrap/Accordion';

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
                    <h5>2023년 5월 12일 → 2023년 7월 2일</h5>
                    <hr/>
                    <h4><a href="https://github.com/ksqrt/carrotMarket" style={{textDecoration: 'none'}}>💻 Github</a></h4>
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
                    <div className="m_img">
                        <img 
                            src={image6}
                            style={{ width: '500px', height: '300px', alignContent: 'center'}}
                        />
                    </div>
                    <div className="m_img">
                        <img 
                            src={image7}
                            style={{ width: '500px', height: '300px', alignContent: 'center'}}
                        />
                    </div>
                    <div className="m_img">
                        <img 
                            src={image8}
                            style={{ width: '500px', height: '300px', alignContent: 'center'}}
                        />
                    </div>
                    <hr/>
                    <h4>🧐 담당 역할</h4>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>실시간 채팅</Accordion.Header>
                            <Accordion.Body>
                            실시간 채팅기능은 <span style={{color:'rgba(223, 84, 82, 1)'}}>NodeJS 기반의 express 프레임워크</span>를 사용해서 개발을 했습니다<br/>
                            그리고 데이터베이스와 상호작용하기 위한 odm으로는 <span style={{color:'rgba(223, 84, 82, 1)'}}>Mongoose</span>를 선택했구요,  클라이언트와의 통신을 위해 양방향 및 이벤트 기반 통신을 가능하게 하는 라이브러리인 Socket IO를 사용해서 개발을 했습니다.<br/>
                            그리고 <span style={{color:'rgba(223, 84, 82, 1)'}}>옵셔널체이닝 연산자</span>를 사용해서 Undefined 값이나 null값있어도 에러페이지가 뜨지 않고 페이지를 띄워주게끔 구현했습니다.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Timestamp</Accordion.Header>
                            <Accordion.Body>
                                <div className="m_img">
                                    <img 
                                        src={image9}
                                        style={{ width: '450px', height: '550px'}}
                                    />
                                </div>
                                <div>
                                그날 하루, 처음 채팅창에 입장을 하게되면 현재 날짜가 뜰수 있게 <span style={{color:'rgba(223, 84, 82, 1)'}}>moment-timezone</span>이라는 라이브러리를 사용하여 타임스탬프 기능을 추가했습니다.
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>약속 잡기</Accordion.Header>
                            <Accordion.Body>
                                <div className="m_img">
                                    <img 
                                        src={image10}
                                        style={{ width: '600px', height: '400px'}}
                                    />
                                </div>
                                <div>
                                약속잡기 기능은 <span style={{color:'rgba(223, 84, 82, 1)'}}>mui date-pickers</span> 라이브러리를 사용하였습니다.<br/><br/>
                                달력이미지 버튼을 클릭하면 모달창 방식으로 약속잡기 창이 뜨게 되고, 해당 창에서 약속 날짜와 시간을 선택하고 ok 버튼을 누르면 상대방 채팅 페이지에서는 내가 지정한 약속날짜가 뜨면서 약속 수락, 거절 버튼 이 뜨게 되는데, 만약 상대방이 약속을 거절하면 약속을 거절했고 다시 약속을 잡아달라는 메세지가 채팅창에 뜨게 됩니다.<br/>
                                그리고 상대방이 약속을 수락했다면 채팅창의 header 부분밑에 있는 text가 거래중에서 예약중으로 변경되고 장소공유하기 버튼 옆에 거래완료 버튼이 생기게 됩니다.<br/><br/>
                                실질적으로 상대방과의 거래가 완료되고 거래완료버튼을 누르게 될시 <span style={{color:'rgba(223, 84, 82, 1)'}}>confetti</span> 라이브러리를 사용하여 축하 이팩트를 구현하였습니다.<br/><br/>
                                이후 거래 완료버튼 옆에 후기 보내기 버튼이 생기면서 후기 보내기 버튼을 누르게 될시 프로필 페이지로 이동하여 구매 후기를 남길수 있습니다.
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Push(채팅)알림</Accordion.Header>
                            <Accordion.Body>
                                <div className="m_img">
                                    <img 
                                        src={image11}
                                        style={{ width: '200px', height: '200px'}}
                                    />
                                </div>
                                <div>
                                내가 채팅을 보내면 상대방은 페이지 상단의 프로필 이미지쪽과 채팅방 목록쪽에 내가 채팅을 보낸 횟수만큼 실시간으로 알림이 뜨게 구현을 했습니다.
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>이모티콘 발송</Accordion.Header>
                            <Accordion.Body>
                                <div className="m_img">
                                    <img 
                                        src={image12}
                                        style={{ width: '600px', height: '400px'}}
                                    />
                                </div>
                                <div>
                                이모티콘 같은 경우는 <span style={{color:'rgba(223, 84, 82, 1)'}}>emoji-picker-react</span> 라이브러리를 사용했습니다.<br/><br/>
                                이모티콘 버튼을 누르게 될시 채팅입력창 밑에 이모티콘 선택창이 생기면서 원하는 이모티콘을 선택해서 전송할수 있게 구현했습니다.
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>위치 공유</Accordion.Header>
                            <Accordion.Body>
                                <div className="m_img">
                                    <img 
                                        src={image13}
                                        style={{ width: '600px', height: '350px'}}
                                    />
                                </div>
                                <div>
                                위치공유 기능은 <span style={{color:'rgba(223, 84, 82, 1)'}}>kakao-map-api</span>를 사용해서 구현했습니다.<br/><br/>
                                위치공유 기능을 개발하는 과정에서 kakao-map-api 공식문서에 나와있는 html코드를 react 함수형 컴포넌트 코드로 변경하면서 잦은 오류가 발생하였습니다. 이렇게, 여러 시행착오를 겪다가 결국 <span style={{color:'rgba(223, 84, 82, 1)'}}>react-kakao-maps-sdk</span> 라이브러리를 찾게 되었고, 보다 손쉽게 react환경에서 kakao-map-api 사용하게 되었습니다.<br/><br/>
                                하늘색 지도이미지 버튼을 클릭하면 모달창 방식으로 지도가 뜨면서 사용자의 현재 위치를 가져오는 <span style={{color:'rgba(223, 84, 82, 1)'}}>geolocation API</span>를 사용하여 사용자의 현재위치가 나오게 됩니다.<br/><br/>
                                해당 지도에서 클릭 이벤트가 발생하면 마커가 표시되면서 해당 마커를 클릭함과 동시에 위도,경도값을 주소값으로 변경해서 해당 주소가 나오게 됩니다.<br/><br/>
                                해당주소 밑에있는 현재위치 공유하기 버튼을 클릭하면 마커로 찍은 위치가 메세지로 전송이 됩니다.<br/>
                                그리고 장소 보기 버튼을 누르면 카카오 맵 사이트로 이동할수 있게끔 구현했습니다.
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>무한스크롤</Accordion.Header>
                            <Accordion.Body>
                                <div className="m_img">
                                    <img 
                                        src={image14}
                                        style={{ width: '400px', height: '500px'}}
                                    />
                                </div>
                                <div>
                                채팅창에 무한스크롤 기능을 추가하여 이전의 채팅내용도 손쉽게 찾아볼수있는 편의성 기능을 추가하였습니다.
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header>채팅방 나가기</Accordion.Header>
                            <Accordion.Body>
                                <div className="m_img">
                                    <img 
                                        src={image15}
                                        style={{ width: '600px', height: '400px'}}
                                    />
                                </div>
                                <div>
                                내가 채팅방 나가기를 클릭하면 채팅방이 나가지고 채팅방 목록도 삭제가 됩니다.<br/>
                                그리고 상대방측 채팅창에는 내가 채팅방을 나갔다라는 메세지가 뜨고 메세지 목록에는 id값이 알수없음으로 표시가 됩니다.<br/>
                                이후 상대방측에서도 채팅방 나가기 버튼을 클릭했을경우 비로소 데이터베이스에있는 채팅방 컬렉션이 제거가 되고 상대방 페이지에서도 채팅방 및 채팅방 목록은 사라지게끔 구현을 했습니다.
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="8">
                            <Accordion.Header>신고하기</Accordion.Header>
                            <Accordion.Body>
                                <div className="m_img">
                                    <img 
                                        src={image16}
                                        style={{ width: '600px', height: '400px'}}
                                    />
                                </div>
                                <div>
                                    신고하기 버튼을 클릭하면 모달창으로 신고 내용을 입력할수 있는 텍스트 입력창이 뜨게 됩니다.<br/>
                                    해당 text 입력창에서 신고 내용을 입력하고 신고 버튼을 클릭하게 되면 관리자 페이지에서 관리자가 신고 내용을 확인한후 조치 할수 있겠끔 구현을 했습니다.
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="9">
                            <Accordion.Header>URL 링크 공유 기능</Accordion.Header>
                            <Accordion.Body>
                                <div>
                                <span style={{color:'rgba(223, 84, 82, 1)'}}>Linkify</span> 라이브러리를 사용하여 채팅메세지 입력창에 url주소를 입력하면 하이퍼링크 형식으로 메세지가 전송되게 구현을 했습니다.
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                        <hr/>
                        <h4>💬 회고</h4>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>새로운 도전, Node.js와 MongoDB</Accordion.Header>
                                <Accordion.Body>
                                    <div>
                                    프로젝트를 진행하면서 Back-End쪽을 한번도 접해보지 못한 NodeJS 와 MongoDB를 사용해야되는 상황이 있었는데, 정해진 기간내에 프로젝트를 완성시켜야했기 때문에 NodeJS와 MongoDB를 짧은 시간내에 익히는 데 어려움이 있었지만, 그것이 새로운 도전이자 성장의 기회라는 마음가짐으로 프로젝트에 필요한 NodeJS기능 및 관련된 프레임워크, 라이브러리들 부터 읽히고 해당 프로젝트에 활용을 했습니다.
                                    <br/><br/>해당 경험을 바탕으로 개발자로서 거부감 없이 다양한 기술들을 사용하는 것이 정말 유용하고 가치 있는 역량이라고 생각하게 되었습니다.
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>git을 활용한 협업</Accordion.Header>
                                <Accordion.Body>
                                <div>
                                협업을 위한 버전 관리 시스템으로 git을 사용해봄으로써 git의 중요성또한 느낄수 있는 계기가 되었습니다.
                                </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>다양한 접근방식의 중요성</Accordion.Header>
                                <Accordion.Body>
                                <div>
                                react환경에서 kakao-map-api를 사용하기 위해 kakao-map-api 공식문서에 나와있는 html코드를 react 함수형 컴포넌트 코드로 변경하는 과정에 잦은 오류가 발생하였습니다.
                                <br/>여러 시행착오를 겪다가 결국 react-kakao-maps-sdk 라이브러리를 찾게 되었고, 보다 손쉽게 react환경에서 kakao-map-api 사용했습니다.
                                <br/><br/>해당 경험을 토대로 개발을 진행할 때에는 한 가지 방법에만 고집하지 말고 다양한 관점과 접근 방식을 고려하는 것이 중요하다고 생각하게 되었습니다.
                                </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Modal.Body>
                </Modal>
            </Card.Body>
        </Card>
    );
};

export default Card2;