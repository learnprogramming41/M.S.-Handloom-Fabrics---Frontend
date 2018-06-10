import {PashminaColourModel} from "./color.model";
import {ImageModel} from "./image.model";
import {DescriptionModel} from "./description.model";

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

export class PashminaModel {
    constructor(
        public pashminaId?: number,
        public pashminaName?: string,
        public price?: number,
        public addedAt?: Date,
        public enabled?: boolean,
        public category?: string,
        public pashminaColor?: PashminaColourModel[],
        public images?: ImageModel[],
        public descriptions?: DescriptionModel[]
    ) {
        this.pashminaId = pashminaId;
        this.pashminaName = pashminaName;
        this.price = price;
        this.addedAt = addedAt;
        this.enabled = enabled;
        this.category = category;
        
        if (pashminaColor) {
            this.pashminaColor = pashminaColor;
        } else {
            this.pashminaColor = new Array<PashminaColourModel>();
        }
        
        if(images) {
            this.images = images;
        } else {
            this.images = new Array<ImageModel>();
        }
        
        if (descriptions) {
            this.descriptions = descriptions;
        } else {
            this.descriptions = new Array<DescriptionModel>();
        }
    }
}
