import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AuthorizationComponent} from "../../components/authorization.component";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ImageServiceEndpoint {

    //variables
    private readonly imageUploadUrl = "/admin-api/image-upload";

    //getter methods
    private get getImageUploadUrl() {return this.auth.getBaseUrl + this.imageUploadUrl}

    constructor(
        private http: HttpClient,
        private auth: AuthorizationComponent
    ) {}

    public uploadImage<T>(file: FormData) {
        return this.http.post<T>(this.getImageUploadUrl, file, {params: {
            "access_token": JSON.parse(localStorage.getItem("token"))["value"]
        }})
            .catch(error => {
                throw new Observable(error);
            })
    }

}