import { render, screen, act } from "@testing-library/react";
import { GalleryProvider } from "./galleryprovider";
import { ImagesMock } from "../testmocks/imagesmock";
import { GalleryContext } from "./gallerycontext";
import { useEffect, useContext } from "react";

const mockedInitialState = {
    images: [],
};
describe("GalleryProvider", () => {
    it("should render the children", () => {
        render(
            <GalleryProvider initialState={mockedInitialState}>
                <div>Test Children</div>
            </GalleryProvider>
        );

        expect(screen.getByText("Test Children")).toBeInTheDocument();
    });

    it("should provide images and setImages functions to context", async () => {
        const images = ImagesMock;
        const TestComponent = () => {
            const { images, setImages } = useContext(GalleryContext);

            useEffect(() => {
                setImages(ImagesMock);
            }, []);

            return (
                <>
                    <div data-testid="images-count">
                        Images: {images.length}
                    </div>
                </>
            );
        };
        await act(async () => {
            render(
                <GalleryProvider initialState={mockedInitialState}>
                    <TestComponent />
                </GalleryProvider>
            );
        });

        expect(screen.getByTestId("images-count")).toHaveTextContent(
            "Images: 2"
        );
    });
});
