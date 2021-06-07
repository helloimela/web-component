import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'spinner-circular',
  styleUrl: 'spinner-circular.css',
  shadow: true,
})
export class SpinnerCircular {
  @Prop() size = "";
  render() {
   
    return (
      <div class={`spinner-circular-${this.size == 'sm' || this.size == 'md' ? this.size : ''} `}></div> 
    );
  }
  // linear

  //circular
  
  // cubic

}
