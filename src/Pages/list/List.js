import Datatable from "../../components/datatable/Datatable";
import Navbar from "../../Layout/navbar/Navbar"
import Sidebar from "../../Layout/sidebar/Sidebar"
import './list.scss'
const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
}

export default List


