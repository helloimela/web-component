import { Component, h,Prop } from '@stencil/core';

@Component({
    tag: 'sdds-spinner',
    styleUrl: 'my-component.scss',
    shadow: true,
  })

  export class Spinner{
    @Prop() size = "";
    @Prop() type = "";
    
private linearSpinner(){
  return (
    <div class={`spinner-linear spinner-linear-${this.size == 'sm' || this.size == 'md' ? this.size : ''} `}>
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
        </div>  
  );

}
private circularSpinner(){
  return(
    <div class={`spinner-circular spinner-circular-${this.size == 'sm'  || this.size == 'md'? this.size : ''} `}></div>          
  )
}
private cubicSpinner(){
  return (
   
    <div class={`spinner-cube spinner-cube-${this.size == 'sm' || this.size == 'md' ? this.size : ''} `}>
       <div class="cube1"></div>
       <div class="cube2"></div> 
       <div class="cube3"></div>
       <div class="cube4"></div>
       <div class="cube5"></div>
       <div class="cube6"></div>
       <div class="cube7"></div>
       <div class="cube8"></div>
       <div class="cube9"></div>
   </div>
   
 );

}
    render() {
      switch(this.type){

        case "linear":
              return this.linearSpinner();
             
        case "circular":
          return this.circularSpinner();
              
        case "cubic":
             return this.cubicSpinner();  
              
        default: return this.circularSpinner();
          
      }
    }
  }