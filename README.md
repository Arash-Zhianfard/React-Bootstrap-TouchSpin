# React-Bootstrap-TouchSpin
#### No need for Jquery
<HR />

# Getting Started

## Installation

`npm i react-bootstrap-touchspin`

## Usage

### Import Bootstrap style to the project

```js
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "react-bootstrap-touchspin/lib/dist/styles.css";
```

**Bootstrap 4.6.0 has already installed.**

### The component can be used in following ways
1-Simple
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
| signAlignment|**Left** if sign defined |*|Alignment for sign|
| sign|-|*|Sing to show on left/right of the touchspin |
| initValue|0|*|Initial value|
| step|1|*|Incremental/Decremental step on up/down change|
| min|0|*|	Minimum value|
| max|200000|*|Maximum value|
| decimals|0|*|Number of decimal points|
| counterHandler|-|-|Handler to get counter value |
| verticalButtons|false|*|Enables vertical up/down buttons|
| verticalUpClass|"bi bi-caret-up-fill"|*|Bootstrap icon's class name for up button if vertical buttons mode enabled|
| verticalDownClass|"bi bi-caret-down-fill"|*|Bootstrap icon's class name for down button if vertical buttons mode enabled|
|iconSize|11px|*|Bootstrap icon's size|
parentStyle|-|*|Style for the parent container|
inputStyle|-|*|Input's style|