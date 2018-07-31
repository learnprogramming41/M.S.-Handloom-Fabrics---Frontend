import {Injectable} from "@angular/core";
import {PashminaServiceEndpoint} from "./pashmina-service.endpoint";
import {PashminaModel} from "../../model/pashmina.model";

@Injectable()
export class PashminaService {
    constructor(private pashminaServiceEndpoint: PashminaServiceEndpoint) {
        
    }
    
    public addPashmina<T>(pashmina: PashminaModel) {
        return this.pashminaServiceEndpoint.addPashmina<PashminaModel>(pashmina);
    }
    
    public getAllPashmina<T>(pageSize: number, pageNumber: number) {
        return this.pashminaServiceEndpoint.getAllPashmin<PashminaModel>(pageSize, pageNumber);
    }
    
    public getAllPashminaCount<T>() {
        return this.pashminaServiceEndpoint.getAllPashminaCount();
    }
    
    public deletePashmina<T>(pashminaId: number) {
        return this.pashminaServiceEndpoint.deletePashmina<PashminaModel>(pashminaId);
    }
    
    public getPashminaById<T>(pashminaId: number) {
        return this.pashminaServiceEndpoint.getPashminaById<PashminaModel>(pashminaId);
    }
    
    public searchPashmina<T>(searchText: string) {
        return this.pashminaServiceEndpoint.searchPashmina<PashminaModel>(searchText);
    }
}
