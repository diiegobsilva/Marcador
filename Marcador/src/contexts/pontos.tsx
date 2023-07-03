import { createContext, useState } from "react";

export const Contexto = createContext({} as {
  pontuacao: number;
  setPontuacao: React.Dispatch<React.SetStateAction<number>>;
  truco: string;
  setTruco: React.Dispatch<React.SetStateAction<string>>;
  resetPontos: boolean;
  setResetPontos: React.Dispatch<React.SetStateAction<boolean>>;
});

export function Provider({ children }: any) {
  const [pontuacao, setPontuacao] = useState(0);
  const [truco, setTruco] = useState("Truco");
  const [resetPontos, setResetPontos] = useState(false);

  return (
    <Contexto.Provider
      value={{ pontuacao, setPontuacao, truco, setTruco, resetPontos, setResetPontos }}
    >
      {children}
    </Contexto.Provider>
  );
}