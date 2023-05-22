import { Subject } from 'rxjs';

class CompleteSceneAtomController {
  private atom$: Subject<boolean> = new Subject<boolean>();
  public atom = this.atom$.asObservable();

  set(value:boolean){
    this.atom$.next(value);
  }
  get(){
    return this.atom;
  }

}

export const CompleteSceneAtom = new CompleteSceneAtomController();
