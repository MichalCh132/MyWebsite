import { stringify } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Pipe({
  name: 'slowCharsLoader'
})
export class SlowCharsLoaderPipe implements PipeTransform {

  private characters$: Subject<string> = new Subject();
  private charIndex: number = 0;
  private interval: number;

  transform(value: string, prop: { speed: number, delay: number} = {speed: 140,delay: 0}): unknown {
    window.setTimeout( () => {
      this.showChars(value, prop.speed);
    }, prop.delay)

    return this.characters$.asObservable();
  }

  private showChars(chars: string, speed: number): void {
    this.interval = window.setInterval( () => {
      if(chars.length <= this.charIndex ){
        window.clearInterval(this.interval);
        return;
      }
      this.charIndex++;
      this.characters$.next(chars.slice(0,this.charIndex));
    },speed);
  }
}
