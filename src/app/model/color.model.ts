import {PashminaModel} from "./pashmina.model";

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

export class PashminaColourModel {
    constructor(
        public colourId?: number,
        public color? : string,
        public pashminaId?: PashminaModel
    ) {
        this.colourId = colourId;
        this.color = color;
        this.pashminaId = pashminaId;
    }
}
