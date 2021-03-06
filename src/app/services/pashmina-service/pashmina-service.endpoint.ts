import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthorizationComponent } from "../../components/authorization.component";
import { PashminaModel } from "../../model/pashmina.model";
import { Observable } from "rxjs/Observable";

@Injectable()

export class PashminaServiceEndpoint {

    private readonly addPashminaUrl: string = "/admin-api/add-pashmina";
    private readonly allPashminaUrl: string = "/admin-api/get-all-pashmina";
    private readonly pashminaCountUrl: string = "/admin-api/get-pashmina-count";
    private readonly deletePashminaUrl: string = "/admin-api/delete-pashmina";
    private readonly pashminaByIdUrl: string = "/admin-api/get-pashmina-by-id";
    private readonly searchPashminaUrl: string = "/admin-api/search-pashmina";

    constructor(private http: HttpClient, private auth: AuthorizationComponent) {

    }

    private get getAddPashminaUrl() { return this.auth.getBaseUrl + this.addPashminaUrl }
    private get getAllPashminaUrl() { return this.auth.getBaseUrl + this.allPashminaUrl }
    private get getPashminaCountUrl() { return this.auth.getBaseUrl + this.pashminaCountUrl }
    private get getDeletePashminaUrl() { return this.auth.getBaseUrl + this.deletePashminaUrl }
    private get getPashminaByIdUrl() { return this.auth.getBaseUrl + this.pashminaByIdUrl }
    private get getSearchPashminaUrl() { return this.auth.getBaseUrl + this.searchPashminaUrl }

    public addPashmina<T>(pashmina: PashminaModel) {
        return this.http.post<T>(this.getAddPashminaUrl, pashmina, {
            params: {
                access_token: JSON.parse(localStorage.getItem("token"))["value"]
            }
        })
            .catch(error => {
                return this.auth.handleError(error);
            })
    }

    public getAllPashmin<T>(pageSize: number, pageNumber: number) {

        let headers = new HttpHeaders();
        headers = headers.append("Authorization", "Bearer "+JSON.parse(localStorage.getItem("token"))["value"])

        return this.http.get<T>(this.getAllPashminaUrl + "/" + pageSize + "/" + pageNumber, {
            params: {
                access_token: JSON.parse(localStorage.getItem("token"))["value"]
            }
        }).catch(error => {
            return this.auth.handleError(error);
        })
    }

    public getAllPashminaCount<T>() {
        return this.http.get<T>(this.getPashminaCountUrl, {
            params: {
                access_token: JSON.parse(localStorage.getItem("token"))["value"]
            }
        }).catch(error => {
            return this.auth.handleError(error);
        })
    }

    public deletePashmina<T>(pashminaId: number) {
        return this.http.delete<T>(this.getDeletePashminaUrl, {
            params: {
                access_token: JSON.parse(localStorage.getItem("token"))["value"],
                pashminaId: pashminaId.toString()
            }
        }).catch(error => {
            return this.auth.handleError(error);;
        })
    }

    public getPashminaById<T>(pashminaId: number) {
        return this.http.get<T>(this.getPashminaByIdUrl + "/" + pashminaId, {
            params: {
                access_token: JSON.parse(localStorage.getItem("token"))["value"]
            }
        }).catch(error => {
            return this.auth.handleError(error);;
        })
    }

    public searchPashmina<T>(searchText: string) {
        return this.http.get<T>(this.getSearchPashminaUrl, {
            params: {
                searchText: searchText,
                access_token: JSON.parse(localStorage.getItem("token"))["value"]
            }
        }).catch(error => {
            return this.auth.handleError(error);;
        })
    }

}

