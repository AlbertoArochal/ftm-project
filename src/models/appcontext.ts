import { ImageType } from "./imagetype";
import { AppActionType } from "./appaction";

export type AppContextType = {
    images: ImageType[];
    BASE_URL: string;
    page: number;
    searchquery: string;
    dispatch?: React.Dispatch<AppActionType>;
};
