import Product from "./product/product";
import Home from "./home/home";

const pagesData = [
  // example pageData
  // {
  //   path: "",
  //   element: <Home />,
  //   title: "home"
  // }

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
