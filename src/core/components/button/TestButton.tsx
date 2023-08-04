import React from "react";
import Button from "./Button";

const TestButton: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Button Examples</h1>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Primary Button</h2>
        <Button variant="primary">Click Me</Button>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Neutral Button</h2>
        <Button variant="neutral">Neutral</Button>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Link Button</h2>
        <Button variant="link" as="a" >
          Visit Example
        </Button>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Active Primary Button</h2>
        <Button variant="primary" active>
          Active Primary
        </Button>
      </div>

      {/* Add more examples with different variants */}
    </div>
  );
};

export default TestButton;
