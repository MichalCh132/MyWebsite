import { Pipe, PipeTransform } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Pipe({
  name: 'slowCharsLoader'
})
export class SlowCharsLoaderPipe implements PipeTransform {

  private characters$: Subject<string> = new Subject();
  private charIndex: number = 0;
  private interval: number;

  transform(value: string, speed: number = 140): unknown {

    this.interval = window.setInterval( () => {
      if(value.length <= this.charIndex ){
        window.clearInterval(this.interval);
        return;
      }
      this.charIndex++;
      this.characters$.next(value.slice(0,this.charIndex));
    },speed);

    return this.characters$.asObservable();
  }

}
