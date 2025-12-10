import { Accordion } from "react-bootstrap";

export default function FAQCard() {

  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>How do I reserve an item?</Accordion.Header>
        <Accordion.Body>
          To reserve an item, first browse the <strong>Catalog</strong> and add items to your cart.
          Then, fill out the <strong>Checkout Form</strong> with your reservation details.
          You'll pick up your reserved item at the SAC Front Desk on your reservation start date.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>What payment methods do you accept?</Accordion.Header>
        <Accordion.Body>
          We accept Wiscard, credit cards, debit cards, and funding strings.
          If paying with Wiscard or credit/debit, you'll pay when you pick up the item.
          If using a funding string, provide the information in the Checkout Form.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>What happens if I return an item late?</Accordion.Header>
        <Accordion.Body>
          Returning items late will result in fees starting at 200% of the item's reservation fee.
          Repeated late returns may result in losing the privilege to reserve items in the future.
          All items must be returned to the Front Desk by their due date and time.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Can I reserve multiple items at once?</Accordion.Header>
        <Accordion.Body>
          Yes! Add multiple items to your cart from the Catalog, then you can submit separate
          Checkout Forms for each item you want to reserve. Each item will have its own
          reservation dates and payment information.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Where do I pick up and return items?</Accordion.Header>
        <Accordion.Body>
          All items must be picked up and returned at the SAC Front Desk, located on the
          third floor of 333 E Campus Mall. Items must be returned at least one hour before
          closing time (9PM Sun-Thurs or 7PM Fri-Sat).
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}