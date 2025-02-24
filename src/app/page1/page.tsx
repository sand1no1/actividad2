'use client';
import { useState } from 'react';
import Rectangle from '@/components/Rectangle';

export default function Page1() {
  const [color, setColor] = useState("gray");
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6">
      <Rectangle color={color} width="large" height="large" showText={false} />
      <div className="grid grid-cols-2 w-64">
        <button onClick={() => setColor("green")} className="cursor-pointer">
          <Rectangle color="green" width="medium" height="medium" />
        </button>

        <button onClick={() => setColor("blue")} className="cursor-pointer">
          <Rectangle color="blue" width="medium" height="medium"/>
        </button>

        <button onClick={() => setColor("red")} className="cursor-pointer">
          <Rectangle color="red" width="medium" height="medium"/>
        </button>

        <button onClick={() => setColor("yellow")} className="cursor-pointer">
          <Rectangle color="yellow" width="medium" height="medium"/>
        </button>
      </div>
    </main>
  );
}
