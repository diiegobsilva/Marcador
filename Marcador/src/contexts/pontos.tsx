import { createContext, useEffect, useState } from "react";


export const Contexto = createContext({} as { 
  pontuacao: number; 
  setPontuacao: React.Dispatch<React.SetStateAction<number>>, 
  truco: string, 
  setTruco:  React.Dispatch<React.SetStateAction<string>>,
  zerar: boolean,
  setZerar: React.Dispatch<React.SetStateAction<boolean>>
});

export function Provider({ children }: any) {
  const [pontuacao, setPontuacao] = useState(0);
  const [ truco, setTruco ] = useState("Truco")
  const [zerar, setZerar] = useState(false)

  useEffect(() => {
    (async function () {
      setPontuacao(1);
      setTruco("Truco")
    })();
  }, []);

  console.log(pontuacao);

  return (
    <Contexto.Provider value={{ pontuacao, setPontuacao, truco, setTruco , zerar, setZerar}}>
      {children}
    </Contexto.Provider>
  );
}