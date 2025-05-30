import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import { Row , Col} from 'react-bootstrap'
import Footer from './Footer'
import Aside from './Aside'
export default function Layouts() {
    return (
        <>
            <Header />
            <main>
                <Row className="h-100">
                    <Col sm={2} className="u_tbdr h-100">
                        <Aside />
                    </Col>
                    <Col sm={10} className="u_tbdr h-100">
                      <Outlet />
                    </Col>
                </Row>
            </main>
            <Footer />
        </>
    )
}
