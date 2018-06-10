import {PashminaModel} from "./pashmina.model";

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

export class DescriptionModel {
    constructor(
        public descriptionId?: number,
        public pashminaDescription?: string,
        public pashminaId?: PashminaModel
    ) {
        this.descriptionId = descriptionId;
        this.pashminaDescription = pashminaDescription;
        this.pashminaId = pashminaId;
    }
}
