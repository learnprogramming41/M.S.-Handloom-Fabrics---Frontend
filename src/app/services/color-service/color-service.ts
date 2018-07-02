import {Injectable} from "@angular/core";
import {ColorServiceEndpoint} from "./color-service.endpoint";
import {PashminaColourModel} from "../../model/color.model";

@Injectable()
export class ColorService {
    constructor(
        private colorServiceEndpoint: ColorServiceEndpoint 
    ) {}
    
    public addColor<T>(pashminaColorModel: PashminaColourModel) {
        return this.colorServiceEndpoint.addColor(pashminaColorModel);
    }
    
    public updateColor<T>(pashminaColorModel: PashminaColourModel) {
        return this.colorServiceEndpoint.updateColor(pashminaColorModel);
    }
    
    public deleteColor<T>(colorId: number) {
        return this.colorServiceEndpoint.deleteColor(colorId);
    }
}