import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


 
  
const Empedit = () => {
    
    const [id, setIds] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [active, setActive] = useState();
    const { ids } = useParams();
  
    useEffect(() => {
      fetch(`http://localhost:3004/employe/${ids}`)
        .then((res) => res.json())
        .then(
          (response) =>{ setIds(response.id);
          setName(response.name);
          setEmail(response.email);
          setPhone(response.phone);
          setActive(response?.active)}
        );
    }, []);
   const submitHandler = () =>{
        const editeddata = {id,name,email,phone,active};
        fetch(`http://localhost:3004/employe/${ids}`,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(editeddata)
        }).then((rr)=>alert("dataedited successfully")).catch((error)=>console.log("errors"))
   }
  return (
    <>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <div className="card">
            <div className="card-title">Emplyees-Listing</div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>ID</label>
                    <input className="form-control" value={id} disabled></input>
                    <label>Name</label>
                    <input
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                    <label>Email</label>
                    <input
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <label>Phone</label>
                    <input
                      className="form-control"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    ></input>
                    <input
                      type="checkbox"
                      checked={active}
                      onChange={(e) => setActive(e.target.checked)}
                    ></input>
                    <label style={{ marginLeft: "10px" }}>Is Active</label>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Link to={"/"} className="btn btn-danger">
                      Back
                    </Link>
                    <Link
                      className="btn btn-success"
                      onClick={() => submitHandler()}
                    >
                      Save
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Empedit;
