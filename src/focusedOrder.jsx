import getPastOrder from "./api/getPastOrder";
import Modal from "../Modal";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const [focusedOrder, setFocusedOrder] = useState();

const { isLoading: isLoadingPastOrder, data: pastOrderData } = useQuery({
  queryKey: ["past-order", focusedOrder],
  queryFn: () => getPastOrder(focusedOrder),
  enabled: !!focusedOrder,
  staleTime: 24 * 60 ** 60 * 1000,
});

{
  focusedOrder ? (
    <Modal>
      <h2>Order #{focusedOrder}</h2>
      {!isLoadingPastOrder ? (
        <table>
          <thead>
            <tr>
              <td>Image</td>
              <td>Name</td>
              <td>Size</td>
              <td>Quantity</td>
              <td>Price</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            {pastOrderData.orderItems.map((pizza) => (
              <tr key={`${pizza.pizzaTypeId}_${pizza.size}`}>
                <td>
                  <img src={pizza.image} alt={pizza.name} />
                </td>
                <td>{pizza.name}</td>
                <td>{pizza.size}</td>
                <td>{pizza.quantity}</td>
                <td>{intl.format(pizza.price)}</td>
                <td>{intl.format(pizza.total)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={() => setFocusedOrder()}>Close</button>
    </Modal>
  ) : null;
}
