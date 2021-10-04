import "./assets/globalScss/index.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { store, persistor } from "./store/index";
import { Home } from "./layouts/Home";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={""} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <div className="App">
            <Home />
          </div>
          <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
