import {Injectable} from "@angular/core";
import {PashminaServiceEndpoint} from "./pashmina-service.endpoint";
import {PashminaModel} from "../../model/pashmina.model";

@Injectable()
export class PashminaService {
    constructor(private pashminaServiceEndpoint: PashminaServiceEndpoint) {
        
    }
    
    public addPashmina<T>(pashmina: PashminaModel) {
        return this.pashminaServiceEndpoint.addPashmina(pashmina);
    }
    
    public getAllPashmina<T>() {
        return this.pashminaServiceEndpoint.getAllPashmin();
    }
}
