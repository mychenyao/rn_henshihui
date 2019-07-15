import React from 'react';
import Router from './src/router'
import { createAppContainer } from 'react-navigation';
const Route = createAppContainer(Router)
export default function App() {
  return (
      <Route/>
  );
}
