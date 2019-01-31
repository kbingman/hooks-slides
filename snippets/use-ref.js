import { useRef } from 'react';

function Example() {
  // Declare a variable, which refers to the DOM 
  // element you want to reference
  const container = useRef();

  return (
    <div ref={container}>
      <p>This is the container element</p>
    </div>
  );
}