import React from 'react';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';

class Pricing extends React.Component {

  render() {
    return  <PricingTable  highlightColor='#1976D2'>
    <PricingSlot highlighted onClick={() => window.location.href = 'https://cortexflex.copilot.app'} buttonText='GO TO THE PORTAL' title='theCORTEX COMMUNITY' priceText='$20/month*'>
        <PricingDetail> <b>Access</b> to theCORTEX app and Community</PricingDetail>
        <PricingDetail> <b>Access</b> to Cortex Courses</PricingDetail>
        <PricingDetail> <i>*Limited Merit and Need-based Aid Available</i></PricingDetail>
        </PricingSlot>
    <PricingSlot  onClick={() => window.location.href = 'https://cortexflex.copilot.app'} buttonText='GO TO THE PORTAL' title='theCORTEX ACADEMY' priceText='$120/month*'>
        <PricingDetail> <b>Access</b> to theCORTEX App and Community </PricingDetail>
        <PricingDetail> <b>Access</b> to Cortex Courses</PricingDetail>
        <PricingDetail> <b>3</b> 30 minute 1:1 meetings with a Community Mentor</PricingDetail>
        <PricingDetail> <i>*Limited Merit and Need-based Aid Available</i></PricingDetail>
        </PricingSlot>
    <PricingSlot    onClick={() => window.location.href = 'cortexflex.copilot.app'} buttonText='GO TO THE PORTAL' title='theCORTEX ACADEMY + 1:1 MENTORSHIP' priceText='Contact the team for more details*'>
    <PricingDetail> <b>Acess</b> to theCORTEX app and </PricingDetail>
    <PricingDetail> <b>Access</b> to Cortex Courses</PricingDetail>
    <PricingDetail> <b>Unlimited</b> 1:1 meetings with a Community Mentor</PricingDetail>
    <PricingDetail> <i>*Limited Merit and Need-based Aid Available</i></PricingDetail>
    </PricingSlot>
</PricingTable>

  }
}

export default Pricing;
