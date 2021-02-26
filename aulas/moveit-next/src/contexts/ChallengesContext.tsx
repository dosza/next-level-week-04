import {Children, createContext, ReactNode, useState} from 'react';
import challenges from '../../challenges.json';



interface ChallengesProviderProps {
    children: ReactNode;
}
interface Challenge {
    type: 'body' | 'eye';
    description : string;
    amount: number;

}
interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    levelUp: ()=> void;
    startNewChallenge: ()=> void;
    activeChallenge: object;
}
export const challengesContext = createContext({} as ChallengesContextData)


export function ChallengesProvider({children}:ChallengesProviderProps){
    const [level,setLevel] = useState(1)
    const [currentExperience, setCurrentExperience]= useState(0);
    const [challengesCompleted,setChallengesCompleted]= useState(0);
    const [activeChallenge,setActiveChallenge]=  useState(null)

    function levelUp(){
      setLevel(level+1)
    }
    
    function startNewChallenge(){
       const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
       const challenge = challenges[randomChallengeIndex];
       setActiveChallenge(challenge);
     


    }

  return (
      <challengesContext.Provider value={{
          level,
          currentExperience,
          challengesCompleted,
          levelUp,
          startNewChallenge 
        }}>
          {children}
      </challengesContext.Provider>
  )
}