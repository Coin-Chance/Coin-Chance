
import React, { createContext, useState } from "react";

interface CountdownProviderProps {
  children: React.ReactNode;
}

interface CountdownContextProps {
  cosmicTimer: Date;
  setCosmicTimer: React.Dispatch<React.SetStateAction<Date>>;
  classicTimer: Date;
  setClassicTimer: React.Dispatch<React.SetStateAction<Date>>;
  atomicTimer: Date;
  setAtomicTimer: React.Dispatch<React.SetStateAction<Date>>;
}

export const CountdownContext = createContext<CountdownContextProps>({
  cosmicTimer: new Date(),
  setCosmicTimer: () => {},
  classicTimer: new Date(),
  setClassicTimer: () => {},
  atomicTimer: new Date(),
  setAtomicTimer: () => {},
});

export const CountdownProvider = ({ children }: CountdownProviderProps) => {
  const [cosmicTimer, setCosmicTimer] = useState(new Date());
  const [classicTimer, setClassicTimer] = useState(new Date());
  const [atomicTimer, setAtomicTimer] = useState(new Date());

  cosmicTimer.setSeconds(cosmicTimer.getSeconds() + 200);
  classicTimer.setSeconds(cosmicTimer.getSeconds() + 400);
  atomicTimer.setSeconds(cosmicTimer.getSeconds() + 900);

  return (
    <CountdownContext.Provider
      value={{
        cosmicTimer,
        setCosmicTimer,
        classicTimer,
        setClassicTimer,
        atomicTimer,
        setAtomicTimer,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};
