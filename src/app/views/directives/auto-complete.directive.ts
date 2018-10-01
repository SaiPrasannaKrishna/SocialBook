import { Directive, HostListener, Input, ElementRef, NgZone, Output,EventEmitter } from '@angular/core';

@Directive({
  selector: '[appAutoComplete]'
})
export class AutoCompleteDirective {

  constructor(private el: ElementRef,private zone:NgZone) { }
@Output() onPress: EventEmitter<any> = new EventEmitter();
 
@HostListener('keypress') onkeypress() {
  console.log(this.el.nativeElement.value);
  this.onPress.emit(this.el.nativeElement.value);
}
 
@HostListener('blur') onblur() {
  this.onPress.emit('remove');
}
 
private highlight(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
}
 
}