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
interface Props {
  title: string;
  content: string;
}
const MemoPost = React.memo(({ title, content }: Props) => {
  return (
      // ...
          <h1 className="heading-lg">{title}</h1>
          <p>{content}</p>
      
  );
});

// custom comparator function
const customComparator = (prevProps: Props, nextProps: Props) => {

  // shallow comparison returns true if equal object references even if the props values are different
  // return prevProps===nextProps;
    // deep comparison
  return (
    prevProps.title === nextProps.title &&
    prevProps.content === nextProps.content
  );

  // we can also omitting specific props from the comparison, for example this component will not re-render if the content prop changes
  // return prevProps.title === nextProps.title;
};

// memoized component with custom comparator
const MemoPostViewer = React.memo(MemoPost, customComparator);
export default MemoPostViewer;

```
