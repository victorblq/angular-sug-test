import {Component, OnDestroy, OnInit} from '@angular/core';
import {CatService} from '../../services/cat.service';
import {Cat} from '../../entity/cat/cat.entity';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit, OnDestroy {

  public catsArray: Array<Cat>;

  constructor(private catService: CatService) {
    this.catService.deletedCatEvent.subscribe((deletedIdArray: Array<string>) => {
      this.catsArray = this.catsArray.filter((cat: Cat) => {
        return !deletedIdArray.includes(cat._id);
      });
    });
  }

  ngOnInit(): void {
    this.catService.listCats()
      .then((catsArray: Array<Cat>) => {
        this.catsArray = catsArray;
      })
      .catch(e => console.error(e));
  }

  ngOnDestroy(): void{
    this.catService.deletedCatEvent.unsubscribe();
  }
}
