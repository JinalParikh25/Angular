import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appSafeLink]',
  standalone: true,
  host:{
    '(click)':'onConfirmLeavePage($event)'
  }
})
export class SafeLinkDirective {
 
    queryParam = input('myform');
    private hostElement = inject<ElementRef>(ElementRef);

   onConfirmLeavePage(event : MouseEvent){
      const wantsToLeave =  window.confirm('Do you want to leave the app?')

      if(wantsToLeave){
        const linkAddress = this.hostElement.nativeElement.href;
        (event.target as HTMLAnchorElement).href = linkAddress + '?form=' + this.queryParam();
        return;
      }
      
      event.preventDefault();
   }

}
