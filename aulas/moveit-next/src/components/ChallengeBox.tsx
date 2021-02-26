import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){
    const hasActiveChallenge = true;
    const{activeChallenge} = useContext(challengesContext)
     
      
    return (
        <div className={styles.challengeBoxContainer}>
            {
                hasActiveChallenge? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400 xp</header>
                    
                    <main>
                        <img src="icons/body.svg"/>
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos.</p>
                    </main>

                    <footer>
                        <button type="button" className={styles.challengeFailedButton }>Falhei</button>
                        <button type="button" className={styles.challengeSuccessedButton}>Completei</button>
                    </footer>
                </div>
                ):( 
                    <div className={styles.challengeNotActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level up"/>
                            Avance de level completando desafios.
                        </p>
                    </div>
                )
            }  
        </div>
    )
}