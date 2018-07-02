import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthorizationComponent} from "../../components/authorization.component";
import {DescriptionModel} from "../../model/description.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DescriptionServiceEndpoint {
    
    constructor(
        private http: HttpClient,
        private auth: AuthorizationComponent
    ) {}

    private readonly addDescriptionUrl: string = "/admin-api/add-description";
    private readonly updateDescriptioonUrl: string = "/admin-api/update-description";
    private readonly deleteDescriptioonUrl: string = "/admin-api/delete-description";
    private readonly descriptionByIdUrl: string = "/admin-api/get-description-by-id"

    private get getAddDescriptioonUrl() {return this.auth.getBaseUrl + this.addDescriptionUrl};
    private get getUpdateDescriptioonUrl() {return this.auth.getBaseUrl + this.updateDescriptioonUrl};
    private get getDeleteDescriptioonUrl() {return this.auth.getBaseUrl + this.deleteDescriptioonUrl};
    private get getDescriptionByIdUrl() {return this.auth.getBaseUrl + this.descriptionByIdUrl}
    
    public addDescription<T>(descriptionModel: DescriptionModel) {
        return this.http.post<T>(this.getAddDescriptioonUrl, descriptionModel, {
            params: {
                access_token: JSON.parse(localStorage.getItem("token"))["value"]
            }
        }).catch(error => {
            throw new Observable(error);
        })
    }
    
    public updateDescription<T>(descriptionModel: DescriptionModel) {
        return this.http.put<T>(this.getUpdateDescriptioonUrl, descriptionModel, {
            params: {
                access_token: JSON.parse(localStorage.getItem("token"))["value"]
            }
        }).catch(error => {
            throw new Observable(error);
        })
    }
    
    public deleteDescription<T>(descriptionId: number) {
        return this.http.delete(this.getDeleteDescriptioonUrl+"/"+descriptionId, {
            params: {
                access_token: JSON.parse(localStorage.getItem("token"))["value"]
            }
        }).catch(error => {
            throw new Observable(error);
        })
    }
    
    public getDescriptionById<T>(id: number) {
        return this.http.get<T>(this.getDescriptionByIdUrl+"/"+id, {
            params: {
                access_token: JSON.parse(localStorage.getItem("token"))["value"]
            }
        }).catch(error => {
            throw new Observable(error);
        })
    }
}