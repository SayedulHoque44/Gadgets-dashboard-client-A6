import { Button } from "antd";
import { Link } from "react-router-dom";

const SucessCartPage = () => {
  return (
    <div className="lg:p-20">
      <div className="p-10 bg-gray-200 text-center space-y-3 text-2xl">
        <h1 className="font-semibold text-success">Success!</h1>
        <p>
          Your order has been added, <br /> Let's Shopping more...
        </p>
        <Link className="mt-5 inline-block" to={"/dashboard/SalesManagement"}>
          <Button>Shop!</Button>
        </Link>
      </div>
    </div>
  );
};

export default SucessCartPage;
