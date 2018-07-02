import {Injectable} from "@angular/core";
import {DescriptionServiceEndpoint} from "./description-service.endpoint";
import {DescriptionModel} from "../../model/description.model";

@Injectable()
export class DescriptionService {
    
    constructor(
        private descriptionServiceEndpoint: DescriptionServiceEndpoint 
    ) {}
    
    public addColor<T>(descriptionModel: DescriptionModel) {
        return this.descriptionServiceEndpoint.addDescription(descriptionModel);
    }
    
    public updateColor<T>(descriptionModel: DescriptionModel) {
        return this.descriptionServiceEndpoint.updateDescription(descriptionModel);
    }
    
    public deleteColor<T>(descriptionId: number) {
        return this.descriptionServiceEndpoint.deleteDescription(descriptionId);
    }
}