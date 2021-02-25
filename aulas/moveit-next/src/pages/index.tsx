import Head from 'next/head';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { CountDown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import styles from '../styles/components/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar/>
      
      <section>
        <div className={styles.section}>
          <Profile/>
          <CompletedChallenges/>
          <CountDown/>
        </div>

        <div>
    

        </div>

      </section>
    </div>
  );
}
