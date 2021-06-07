export default {
    title: 'Slider/Test',
    
    };
    const style =`<style>
    
    .demo {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color:  #F6F6F7; 
      height: 200px;
      width: 200px;
    }
    </style>`;
    const Template = () => {
        return `
        ${style}
        <div class="demo">
        <slider-test >
          
        </slider-test>
        </div>
     
        `
      };
      
      export const Basic = Template.bind({});
      
    