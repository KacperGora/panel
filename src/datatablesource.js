export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
  },

  {
    field: "phoneNumber",
    headerName: "Numer telefonu",
    width: 100,
  },
  
  { field: "lastVisit", headerName: "Ostatnia wizta", width: 130 },
];
