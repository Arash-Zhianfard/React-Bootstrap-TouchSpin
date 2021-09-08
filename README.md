# React-Bootstrap-TouchSpine

![](https://i.ibb.co/XyxSGt6/touch-Spine-without-Sign.png)
![](https://i.ibb.co/d2Wh6CD/touch-Spine-left-Sign.png)
![](https://i.ibb.co/nBFW3yM/touch-Spine-right-Sign.png)


# Getting Started

## Installation

`npm install react-bootstrap-touchspine`



## Usage
### Import Bootstrap style to the project

```js
import 'bootstrap/dist/css/bootstrap.css';
```
**Bootstrap 4.6.0 has already installed.**
### The component can be used in following ways 

```ts
<TouchSpin />             
```
```ts
<TouchSpin
sign={"#"}
signAlignment={Alignment.Left}
step={1}
initValue={0}
size={BsSize.Small} />
```
```ts
<TouchSpin
sign={"#"}
signAlignment={Alignment.Right}
step={1}
initValue={0}
size={BsSize.Small} />
```



 
    