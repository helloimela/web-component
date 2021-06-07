import { Component,h,Prop } from '@stencil/core';

@Component({
  tag: 'spinner-linear',
  styleUrl: 'spinner-linear.scss',
  shadow: true,
})
export class SpinnerLinear {
  @Prop() size = "";
  render() {
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

}
