import resourcesData from '../../../data/resources.json';
import FAQCard from './FAQCard';

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Policies() {

  return <div>
    <h1>Reservation Policies</h1>
    <p>Please review these policies before reserving an item from the RSO Print and Resource Center.</p>

    <h2>How to Pay – Funding String</h2>
    <p>Reservation fees may be paid using a funding string. If you are using a funding string, you will need to provide the funding string information and approving staff member’s contact information in the <strong>Checkout Form</strong> you submit. SOLI staff will confirm that the funding is approved to process the reservation. If there are any issues, SOLI staff will let you know.</p>
    <p>Late, damage, and loss fees cannot be paid via a funding string and must be charged to a Wiscard or credit/debit card at the Front Desk.</p>

    <h2>How to Pay – Wiscard or Credit/Debit</h2>
    <p>If you are using a Wiscard or credit/debit card to pay reservation fees, you will pay at the Front Desk of the SAC (third floor of 333 E Campus Mall) when you pick up your reserved item. Reservation fees per item are listed in the <strong>Catalog</strong>.</p>

    <h2>Late and Damage Fees</h2>
    <p>All reserved items must be returned to the Front Desk by their due date and time. Items must be returned in the same condition (or better) than when picked up. Returning items late and/or damaged will result in additional fees starting at 200% of the item’s reservation fee. If an item is not returned or returned in an unusable state, there is an additional fee of 100% of the item’s purchase price.</p>
    <p>Failing to return an item on time, returning a damaged item, or failing to return an item at all may also result in losing the privilege to check out or reserve items in the future.</p>
    <p>Failing to pay any additional fees for late, damaged, or lost items will result in further action including the possible involvement of the Office of Student Conduct and Community Standards or UWPD.</p>

    <h2>Wii Items</h2>
    <p>All Wii items (kit, equipment, games) must remain in the SAC and are only compatible with the televisions in rooms 3155 and 4001. You should reserve either room in advance of reserving Wii equipment. Wii game and equipment are also available for immediate checkout from the front desk.</p>
    <p>If you have the equipment to use the Wii in your RSO’s office space in the SAC, let the front desk know. The SAC has some adapters available to connect the Wii, but it is your responsibility to confirm that the device will work in a different space before reservable.</p>

    <h1>FAQs</h1>
    <FAQCard />
  </div>
}