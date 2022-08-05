import React, { useEffect, useState } from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import { getAuth, deleteUser } from "firebase/auth";
import { db } from "../../firebase";
function Datatable() {
  //Fetching user's data from Firebase
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        console.log(list);
        setData(list);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    const unsub = onSnapshot(collection(db, "users"), (snapShot) => {
      let list = [];

      snapShot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setData(list);
      return () => {
        unsub();
      };
    });
  }, []);



  const handleDelete = async (id) => {
    const auth = getAuth();
    const user = auth.currentUser;

    try {
      await deleteDoc(doc(db, "users", id));
      await deleteUser(user);
    } catch (error) {
      console.log(error);
    }
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>

            <div
              onClick={() => handleDelete(params.row.id)}
              className="deleteButton"
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add new User
        <Link
          to="/meetings/new"
          style={{ textDecoration: "none" }}
          className="link"
        >
          Add new{" "}
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}

export default Datatable;
