import {Injectable} from "@angular/core";
import {AuthorizationComponent} from "../../components/authorization.component";
import {HttpClient} from "@angular/common/http";
import {PashminaColourModel} from "../../model/color.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ColorServiceEndpoint {
    
    constructor(
        private http: HttpClient,
        private auth: AuthorizationComponent
    ) {}

    private readonly addColorUrl: string = "/admin-api/add-color";
    private readonly updateColorUrl: string = "/admin-api/update-color";
    private readonly deleteColorUrl: string = "/admin-api/delete-color";

    private get getAddColorUrl() {return this.auth.getBaseUrl + this.addColorUrl};
    private get getUpdateColorUrl() {return this.auth.getBaseUrl + this.updateColorUrl};
    private get getDeleteColorUrl() {return this.auth.getBaseUrl + this.deleteColorUrl};
    
    public addColor<T>(pashminaColorModel: PashminaColourModel) {
        return this.http.post<T>(this.getAddColorUrl, pashminaColorModel, {
            params: {
                access_token: JSON.parse(localStorage.getItem("token"))["value"]
            }
        }).catch(error => {
            throw new Observable(error);
        })
    }
    
    public updateColor<T>(pashminaColorModel: PashminaColourModel) {
        return this.http.post<T>(this.getUpdateColorUrl, pashminaColorModel, {
            params: {
                access_token: JSON.parse(localStorage.getItem("token"))["value"]
            }
        }).catch(error => {
            throw new Observable(error);
        })
    }
    
    public deleteColor<T>(colorId: number) {
        return this.http.delete(this.getDeleteColorUrl+"/"+colorId, {
            params: {
                access_token: JSON.parse(localStorage.getItem("token"))["value"]
            }
        }).catch(error => {
            throw new Observable(error);
        })
    }

}