import Product from "./Product/product";
import Home from "./Home/Home";
import About from './About/about';
import Contact from "./Contact/contact";
import Order from "./Order/order";

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
    },
    {
      path: 'contact',
      element: <Contact />,
      title: 'contact'
    },
    {
      path: 'order',
      element: <Order />,
      title: 'order'
    }
];

export default pagesData;
