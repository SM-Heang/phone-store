import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import { Home, About, Accessory, Service, ProductDetail } from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ":id",
        element: <ProductDetail />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "accessories",
        element: <Accessory />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
