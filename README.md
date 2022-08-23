# react-tag-selector

react-tag-selector is a react component for the tag selection functionality.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install react-tag-selector.

```bash
npm link https://github.com/shrilakshmishastry/react-tag-selector
```

## Usage

```javascript
import TagSelector from 'react-tag-selector';

const filterTag = [
  'python',
  'js',
  'java',
  'c==',
  'c++',
  'go',
  'groovey'
];

function App() {

  return (

    <TagSelector
      selectedTag={(value) => {
        console.log(value)
      }}
      removeTag={(value) => {
        console.log(value);
      }}
      tagsFilter={filterTag} />


  );
}

export default App;

```

## props available 
| Syntax      | Description |
| ----------- | ----------- |
| selectedTag      | callBack function which receives the value selected from the array of tags      |
| removeTag   | callback function which receives the value removed from the array of tags        |
|tagsFilter| an array of tags available|
|lableForInputTag| string to handle aria|
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)