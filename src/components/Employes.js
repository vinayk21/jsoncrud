import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Employes = () => {
  const [tableData, setTableData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3004/employe")
      .then((ee) => ee.json())
      .then((w) => setTableData(w));
  }, []);
  console.log("w", tableData);
  const deleteHandler =(ii) =>{
  
    let deletes = tableData.filter((ele)=>ele.id !== ii);
       setTableData(deletes);
       console.log("");
  }
  return (
    <>
     <button type="button" class="btn btn-success" onClick={()=>navigate("/create")}>
                      CreateRecord
                    </button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((el) => {
            return (
              <>
                <tr>
                  <th scope="row">{el.id}</th>
                  <th scope="row">{el.name}</th>
                  <th scope="row">{el.email}</th>
                  <th scope="row">{el.phone}</th>
                  <th scope="row" style={{gap:"20px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <button type="button" class="btn btn-success" onClick={()=>navigate(`/edit/${el.id}`)}>
                      Edit
                    </button>
                    <button type="button" class="btn btn-danger" onClick={()=>deleteHandler(el.id)}>
                      Remove
                    </button>
                    <button type="button" class="btn btn-secondary" onClick={()=>navigate("/details")}>
                      Details
                    </button>
                  </th>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Employes;
