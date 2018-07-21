import {Component, OnInit} from '@angular/core';
import {PashminaModel} from '../../model/pashmina.model';
import {HomeService} from '../../services/home-service/home-service';
import {Category} from "../../enum/Enum";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pashmina: PashminaModel[] = [];
  public category: any[] = [];

  constructor(
    private homeService: HomeService,
  ) {
  }

  ngOnInit() {
    this.getAllPashmina(12, 0);

    for (var i in Category) {
      if (!parseInt(i, 10)) {
        this.category.push(i);
      }
    }
  }

  private getAllPashmina(pageSize: number, pageNumber: number) {
    this.homeService.getPashmina(pageSize, pageNumber).subscribe(
      (result: any) => {
        this.pashmina = result;
      }, error => {
        console.log(error);
      }
    )
  }

  public getPashminaByCategory(category: string) {
    console.log("Clicked");
    this.homeService.getPashminaByCategory(category, 12, 0).subscribe(
      (result: any) => {
        this.pashmina = result;
      }, error => {
        console.log(error);
      }
    )
  }

}
