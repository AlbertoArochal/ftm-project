import { render, fireEvent } from "@testing-library/react";
import { useGalleryApi } from "../../hooks/usegalleryapi";
import { LikeButton } from "./likebutton";

jest.mock("../../hooks/usegalleryapi");

const mockUseLikeImage = jest.fn();
jest.mock("../../hooks/usegalleryapi", () => ({
    useGalleryApi: () => ({
        useLikeImage: () => mockUseLikeImage,
    }),
}));

describe("LikeButton", () => {
    it("should call useLikeImage when clicked", async () => {
        const { getByTestId } = render(
            <LikeButton imageId={1} initialIsLiked={false} likesCount={0} />
        );

        const likeButton = getByTestId("like-button");
        fireEvent.click(likeButton);

        expect(mockUseLikeImage).toHaveBeenCalledTimes(1);
    });
});
