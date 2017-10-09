# input

React component for Help (extra information)

## Usage

### Install
```
npm i @react-ag-components/input --save
```
### Use in your project
```
import Help from '@react-ag-components/help'
```

```
const helperText = 'Select Automatic if you like your certificate(s) to be issued after submission or Hold if you would like to preview your certificate before it is issued. Certificate Preview can be performed after submission on the REX details screen.';
<Help
  helperText={helperText}
  helperLabel="Tell me more..."
/>
```

### Properties

| Property    | Default       | Description                                |
| --------    |:-------------:|-------------------------------------------:|
| helperText  | ""            |                                            |
| helperLabel | "Help"        |    clicking on label, toggles helperText   |


## Contributing

Get the repository
```
git clone https://github.com/alphillips/help.git
```

Update dependencies
```
npm install
```

Run the project
```
npm start
```

### Deploy to npm
#### Build
`npm run build -- --copy-files`

#### Publish
`npm publish --access public`
