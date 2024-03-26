import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col gap-7 justify-center items-center">
      <h1 className="text-5xl">Opps!!!</h1>
      <Link to="/"><button className="btn btn-primary">Go Back</button></Link>
    </div>
  );
};

export default ErrorPage;
