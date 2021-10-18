# React-Bootstrap-TouchSpine
#### No need for Jquery
<HR />

![](https://i.ibb.co/XyxSGt6/touch-Spine-without-Sign.png)
![](https://i.ibb.co/d2Wh6CD/touch-Spine-left-Sign.png)
![](https://i.ibb.co/nBFW3yM/touch-Spine-right-Sign.png)



# Getting Started

## Installation

`npm install react-bootstrap-touch-spine`

## Usage

### Import Bootstrap style to the project

```js
import 'bootstrap/dist/css/bootstrap.css';
```

**Bootstrap 4.6.0 has already installed.**

### The component can be used in following ways

```ts
const App = () => {
  const myCounterHandler = (counter: number) => {
    console.log(counter);
  };
  return (
    <React.Fragment>
      <TouchSpin counterHandler={myCounterHandler} />
    </React.Fragment>
  );
};
```

```ts
<TouchSpin
  sign={'#'}
  signAlignment={Alignment.Left}
  step={1}
  initValue={0}
  size={BsSize.Small}
  max={100}
  min={-20}
  decimals={1}
  counterHandler={myCounterHandler}
/>
```

```ts
<TouchSpin
  sign={'#'}
  signAlignment={Alignment.Right}
  step={1}
  initValue={0}
  size={BsSize.Small}
  max={5000}
  min={0}
  decimals={1}
  counterHandler={myCounterHandler}
/>
```
