# `React.memo`

The `React.memo` syntax involves wrapping a functional component with the `memo` higher-order component (HOC) imported from React. This HOC memoizes the component, preventing unnecessary re-renders if its props have not changed.

**Here are the common ways to use `React.memo`** :

1. Direct Export:

```js

import { memo } from 'react';
const MyComponent = memo((props) => {
  // Component logic here
  return <div>{props.data}</div>;
});

export default MyComponent;
```

2.**Separate Memoized Variable** :

```js
import { memo } from 'react';

const MyFunctionalComponent = (props) => {
  // Component logic here
  return <div>{props.data}</div>;
};

const MemoizedMyComponent = memo(MyFunctionalComponent);
export default MemoizedMyComponent;
```

3.**With a Custom Comparison Function (Optional)**:

React.memo by default performs a shallow comparison of props. If a more complex comparison is needed, a custom `arePropsEqual` function can be provided as the second argument:

```js
import { memo } from 'react';

const MyComponent = memo((props) => {
  // Component logic here
  return <div>{props.data}</div>;
}, (prevProps, nextProps) => {
  // Custom comparison logic
  return prevProps.someComplexObject.id === nextProps.someComplexObject.id;
});

export default MyComponent;
```
