import React from 'react';
import { useNavigate,Navigate } from 'react-router-dom';
import { useState } from 'react';
import Header from "./Header";
import styles from '../style/footer.module.css';

export default function Footer(){


    return (
        <>
        <div className={styles.footerContainer}>
            <div className={styles.leftSideFooterContainer}>    
                <p>made by lorns</p>
                <p>all copyright for lorns 2025&copy;</p>
            </div>
            <div className={styles.rightSideFooterContainer}>
                <p>Terms & Conditions </p>
                <p>Privacy Policy</p>
            </div>
        </div>
        </>
    )


}