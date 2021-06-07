import { Component, h,Prop } from '@stencil/core';

@Component({
  tag: 'spinner-cubic',
  styleUrl: 'spinner-cubic.css',
  shadow: true,
})
export class SpinnerCubic {
  @Prop() size = "";

  render() {
    return (
   
       <div class={`spinner-cube-grid-${this.size == 'sm' || this.size == 'md' ? this.size : ''} `}>
          <div class="spinner-cube spinner-cube1"></div>
          <div class="spinner-cube spinner-cube2"></div> 
          <div class="spinner-cube spinner-cube3"></div>
          <div class="spinner-cube spinner-cube4"></div>
          <div class="spinner-cube spinner-cube5"></div>
          <div class="spinner-cube spinner-cube6"></div>
          <div class="spinner-cube spinner-cube7"></div>
          <div class="spinner-cube spinner-cube8"></div>
          <div class="spinner-cube spinner-cube9"></div>
      </div>
      
    );
  }

}
