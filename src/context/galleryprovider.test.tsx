import { render, screen } from "@testing-library/react";
import { GalleryProvider } from "./galleryprovider";
import { initialState } from "../reducer/galleryReducer";
import { ImagesMock } from "../testmocks/imagesmock";
import { useContext, useEffect } from "react";
import { GalleryContext } from "./gallerycontext";

describe("GalleryProvider", () => {
    it("should render the children", () => {
        render(
            <GalleryProvider initialState={initialState}>
                <div>Test Children</div>
            </GalleryProvider>
        );

        expect(screen.getByText("Test Children")).toBeInTheDocument();
    });

    it("should provide images and setImages functions to context", () => {
        const images = ImagesMock;
        const setImages = jest.fn();
        const TestComponent = () => {
            const { images, setImages } = useContext(GalleryContext);

            useEffect(() => {
                setImages(ImagesMock);
            }, [setImages]);

            return (
                <>
                    <div data-testid="images-count">
                        Images: {images.length}
                    </div>
                </>
            );
        };

        render(
            <GalleryProvider initialState={initialState}>
                <TestComponent />
            </GalleryProvider>
        );

        expect(screen.getByTestId("images-count")).toHaveTextContent(
            "Images: 1"
        );
        expect(setImages).toHaveBeenCalledWith(images);
    });
});
