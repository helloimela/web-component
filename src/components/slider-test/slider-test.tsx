import { Component, h } from '@stencil/core';

@Component({
  tag: 'slider-test',
  styleUrl: 'slider-test.css',
  shadow: true,
})
export class SliderTest {

  render() {
    return (
      <div>
            <input class="range" type="range" value="0" min="0" max="1000" ></input>
      </div>
    );
  }

}
