import { useContext } from "react";
import { render, screen } from "@testing-library/react";
import { GalleryContext, GalleryContextType } from "./gallerycontext";
import { ImagesMock } from "../testmocks/imagesmock";

const TestComponent = () => {
    const { images, setImages } =
        useContext<GalleryContextType>(GalleryContext);

    return (
        <>
            <div data-testid="image-count">{images.length}</div>
            <button onClick={() => setImages([])}>Clear images</button>
        </>
    );
};

describe("GalleryContext", () => {
    it("should render with default values", () => {
        render(<TestComponent />);
        const imageCountElement = screen.getByTestId("image-count");

        expect(imageCountElement.textContent).toBe("0");
    });

    it("should update the image count when images are added", () => {
        const { getByTestId } = render(<TestComponent />, {
            wrapper: ({ children }) => (
                <GalleryContext.Provider
                    value={{
                        images: ImagesMock,
                        setImages: () => {},
                    }}
                >
                    {children}
                </GalleryContext.Provider>
            ),
        });
        const imageCountElement = getByTestId("image-count");

        expect(imageCountElement.textContent).toBe("2");
    });

    it("should update the image count when images are cleared", () => {
        const { getByTestId, getByText } = render(<TestComponent />, {
            wrapper: ({ children }) => (
                <GalleryContext.Provider
                    value={{
                        images: ImagesMock,
                        setImages: () => {},
                    }}
                >
                    {children}
                </GalleryContext.Provider>
            ),
        });
        const imageCountElement = getByTestId("image-count");
        const clearImagesButton = getByText("Clear images");

        expect(imageCountElement.textContent).toBe("2");
    });
});
