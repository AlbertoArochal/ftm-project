import { ImageType } from "../models/imagetype";

export class GalleryApi {
    constructor(private BASE_URL: string) {}
    async getImagesByPage(page: number): Promise<ImageType[]> {
        const response = await fetch(`${this.BASE_URL}/images?page=${page}`);
        if (response.status === 404) {
            return [];
        }
        const images = await response.json();
        return images;
    }
    async getImagesBySearch(search: string): Promise<ImageType[]> {
        const response = await fetch(
            `${this.BASE_URL}/images?search=${search}`
        );
        if (response.status === 404) {
            return [];
        }
        const images = await response.json();
        return images;
    }
    async likeImage(id: number): Promise<ImageType> {
        const response = await fetch(`${this.BASE_URL}/images/${id}/likes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.status === 404) {
            return {} as ImageType;
        }
        const data = await response.json();
        return data;
    }
}
