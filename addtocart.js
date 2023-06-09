 import React, { useState, useCallback } from "react";
import data from "./data";
import "./addtocart.css";
import { AiFillDelete } from "react-icons/ai";
import { GiPriceTag } from "react-icons/gi";

// function ADDTOCART({basket}) {
  
// {
//   basket.map((item))=>(
// <li>
       
//        <hr />
 
//        &nbsp;&nbsp;{item.name}
//        <div className="products">
//          &nbsp;<img src={image} width={200} alt={name} />
//        </div>
//        <div className="quantity">
//          <button className="increment"  >
//            +
//          </button>
//          &nbsp;qty&nbsp;
//          <button className="decrement">-</button>
//          &nbsp;&nbsp;&nbsp;&nbsp;
//          <button className="remove">
//            <AiFillDelete size={21} />
//          </button>
//          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//        </div>
//        <h2>
//          &nbsp;<GiPriceTag />
//          {price}
//        </h2>
//      </li>


// ))}
  
//   return (
//     <>
//       <h1>CHECKOUT</h1>
     
//       <hr />
//       <div className="total-section">
//         <h2>TOTAL AMOUNT</h2>
//       </div>
//     </>
//   );
// }

// export default ADDTOCART;

// import React, { useState, useCallback } from "react";
// import data from "./data";
// import "./addtocart.css";
// import { AiFillDelete } from "react-icons/ai";
// import { GiPriceTag } from "react-icons/gi";

// function ADDTOCART({ basket }) {
//   return (
//     <>
//       <h1>CHECKOUT</h1>
//       <ul>
//         {basket.map((item) => (
//           <li key={item.id}>
//             <hr />
//             &nbsp;&nbsp;{item.name}
//             <div className="products">
//               &nbsp;<img src={item.image} width={200} alt={item.name} />
//             </div>
//             <div className="quantity">
//               <button className="increment">+</button>
//               &nbsp;qty&nbsp;
//               <button className="decrement">-</button>
//               &nbsp;&nbsp;&nbsp;&nbsp;
//               <button className="remove">
//                 <AiFillDelete size={21} />
//               </button>
//               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//             </div>
//             <h2>
//               &nbsp;<GiPriceTag />
//               {item.price}
//             </h2>
//           </li>
//         ))}
//       </ul>
//       <hr />
//       <div className="total-section">
//         <h2>TOTAL AMOUNT</h2>
//       </div>
//     </>
//   );
// }

// export default ADDTOCART;

// function ADDTOCART({ basket }) {
//   return (
//     <>
//       <h1>CHECKOUT</h1>
//       {basket && basket.length > 0 ? (
//         <ul>
//           {basket.map((item) => (
//             <li key={item.id}>
//               <div><img src={item.image} width={300}></img></div>
//               {/* Item details */}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No items in the basket</p>
//       )}
//       <hr />
//       <div className="total-section">
//         <h2>TOTAL AMOUNT</h2>
//       </div>
//     </>
//   );
// }

function ADDTOCART({ basket }) {
  return (
    <>
    
    <div className="add-to-cart-container">
      <h1>CHECKOUT</h1>
      <hr />
      {basket && basket.length > 0 ? (
        <ul>
          {basket.map((item) => (
            <li key={item.id}>
              <div><img src={item.image} width={300}></img>
              <h6>{item.name}&nbsp;&nbsp;{item.price}</h6></div>
              {/* Item details */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No items in the basket</p>
      )}
      <div className="total-section">
        <h2>TOTAL AMOUNT=</h2>
      </div>
    </div>
    </>
  );
}
export default ADDTOCART;
