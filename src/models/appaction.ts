import { ImageType } from "./imagetype";
export type AppActionType = {
    type: "UPDATE_IMAGES";
    payload: ImageType[] | void;
};
