# React-Bootstrap-TouchSpine
#### No need for Jquery
<HR />

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
1-simple
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
![](https://i.ibb.co/XyxSGt6/touch-Spine-without-Sign.png)

---
2-Sign On the left
```ts
<TouchSpin
  sign={'#'}
  signAlignment={Alignment.Left}
  step={1}
  initValue={0}
  max={100}
  min={-20}
  decimals={1}
  counterHandler={myCounterHandler}
/>
```
![](https://i.ibb.co/d2Wh6CD/touch-Spine-left-Sign.png)

---
3-Sign On the right
```ts
<TouchSpin
  sign={'#'}
  signAlignment={Alignment.Right}
  step={1}
  initValue={0}
  max={5000}
  min={0}
  decimals={1}
  counterHandler={myCounterHandler}
/>
```
![](https://i.ibb.co/nBFW3yM/touch-Spine-right-Sign.png)

---
4-Vertical buttons

```ts
<TouchSpin
 step={1.02}
 decimals={1}
 initValue={0}
 counterHandler={myCounterHandler}
 verticalButtons={true}
 />
```
 ![](https://i.ibb.co/hDKFSkB/up.jpg)

 ---
| Parameter |DefaultValue   |Optional| Description |
| --- | --- | --- | --- |
| signAlignment|**Left** if sign defined |*|alignment for sign|
| sign|-|*|sing to show on left/right of the touchspin |
| initValue|0|*|initial value|
| step|1|*|Incremental/decremental step on up/down change|
| min|0|*|	Minimum value|
| max|200000|*|Maximum value|
| decimals|0|*|Number of decimal points|
| counterHandler|-|-|handler to get counter value |
| verticalButtons|false|*|Enables vertical up/down buttons|
| verticalUpClass|"bi bi-caret-up-fill"|*|bootstrap icon's class name for up button if vertical buttons mode enabled|
| verticalDownClass|"bi bi-caret-down-fill"|*|bootstrap icon's class name for down button if vertical buttons mode enabled|