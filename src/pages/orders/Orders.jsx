import React from "react";
import "./Orders.scss";

const Orders = () => {

    const currentUser = {
      id: 1,
      username: "John Doe",
      isSeller: true,
  };
  
  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>

          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Maria Anders</td>
            <td>11</td>
            <td>John Doe</td>
            <td>
              <img className="message" src="./img/message.png" alt="" />
            </td>
          </tr>

          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Francisco Chang</td>
            <td>11</td>
            <td>John Doe</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>

          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Roland Mendel</td>
            <td>11</td>
            <td>John Doe</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>

          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Helen Bennett</td>
            <td>11</td>
            <td>John Doe</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>

          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Yoshi Tannamuri</td>
            <td>11</td>
            <td>John Doe</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>

          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Giovanni Rovelli</td>
            <td>11</td>
            <td>John Doe</td>
            <td>
              <img className="message" src="/img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;
