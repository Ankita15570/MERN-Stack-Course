import "bootstrap/dist/css/bootstrap.min.css";
import DetailsCard from "./components/DetailsCard";

export const App = () => {
  return (
    <>
      <div className="container">
        <div className="row my-2">
          <div className="col-md-3 my-2">
            <DetailsCard CardTitle="Title-1" CardDescription="Description-1" />
          </div>
          <div className="col-md-3 my-2">
            <DetailsCard CardTitle="Title-2" CardDescription="Description-2" />
          </div>
          <div className="col-md-3 my-2">
            <DetailsCard CardTitle="Title-3" CardDescription="Description-3" />
          </div>
          <div className="col-md-3 my-2">
            <DetailsCard CardTitle="Title-4" CardDescription="Description-4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
