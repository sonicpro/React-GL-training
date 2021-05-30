import React, { useState } from 'react';

const App: React.FC = () => {
  const [message, setState] = useState<string>("Red shift");
  setTimeout(() => setState(message.replace(/Red/, "Green")), 5000);
  return (
    <>
      <h2>{message}</h2>
    </>
  );
}

export default App;
