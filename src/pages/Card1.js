import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image4 from '../Images/BitMarket.png';
import image5 from '../Images/youtubestacks.png';
import image9 from '../Images/login.png';
import image10 from '../Images/join1.png'
import image11 from '../Images/join2.png'
import image12 from '../Images/emailS.png'
import image13 from '../Images/passwordS.png'
import image14 from '../Images/userUpdate.png'
import image15 from '../Images/userDelete.png'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import "./ModalCSS.css";
import Accordion from 'react-bootstrap/Accordion';
import image3 from '../Images/youtube.png';


const Card1 = () => {
    const [lgShow, setLgShow] = useState(false);

    return (
        <Card style={{ width: '18rem', marginLeft: '80px', }}>
            <Card.Img variant="top" src={image4} style={{height: '200px'}} />
            <Card.Body style={{display:'flex', justifyContent:'center'}}>
                <Button variant="danger" style={{fontWeight:'bold'}}
                        onClick={() => setLgShow(true)}>
                    YouTube(Clone) 
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
                        <h1>🚀YouTube(Clone)</h1>
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='Mb'>
                    <div className="m_img">
                        <img 
                            src={image3}
                            style={{ width: '400px', height: '300px', alignContent: 'center'}}
                        />
                    </div>
                    <div style={{marginTop:'30px', marginBottom: '60px'}}>
                    1️⃣ 대부분의 사람이 알만한 대중성 있는 사이트 Youtube를 클론코딩한 프로젝트 입니다.<br/>
                    2️⃣ 완전히 똑같은 기능의 YouTube 가 아닌 기존 YouTube에 부족한 부분의 여러가지 기능을 추가하거나 변경 하고자 노력 하였습니다.
                    </div>
                    <hr/>
                    <h4>📆 제작기간</h4>
                    <h5>2023년 4월 17일 → 2023년 5월 1일</h5>
                    <hr/>
                    <h4><a href="https://github.com/dd1761/miniProject" style={{textDecoration: 'none'}}>💻 Github</a></h4>
                    <hr/>
                    <h4><a href="https://www.youtube.com/embed/Uop4cV5By24" style={{textDecoration: 'none'}}>📺 시연영상</a></h4>
                    <hr/>
                    <h4>🛠️ Specification</h4>
                    <div className="m_img">
                        <img 
                            src={image5}
                            style={{ width: '500px', height: '300px', alignContent: 'center'}}
                        />
                    </div>
                    <hr/>
                    <h4>🧐 담당 역할</h4>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Pigma 설계</Accordion.Header>
                            <Accordion.Body>
                            <h4><a href="https://www.figma.com/file/I4QHHICr4rTxX3Mioc4Z4c/minProject?type=design&node-id=0-1&mode=design" style={{textDecoration: 'none'}}>🌈피그마</a></h4>
                            <div>각 페이지별 기능과 특성을 정리해놓은 피그마입니다.</div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>로그인</Accordion.Header>
                            <Accordion.Body>
                                <div className="m_img">
                                    <img 
                                        src={image9}
                                        style={{ width: '600px', height: '300px'}}
                                    />
                                </div>
                                <div>
                                로그인은 Email을 입력하는 페이지와 Password를 입력하는 페이지를 Google로그인 형식에 맞게 페이지를 따로 분리하여 구현했습니다.<br/><br/>
                                Password를 입력하는 로그인 창에서 전 페이지에서 넘겨받은 Email데이터를 이름값과 프로필 사진, Email값을 화면에 뿌려줍니다.
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>회원 가입(+이메일 인증)</Accordion.Header>
                            <Accordion.Body>
                                <div className="m_img">
                                    <img 
                                        src={image10}
                                        style={{ width: '650px', height: '300px'}}
                                    />
                                </div>
                                <div className="m_img">
                                    <img 
                                        src={image11}
                                        style={{ width: '650px', height: '300px'}}
                                    />
                                </div>
                                <div>
                                회원가입을 진행할때 아이디는 기존의 이메일을 사용합니다.<br/><br/>
                                이메일 인증 기능을 추가하여 보안성을 강화하였습니다.(javax.mail)<br/><br/>
                                주민번호는 Email을 찾는데 사용됩니다.<br/><br/>
                                Email은 중복값 허용X, 회원가입이 완료되면 Email을 입력하는 로그인 창으로 이동합니다.
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Email 찾기</Accordion.Header>
                            <Accordion.Body>
                                <div className="m_img">
                                    <img 
                                        src={image12}
                                        style={{ width: '600px', height: '300px'}}
                                    />
                                </div>
                                <div>
                                Email을 입력하는 로그인 화면에서 “이메일을 잊으셧나요?” 클릭 후 진행합니다.<br/><br/>
                                회원가입시 입력했던 이름과 주민번호를 통해 Email을 찾을 수 있습니다.<br/><br/>
                                이메일 확인창에서 해당 Email을 클릭하면 Password를 입력하는 로그인 화면으로 이동합니다.
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Password 찾기(+이메일 인증)</Accordion.Header>
                            <Accordion.Body>
                                <div className="m_img">
                                    <img 
                                        src={image13}
                                        style={{ width: '600px', height: '300px'}}
                                    />
                                </div>
                                <div>
                                Password를 입력하는 로그인 화면에서 좌측 하단의 “비밀번호 찾기“ 클릭 후 진행<br/><br/>
                                Password 찾기를 할 때도 이메일 인증 기능을 추가하였습니다.
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>회원 정보 수정</Accordion.Header>
                            <Accordion.Body>
                                <div className="m_img">
                                    <img 
                                        src={image14}
                                        style={{ width: '600px', height: '350px'}}
                                    />
                                </div>
                                <div>
                                메인 페이지에서 계정 관리 클릭 후 진행합니다.<br/><br/>
                                프로필 사진 등록, 비밀번호, 이름, 생년월일, 성별, 휴대전화번호 변경 가능합니다.<br/><br/>
                                Email은 변경X(readonly)
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>회원 탈퇴</Accordion.Header>
                            <Accordion.Body>
                                <div className="m_img">
                                    <img 
                                        src={image15}
                                        style={{ width: '600px', height: '350px'}}
                                    />
                                </div>
                                <div>
                                회원정보 수정창에서 회원탈퇴 버튼 클릭 후 진행<br/><br/>
                                비밀번호를 입력한 후 회원탈퇴 진행
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header>이미지 업로드</Accordion.Header>
                            <Accordion.Body>
                                <div>
                                프로필 사진 및 썸네일 등록, 변경이 가능합니다.
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                        <hr/>
                        <h4>💬 회고</h4>
                        <div>
                        대중성 있는 Youtube라는 사이트를 클론 코딩해 봄으로써 많은 사람이 사용하는 서비스의 구조와 기능을 배울 수 있어 정말 유용했고, Web의 가장 기본이 되는 CRUD를 직접 구현해봄으로써 개발자로서의 역량을 한층 더 끌어 올릴 기회가 되었습니다.
                        </div>
                    </Modal.Body>
                </Modal>
            </Card.Body>
        </Card>
    );
};

export default Card1;