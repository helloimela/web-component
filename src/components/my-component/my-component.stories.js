import readme from './readme.md';

export default {
  title: 'My Example',
  argTypes: {
    size: {
      control: {
        type: 'select',
        options:['default', 'small', 'medium']
      },
      defaultValue: 'default',
      description: 'Size of the button'
    },
    type: {
      control: {
        type: 'select',
        options:['default', 'circular','cubic', 'linear']
      },
      defaultValue: 'default',
      description: 'Size of the button'
    }
  }
 
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
const Template = ({size,type}) => {
  let sizeValue='';
  switch (size) {
    case 'small':
      sizeValue = 'sm';
      break;
    case 'medium':
      sizeValue = 'md';
      break;
    default: sizeValue= '';
      break;
  }

    return `
    ${style}
    <div class="demo">
    <sdds-spinner size="${sizeValue}" type="${type}">
      
    </sdds-spinner>
    </div>
 
    `
  };
  
  export const Basic = Template.bind({});
  