import { Layout } from "./components/layout/layout";
import { AppProvider } from "./context/appprovider";

function App() {
    return (
        <>
            <AppProvider>
                <Layout />
            </AppProvider>
        </>
    );
}

export default App;
