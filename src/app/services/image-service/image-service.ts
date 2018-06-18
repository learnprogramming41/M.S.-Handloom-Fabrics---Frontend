import {Injectable} from "@angular/core";
import {ImageServiceEndpoint} from "./image-service.endpoint";

@Injectable()
export class ImageService {
    constructor(
        private imageServiceEndpoint: ImageServiceEndpoint
    ) {  }
    
    public uploadImage<T>(file: FormData) {
        return this.imageServiceEndpoint.uploadImage(file);
    }
}

