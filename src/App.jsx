import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./Components/reducer/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext";
import "./api/globalAxios"

function App() {
  return (
    <div>
      <Provider store={store}>
        <AuthProvider>
          <RouterProvider router={routes} />
          <ToastContainer />
        </AuthProvider>
      </Provider>
    </div>
  );
}

export default App;
