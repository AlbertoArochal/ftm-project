import { GalleryApi } from "./galleryapi";

describe("GalleryApi", () => {
    const mockFetch = jest.fn();
    global.fetch = mockFetch as any;

    beforeEach(() => {
        mockFetch.mockClear();
    });

    it("should call getImagesByPage with the correct url", async () => {
        mockFetch.mockResolvedValue({ status: 200, json: () => [] });

        const galleryApi = new GalleryApi("http://localhost:3100");

        await galleryApi.getImagesByPage(1);

        expect(mockFetch).toHaveBeenCalledWith(
            "http://localhost:3100/images?page=1"
        );
    });

    it("should call getImagesBySearch with the correct url", async () => {
        mockFetch.mockResolvedValue({ status: 200, json: () => [] });

        const galleryApi = new GalleryApi("http://localhost:3100");

        await galleryApi.getImagesBySearch("cats");

        expect(mockFetch).toHaveBeenCalledWith(
            "http://localhost:3100/images?search=cats"
        );
    });

    it("should call likeImage with the correct url and method", async () => {
        mockFetch.mockResolvedValue({ status: 204 });

        const galleryApi = new GalleryApi("http://localhost:3100");

        await galleryApi.likeImage(1);

        expect(mockFetch).toHaveBeenCalledWith(
            "http://localhost:3100/images/1/likes",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    });
});
