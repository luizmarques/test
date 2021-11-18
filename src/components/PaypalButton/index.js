import { PayPalButtons } from "@paypal/react-paypal-js";
import styled from "styled-components";

const PayPalButton = ({ estimative,onSuccess, onError }) => {
  return (
    <PayPalButtonsStyled
      createOrder={(data, actions) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              amount: {
                currency_code: "BRL",
                value: estimative.price,
              },
              custom_id: "0001",
            },
          ],
          application_context: {
            brand_name: "FOX ENTREGAS",
            shipping_preference: "NO_SHIPPING",
          },
        });
      }}
      onApprove={(data, actions) =>
        actions.order.capture().then((details) => onSuccess(details))
      }
      onError={onError}
      style={{
        layout: "horizontal",
        color: "blue",
        shape: "rect",
        tagline: false,
        height: 35,
      }}
    />
  );
};

export default PayPalButton;

const PayPalButtonsStyled = styled(PayPalButtons)`
  width: 200px;
  .paypal-buttons {
    display: block !important;
  }
`;
