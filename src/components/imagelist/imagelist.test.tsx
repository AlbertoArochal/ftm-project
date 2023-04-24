import { render } from "@testing-library/react";
import { ImageList, ImageListProps } from "./imagelist";
import { useGalleryApi } from "../../hooks/usegalleryapi";

jest.mock("../../hooks/usegalleryapi");

const useGetImagesMock = jest.fn();
(useGalleryApi as jest.Mock).mockReturnValue({
    useGetImages: useGetImagesMock,
});

describe("ImageList", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    const defaultProps: ImageListProps = {
        page: 1,
        searchQuery: "",
    };

    it("calls useGetImages with default values", () => {
        render(<ImageList {...defaultProps} />);
        expect(useGetImagesMock).toHaveBeenCalledWith(1, "");
    });

    it("calls useGetImages with custom page value", () => {
        render(<ImageList {...defaultProps} page={3} />);
        expect(useGetImagesMock).toHaveBeenCalledWith(3, "");
    });

    it("calls useGetImages with custom search query value", () => {
        render(<ImageList {...defaultProps} searchQuery="landscape" />);
        expect(useGetImagesMock).toHaveBeenCalledWith(1, "");
    });
});
