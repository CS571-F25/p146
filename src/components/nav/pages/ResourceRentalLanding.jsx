import { Col, Container, Row } from "react-bootstrap";

export default function ResourceRentalLanding(props) {

  return <div>
    <Container fluid={true}>
      <Row>
        <Col>
          <h1>Welcome to Resource Rentals! </h1>
          < br />
          <p>I currently work at the front desk at the Student Activities Center, and we just began a new system
            where members of registered student organizations (RSOs) can rent items useful for meetings,
            fairs, and various other events.</p>
          < br />
          <p>A RSO Print and Resource Center (PRC) reservation allows students and
            RSOs to borrow equipment, games, and specialty items for a reduced cost. Students in RSOs are responsible
            for submitting reservation requests (through an online form), picking up items (at the front desk), and
            returning them by the due date. Each item contains a policy card with check-out/check-in requirements, and
            eligibility to reserve or check out items relies on confirming student status. When items are checked out,
            they are labelled as so on the website in order to inform other students that the item(s) they are looking
            for may already be reserved.</p>
          < br />
          <p>At the SAC, we have a system for these reservations, but it relies on multiple
            different avenues (including the Wisconsin Involvement Network, Google Docs, Google Sheets, and Google Forms)
            to work correctly; I think it would be interesting to merge all of these different aspects into one website,
            especially because the process includes an abundance of interactive elements (reservation form submission,
            search feature for resources, and status checks for both items and students.)</p>
        </Col>
      </Row>
    </Container>
  </div>
}