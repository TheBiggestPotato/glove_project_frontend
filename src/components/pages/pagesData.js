import Product from "./Product/product";
import Home from "./Home/Home";

const pagesData = [
    {
      path: "",
      element: <Home />,
      title: "home"
    },

    {
        path: 'product',
        element: <Product />,
        title: 'product'
    }
];

export default pagesData;
