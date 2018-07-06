import {Injectable} from "@angular/core";
import {HomeServiceEndpoint} from "./home-service.endpoint";

@Injectable()
export class HomeService {
    constructor(
        private homeServiceEndpoint: HomeServiceEndpoint
    ) {  }
    
    public getPashmina<T>(pageSize: number, pageNumber: number) {
        return this.homeServiceEndpoint.getPashmina(pageSize, pageNumber);
    }
    
    public getPashminaById<T>(pashminaId: number) {
        return this.homeServiceEndpoint.getPashminaById(pashminaId);
    }
}