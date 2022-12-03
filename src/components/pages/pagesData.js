import Product from "./product/product";
import Home from "./home/home";

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
