import { ImageType } from "./imagetype";
import { AppActionType } from "./appaction";

export interface AppState {
    images: ImageType[];
    BASE_URL: string;
    dispatch?: React.Dispatch<AppActionType>;
}
