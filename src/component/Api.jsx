import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function Api() {
    const [text, setText] = useState({
        id: "",
        name: "",
        price: ""
    });
    const [product, setProduct] = useState([]);
    const [edit, setEdit] = useState(null)
    const [search, setsearch] = useState("")
    const [sortprice, setsortPrice] = useState("")

    useEffect(() => {
        fetchApi();
    }, [search]);

    const fetchApi = async () => {
        const info = await axios.get("http://localhost:3000/data", {
            params: { name: search }
        });
        setProduct(info.data);
    };

    const sortedProducts = [...product].sort((a, b) => {
        if (sortprice === "lowToHigh") {
            return Number(a.price) - Number(b.price);
        } else if (sortprice === "highToLow") {
            return Number(b.price) - Number(a.price);
        }
    });


    function AddText(e) {
        setText({ ...text, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (edit != null) {
            await axios.put(`http://localhost:3000/data/${edit}`, text)
            setEdit(null)
        }
        else {
            await axios.post("http://localhost:3000/data", text);
        }
        setText({ id: "", name: "", price: "" })
        fetchApi();
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3000/data/${id}`);
        fetchApi();
    };

    const handleEdit = async (item) => {
        setText({ id: item.id, name: item.name, price: item.price })
        setEdit(item.id)
    };

    return (
        <div>
            <h1>Api</h1>
            <input type="text" name='search' value={search} onChange={((e) => { setsearch(e.target.value) })} />
            <select onChange={(e) => setsortPrice(e.target.value)} value={sortprice}>
                <option value="">Sort By Price</option>
                <option value="lowToHigh">Low To high</option>
                <option value="highToLow">High To Low</option>
            </select>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='enter id' name="id" value={text.id} onChange={AddText} />
                <input type="text" placeholder='enter name' name="name" value={text.name} onChange={AddText} />
                <input type="text" placeholder='enter price' name="price" value={text.price} onChange={AddText} />
                <input type="submit" />
            </form>

            {sortedProducts.map((el, i) => (
                <div key={i}>
                    <p>{el.id}</p>
                    <p>{el.name}</p>
                    <p>{el.price}</p>
                    <button onClick={() => handleEdit(el)}>edit</button>
                    <button onClick={() => handleDelete(el.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}
