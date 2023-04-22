import { ImageType } from "../models/imagetype";

export class GalleryApi {
    constructor(private BASE_URL: string) {}
    async getImagesByPage(page: number): Promise<ImageType[]> {
        const response = await fetch(`${this.BASE_URL}/images?page=${page}`);
        const data = await response.json();
        return data;
    }
    async getImagesBySearch(search: string): Promise<ImageType[]> {
        const response = await fetch(
            `${this.BASE_URL}/images?search=${search}`
        );
        const data = await response.json();
        return data;
    }
    async likeImage(id: number): Promise<ImageType> {
        const response = await fetch(`${this.BASE_URL}/images/${id}/likes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data;
    }
}
