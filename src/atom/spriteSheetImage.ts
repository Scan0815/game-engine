import { BehaviorSubject } from 'rxjs';

class SpriteSheetImageAtomController {
  private atom$: BehaviorSubject<CanvasImageSource> = new BehaviorSubject<CanvasImageSource>(null);
  public atom = this.atom$.asObservable();

  set(value:CanvasImageSource){
    this.atom$.next(value);
  }
  get(){
    return this.atom;
  }

}

export const SpriteSheetImageAtom = new SpriteSheetImageAtomController();
