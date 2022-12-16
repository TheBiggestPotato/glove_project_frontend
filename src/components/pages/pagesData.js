import Product from "./Product/product";
import Home from "./Home/Home";
import About from './About/about';
import Contact from "./Contact/contact";

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
    }
];

export default pagesData;
