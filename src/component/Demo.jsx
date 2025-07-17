import { useState } from "react"
function Demo() {
    const [arr, setArr] = useState(
        [
            {
                name: "Wireless Mouse",
                image: "https://m.media-amazon.com/images/I/61Mk3YqYHpL.jpg",
                category: "Electronics",
                price: 499
              },
              {
                name: "Running Shoes",
                image: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/6c2f7028e26d40ed98a512420cb4db00_9366/IG8292_HM3_hover.jpg",
                category: "Footwear",
                price: 1299
              },
              {
                name: "Notebook",
                image: "https://tse2.mm.bing.net/th/id/OIP.w_pqir6owpxSMwkzG4AGgQHaE8?pid=Api&P=0&h=180",
                category: "Stationery",
                price: 89
              },
              {
                name: "Water Bottle",
                image: "https://cleanwater.org/sites/default/files/2023-07/ReThink%20Disposable-PlasticFreeJuly-NJ.png",
                category: "Kitchen",
                price: 250
              },
              {
                name: "Bluetooth Speaker",
                image: "https://tse1.mm.bing.net/th/id/OIP.g-IXaRH2deMRDkasq9BDFQHaHa?pid=Api&P=0&h=180",
                category: "Electronics",
                price: 999
              }
        ]
    )
    return (
        <div className="container border border-2">{
            // Object.entries(arr).map(([a, b], i) => (
            //     <p>{a}:{b}</p>
            // ))

            <div className="row">
            {arr.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100">
                  <img src={item.image} alt={item.name} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Category: {item.category}</p>
                    <p className="card-text">Price: ₹{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
         <h1 className="text-center text-primary">Welcome to React + Bootstrap</h1>
         <button className="btn btn-success">Click Me</button>
        </div>
    )
}
export default Demo