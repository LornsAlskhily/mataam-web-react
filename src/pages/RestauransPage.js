import React from 'react';
import { useNavigate,Navigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../Addid/image/mattamLogoV2.svg';
import Header from "./Header";
import styles from '../style/customer.module.css';
import Footer from './Footer';
import AlReefImg from '../Addid/image/Resturants/al-reef.jpg'
import Shawerma3aSajImg from "../Addid/image/Resturants/shawerma-3a-saj.jpg"
import HotImg from "../Addid/image/Resturants/hot.png"
import BurgerImg from '../Addid/image/Resturants/farah-chicken-fillet.jpg'
import FarhWayImg from '../Addid/image/Resturants/frahWay.jpg'
import AldayaaImg from "../Addid/image/Resturants/aldayaa.jpg"
import BurgerizzerImg from "../Addid/image/Resturants/burgerizzr.png"
import CrispychickenImg from "../Addid/image/Resturants/crispyChicken.png"
import Uncleoskaka from "../Addid/image/Resturants/uncleosaka.jpg"

export default function Customer(){
      const navigate = useNavigate();
    return(
        <>
    <Header/>
        <div className={styles.customerContant}>
          
            <div className={styles.customerHeader}>
                <h1>the restaurans that we are served</h1>
            </div>
            <div className={styles.allResturants}>


                <a href=""><div className={styles.resturnat}>  <img src={AlReefImg} />
                    <div className={styles.nameContainer}>
                        
                        <h1>Al Reef</h1>
                        <p>shawarma and snack restaurant </p>
                    </div>
                </div></a>
                <a href=""><div className={styles.resturnat}><img src={Shawerma3aSajImg} />
                    <div className={styles.nameContainer}>
                        
                        <h1>Shawerma 3a Saj</h1>
                        <p>Shawarma on the saj restaurant and snack</p>
                    </div>
                </div></a>
                <a href=""><div className={styles.resturnat}><img src={FarhWayImg} />
                    <div className={styles.nameContainer}>
                        
                        <h1>Farah way</h1>
                        <p>shawerma and snack resturnat</p>
                    </div>
                </div></a>
                <a href=""><div className={styles.resturnat}><img src={HotImg} />
                    <div className={styles.nameContainer}>
                        
                        <h1>Hot Restaurant</h1>
                        <p>broasted and snack resturnat</p>
                    </div>
                </div></a>
                <a href=""><div className={styles.resturnat}><img src={BurgerImg} />
                    <div className={styles.nameContainer}>
                        
                        <h1>Lorns burger</h1>
                        <p>everything is here</p>
                    </div>
                </div></a>
                <a href=""><div className={styles.resturnat}><img src={AldayaaImg} />
                    <div className={styles.nameContainer}>
                        
                        <h1>aldaya'a</h1>
                        <p>the best shawerma in jordan</p>
                    </div>
                </div></a>
           
                <a href=""><div className={styles.resturnat}><img src={BurgerizzerImg} />
                    <div className={styles.nameContainer}>
                        
                        <h1>burgerizzr</h1>
                        <p>a big burger like bulldozer</p>
                    </div>
                </div></a>
           
                <a href=""><div className={styles.resturnat}><img src={CrispychickenImg} />
                    <div className={styles.nameContainer}>
                        
                        <h1>crispy Chicken</h1>
                        <p>everything here is a snack</p>
                    </div>
                </div></a>
           
                <a href=""><div className={styles.resturnat}><img src={Uncleoskaka} />
                    <div className={styles.nameContainer}>
                        
                        <h1>uncle osaka</h1>
                        <p>the drink restaurnat</p>
                    </div>
                </div></a>
           
           
        
           
           </div>


        </div>

         <Footer/>



    </>
)
    
}