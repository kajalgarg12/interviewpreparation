import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState([null]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const AddProductInfo = async () => {
    let formField = new FormData();
    

    formField.append("name", name);
    formField.append("price", price);
    formField.append("description", description);
    formField.append("category", category);
    if (image !== null) {
      formField.append("image", image);
    }
    console.log(formField);
    await axios({
      method: "POST",
      url: "http://localhost:8000/api/",
      data: formField,
    }).then((response) => {
      console.log(response.data);
      navigate("/")
    });
  };

  return (
    <div>
      <h1> add product </h1>
      <div className="container">
        <div className="form-group">
          <div className="form-control">
            <input
              type="file"
              className="form-control form-control-lg"
              name="image"
              src={image}
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter price"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="form-group">
              <textarea
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter description"
                name="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <button className="btn btn-success" onClick={AddProductInfo}>
              Addproduct
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
// import axios from 'axios'
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const AddProducts = () => {
//     const [image, setImage] = useState(null)
//     const [name, setName] = useState("")
//     const [price, setPrice] = useState("")
//     const [description, setDescription] = useState("")
//     const [category, setCategory] = useState("")

//     const navigate = useNavigate()

//     const AddProductInfo = async () => {
//         let formField = new FormData()

//         formField.append('name', name)
//         formField.append('price', price)
//         formField.append('description', description)
//         formField.append('category', category)
//         if (image !== null) {
//             formField.append('image', image)
//         }
//         await axios({
//            method:'post',
//            url: 'http://localhost:8000/api/',
//            data: formField
//         }).then((response) => {
//             console.log(response.data)
//             navigate('/')
//         })
//     }

//     return (
//         <div>
//             <div className='container'>
//                 <h1>Add Product</h1>
//                 <div className='form-group'>
//                     <div className='form-conrrol'>
//                         <div className='form-group my-3'>
//                             <input
//                                 type="file"
//                                 className='form-control form-control-lg'
//                                 name='image'
//                                 onChange={(e) => setImage(e.target.files[0])}
//                             />
//                         </div>
//                         <div className='form-group my-3'>
//                             <input
//                                 type="text"
//                                 className='form-control form-control-lg'
//                                 placeholder='Enter Product Name'
//                                 name='name'
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                             />
//                         </div>
//                         <div className='form-group my-3'>
//                             <input
//                                 type="text"
//                                 className='form-control form-control-lg'
//                                 placeholder='Enter Product Price'
//                                 name='price'
//                                 value={price}
//                                 onChange={(e) => setPrice(e.target.value)}
//                             />
//                         </div>
//                         <div className='form-group my-3'>
//                             <textarea
//                                 type="text"
//                                 className='form-control form-control-lg'
//                                 placeholder='Enter Product Description'
//                                 name='description'
//                                 value={description}
//                                 onChange={(e) => setDescription(e.target.value)}
//                             />
//                         </div>
//                         <div className='form-group my-3'>
//                             <input
//                                 type="text"
//                                 className='form-control form-control-lg'
//                                 placeholder='Enter Product Category'
//                                 name='category'
//                                 value={category}
//                                 onChange={(e) => setCategory(e.target.value)}
//                             />
//                         </div>
//                         <button className='btn btn-success' onClick={AddProductInfo}>Add Product</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default AddProducts
