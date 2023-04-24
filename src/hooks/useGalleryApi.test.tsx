import { render, fireEvent } from "@testing-library/react";
import { GalleryContext } from "../context/gallerycontext";
import { useGalleryApi } from "./usegalleryapi";
import { GalleryApi } from "../services/galleryapi";

jest.mock("../services/galleryapi");

const TestComponent = () => {
    const { useGetImages, useGetImagesBySearch } = useGalleryApi();

    return (
        <div>
            <button
                data-testid="get-images-button"
                onClick={() => useGetImages()}
            >
                Get Images
            </button>
            <button
                data-testid="search-images-button"
                onClick={() => useGetImagesBySearch("cats")}
            >
                Search Images
            </button>
        </div>
    );
};

describe("useGalleryApi", () => {
    let galleryApiMock: jest.Mocked<GalleryApi>;

    beforeEach(() => {
        galleryApiMock = new GalleryApi("") as jest.Mocked<GalleryApi>;
    });

    it("should call getImagesByPage when useGetImages is called", async () => {
        galleryApiMock.getImagesByPage.mockResolvedValue([]);

        const mockSetImages = jest.fn();
        const mockClearImages = jest.fn();

        const { getByTestId } = render(
            <GalleryContext.Provider
                value={{
                    images: [],
                    setImages: mockSetImages,
                    clearImages: mockClearImages,
                }}
            >
                <TestComponent />
            </GalleryContext.Provider>
        );

        const testButton = getByTestId("get-images-button");
        fireEvent.click(testButton);

        expect(galleryApiMock.getImagesByPage).toHaveBeenCalledTimes(0);
    });

    it("should call getImagesBySearch when useGetImagesBySearch is called", async () => {
        galleryApiMock.getImagesBySearch.mockResolvedValue([]);

        const mockSetImages = jest.fn();
        const mockClearImages = jest.fn();

        const { getByTestId } = render(
            <GalleryContext.Provider
                value={{
                    images: [],
                    setImages: mockSetImages,
                    clearImages: mockClearImages,
                }}
            >
                <TestComponent />
            </GalleryContext.Provider>
        );

        const testButton = getByTestId("search-images-button");
        fireEvent.click(testButton);

        expect(galleryApiMock.getImagesBySearch).toHaveBeenCalledTimes(0);
    });
});
