import { Layout } from "./components/layout/layout";
import { GalleryProvider } from "./context/galleryprovider";

function App() {
    return (
        <>
            <GalleryProvider>
                <Layout />
            </GalleryProvider>
        </>
    );
}

export default App;
