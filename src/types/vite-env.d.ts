/// <reference types="vite/client" />

declare global {
  interface Window {
    ym: (id: number, type: string, goal: string) => void;
  }
}

export {};
