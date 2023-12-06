import React from 'react'
import styles from './dropdown.module.css'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const DropdownCourse = () => {
    return(
            <div className={styles.dropdown}>
                <div className={styles.select}>
                    <span className={styles.selected}>Curso</span>
                    <div className={styles.caret}></div>
                </div>
                <ul className={styles.menu}>
                    <li>Administração</li>      
                    <li>Análise e Desenolvimento de Sistemas</li>
                    <li>Direito</li>
                    <li>Marketing</li>
                </ul>
            </div>                   
    )
}

export const DropdownPeriod = () =>{
    return(
        <div className={styles.dropdown}>
        <div className={styles.select}>
            <span className={styles.selected}>Período</span>
            <div className={styles.caret}></div>
        </div>
        <ul className={styles.menu}>
            <li>1° Período</li>      
            <li>2° Período</li> 
            <li>3° Período</li> 
            <li>4° Período</li> 
            <li>5° Período</li> 
            <li>6° Período</li> 
            <li>7° Período</li> 
            <li>8° Período</li> 
            <li>9° Período</li> 
            <li>10° Período</li> 
        </ul>
    </div>   
    )
}

export const DropdownCalendar = () => {
    const [value, onChange] = useState(new Date());
    return(
            <div className={styles.dropdown}>
                <div className={styles.select}>
                    <span className={styles.selected}>Calendário</span>
                    <div className={styles.caret}></div>
                </div>
                <ul className={styles.menuCalendar}>
                    <Calendar onChange={onChange} value={value} />
                </ul>
            </div>                   
    )
}