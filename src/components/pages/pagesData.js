import Product from "./Product/product";
import Home from "./Home/Home";
import About from './About/about';

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
    },
    {
      path: 'about',
      element: <About />,
      title: 'about'
    }
];

export default pagesData;
