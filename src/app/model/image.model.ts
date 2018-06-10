import {PashminaModel} from "./pashmina.model";

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
export class ImageModel {
    constructor(
        public imageId?: number,
        public imageName?: string,
        public pashminaId?: PashminaModel    
    ) {
        this.imageId = imageId;
        this.imageName = imageName;
        this.pashminaId = pashminaId;
    }
}

