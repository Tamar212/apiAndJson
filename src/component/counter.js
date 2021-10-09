import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // דומה ל- ComponentDidMount ו- componentDidUpdate:
  useEffect(() => {
    // עדכון כותרת העמוד על ידי שימוש ב-API של הדפדפן
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>לחצת {count} פעמים</p>
      <button onClick={() => setCount(count + 1)}>
        לחץ עליי
      </button>
    </div>
  );
}
export default Example;