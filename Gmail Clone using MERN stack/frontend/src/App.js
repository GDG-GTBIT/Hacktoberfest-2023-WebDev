import "./App.css";
import {Route,RouterProvider, createBrowserRouter, createRoutesFromElements,Navigate  } from "react-router-dom";
import { routes } from "./routes/routes";
import { Suspense,lazy } from "react";
import SuspenseLoader from "./components/comman/SuspenseLoader";



const  ErrorComponent = lazy(()=>import("./components/comman/ErrorComponent"));

/* here BrowserRouter -> createBrowserRouter
Routes -> createRoutesFromElements*/

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    {/* this is the default route */}
      <Route path={routes.main.path} element={<Navigate to={`${routes.emails.path}/inbox`} />} />
      
      <Route path={routes.main.path} element={<routes.main.element />} >
        <Route path={`${routes.emails.path}/:type`} element={<routes.emails.element />} errorElement={<ErrorComponent />} />
        <Route path={routes.view.path} element={<routes.view.element />} errorElement={<ErrorComponent />} />
      </Route>

      <Route path={routes.invalid.path} element={<Navigate to={`${routes.emails.path}/inbox`} />} />
    </Route>
  )
)
function App() {
  return (
    <>
    <Suspense fallback={<SuspenseLoader/>}>
      <RouterProvider router={router} />
        {/* <Main /> */}
    </Suspense>
    </>
  );
}

export default App;
 