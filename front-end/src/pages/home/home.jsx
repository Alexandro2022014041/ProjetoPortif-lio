import React from 'react'
import styles from './Home.module.css'
import { DropdownCourse, DropdownPeriod, DropdownCalendar } from '../../components/dropdown/dropdown'

export const Home = () => {
    return(
        <body> 
            <div className={styles.container}>
                <div className={styles.main}>
                    <header>
                        <div className={styles.boxLogoCesul}>                        
                        </div>
                    </header>
                    <div className={styles.mainBox}>
                        <div className={styles.boxDropdownCourse}>
                            <DropdownCourse/>
                        </div>
                        <div className={styles.boxDropdownPeriod}>
                            <DropdownPeriod/>
                        </div>
                        <div className={styles.boxDropdownDate}>
                            <DropdownCalendar/>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}