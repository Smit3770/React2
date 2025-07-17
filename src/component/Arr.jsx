import { useState } from "react";
function Arr() {
    // const [arr] = useState(
    //     [
    //         {
    //             "name": "smit",
    //             "age": "20",
    //             "email": "smit@gmail.com"
    //         },
    //         {
    //             "name": "dhvij",
    //             "age": "20",
    //             "email": "dhvij@gmail.com",
    //             "Owner": {
    //                 name: 'john',
    //                age: 25,
    //               },
    //         }
    //     ]
    // )

    // return (
    //     <>
    //         <div>
    //             {arr.map((item) => (
    //                 <div >
    //                     <p>Name : {item.name}</p>
    //                     <p>Age : {item.age}</p>
    //                     <p>Email : {item.email}</p>
    //                 </div>
    //             ))}
    //         </div>
    //     </>
    // )

    const arr1=[10,20,30]
    const arr2=[40,50,60]
    const array=[...arr1,...arr2]

    console.log(...array)
}

export default Arr