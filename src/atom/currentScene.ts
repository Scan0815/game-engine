import { Subject } from 'rxjs';

class CurrentSceneAtomController {
  private atom$: Subject<number> = new Subject<number>();
  public atom = this.atom$.asObservable();

  set(value:number){
    this.atom$.next(value);
  }
  get(){
    return this.atom;
  }

}

export const CurrentSceneAtom = new CurrentSceneAtomController();
