import { Container, Col, Row } from "react-bootstrap"
import { HelpCircle } from 'react-ionicons'
import { Flower } from 'react-ionicons'


const Footer = () => {
    return (
        <Container id="footer">
            <Row>
                <div className="col-md-2">
                    <nav>
                        
                        <li class="py-1">
                            <a class="text-muted" href="#">
                                About
                            </a>
                        </li>
                        <li class="py-1">
                            <a class="text-muted" href="#">
                                Community Guidelines
                            </a>
                        </li>
                        <li class="py-1">
                            <a class="text-muted" href="#">
                                Privacy and Terms
                            </a>
                        </li>
                        <li class="py-1">
                            <a class="text-muted" href="#">
                                Sales Solutions
                            </a>
                        </li>
                        <li class="py-1">
                            <a class="text-muted" href="#">Safety Center</a>
                        </li>
                        <li class="py-1 mt-3">
                            <a class="text-muted" href="#">
                               LinkedIn Corporation © 2021
                            </a>
                        </li>
                    </nav>
                </div>
                <Col className="col-md-2">
                    <nav>
                        <li class="py-1">
                            <a class="text-muted" href="#">
                                Accessibility
                            </a>
                        </li>
                        <li class="py-1">
                            <a class="text-muted" href="#">
                                Careers
                            </a>
                        </li>
                        <li class="py-1">
                            <a class="text-muted" href="#">
                                Ad choices
                            </a>
                        </li>
                        <li class="py-1">
                            <a class="text-muted" href="#">
                                Mobile
                            </a>
                        </li>
                    </nav>
                </Col>
                <Col className="col-md-2">
                    <nav>
                        <li class="py-1">
                            <a class="text-muted" href="#">
                                Talent Solutions
                            </a>
                        </li>
                        <li class="py-1">
                            <a class="text-muted" href="#">
                                Marketing Solutions
                            </a>
                        </li>
                        <li class="py-1">
                            <a class="text-muted" href="#">
                                Advertising
                            </a>
                        </li>
                        <li class="py-1">
                            <a class="text-muted" href="#">
                                Small Business
                            </a>
                        </li>
                    </nav>
                </Col>
                <Col className="col-md-2">
                    <nav>
                        <li class="py-1">
                            <a class="text-muted" href="#">
                                Gift Cards
                            </a>
                        </li>
                        <li class="py-1">
                            <a class="text-muted" href="#">
                                Terms Of Use
                            </a>
                        </li>
                        <li class="py-1">
                            <a class="text-muted" href="#">
                                Corporate Information
                            </a>
                        </li>
                    </nav>
                </Col>
                <Col className="col-md-2">
                    <ul>
                        <li className='display-flex mb-4'>
                        <HelpCircle
                            color={'#4e4e4e'} 
                            title={help}
                            height="250px"
                            width="250px"
                        />
                        <span>
                            <a class="text-muted" href="#">Questions?</a>
                            <p class="text-muted">Visit our help center.</p>
                        </span>

                        </li>
                        <li className='display-flex list-style-none mb-4'>
                        <Flower
                            color={'#4e4e4e'} 
                            title={help}
                            height="250px"
                            width="250px"
                        />

                        <a className="text-muted" href="#">Manage your account and privacy</a>
                        <p className="text-muted">Go to your settings.</p>
                        </li>
                    </ul>
                </Col>
                <Col className="col-md-2">
                    <label className="text-muted">Select language</label>
                    <select></select>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer