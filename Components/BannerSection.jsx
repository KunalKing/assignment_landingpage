"use client";
import EarthImage from '../public/EarthImage.svg';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import PlaneImage from '../public/Plane.svg';
import BanSecStyle from  '../Components/Banner.module.css';
import { MotionPathPlugin } from 'gsap/all';
import LandMark from '../public/Landmark.svg';
import ButtonImage from '../public/button_image.svg';
import DenoButton from '../public/Demobutton.svg';
import FirstTravel from '../public/First_Travel_Image.svg';
import Second_Travel from '../public/Second_Travel.svg';
import Third_Travel from '../public/Third_Travel.svg';


const BannerSection = () => {
    useEffect(() => {
  
        const rotateAndFade = () => {
          // Rotate to 40 degrees
          gsap.to('.EarthImage', {
            rotation: 25,
            duration: 10,
            onComplete: () => {
              // Fade out the Earth image
              gsap.to('.EarthImage', {
                opacity: 0,
                duration: 1,
                onComplete: () => {
                  // Reset rotation and opacity
                  gsap.set('.EarthImage', { rotation: 0, opacity: 1 });
                  // Restart the animation
                  rotateAndFade();
                }
              });
            }
          });
        };
       
        const rotateAndMark = () => {
            gsap.to('.mark', {
                rotation: 25,
                duration: 10,
                bottom: 30,
                onComplete: () => {
                 
                    gsap.to('.mark', {
                        opacity: 0,
                        duration: 1,
                        onComplete: () => {
                            
                            gsap.set('.mark', { rotation: 0, opacity: 1 });
                          
                            rotateAndMark(); 
                        }
                    });
                }
            });
        };
       
        gsap.registerPlugin(MotionPathPlugin);
        const path = [{x:-250, y:-50}, {x:-200, y:-100}, {x:-150, y:-100}]
        const duration = 10; // Duration of the animation
    
        // Define the animation
        const AirPlaneFade = () => {
            gsap.to('.planeani', {
              motionPath: {
                path: path,
                align: '.planeani',
                autoRotate: true
              },
              rotation: 15, // Rotate the plane during the animation
              duration: duration,
              onComplete: () => {
                gsap.to('.planeani', {
                  opacity: 0,
                  duration: 1,
                  onComplete: () => {
                    gsap.set('.planeani', { path: path, rotation: 0, opacity: 1 });
                    AirPlaneFade(); // Call the function again to repeat the animation
                  }
                });
              }
            });
          };

    const path2 = [{x:50, y:-50}, {x:40, y:-30}, {x:20, y:-20}];
    
        // Define the animation
        const AirPlaneFade_two = () => {
            gsap.to('.planeani_two', {
              motionPath: {
                path: path2,
                align: '.planeani_two',
                autoRotate: true
              },
              rotation: 20, // Rotate the plane during the animation
              duration: duration,
              onComplete: () => {
                gsap.to('.planeani_two', {
                  opacity: 0,
                  duration: 1,
                  onComplete: () => {
                    gsap.set('.planeani_two', { path: path2, rotation: 0, opacity: 1 });
                    AirPlaneFade_two(); // Call the function again to repeat the animation
                  }
                });
              }
            });
          };
        //Start the animation
        rotateAndMark()
        AirPlaneFade_two();
        rotateAndFade();
        AirPlaneFade();
       
      }, []);
    
    return (
        <div>
        <div className={BanSecStyle.bannerMainSection}>
          <div className={BanSecStyle.HeadingTextSection}>
            <button className={BanSecStyle.button_style}>
              Explore the World!
              <Image priority src={ButtonImage} className={` ${BanSecStyle.ButtonImage}`} height={20} width={20} alt="PlaneImage" />
            </button>
            <h1 className={BanSecStyle.Heading}>Travel <span className={BanSecStyle.HeadingColor}>top destination</span> of the world</h1>
            <p className={BanSecStyle.Heading_text}>We always make our customer happy by providing as many choices as possible</p>
            <div className={BanSecStyle.buttonsGroup}>
              <button className={BanSecStyle.GetStaredButton}>Get Started</button>
              <button className={BanSecStyle.WatchDemoButton}>
                <Image priority src={DenoButton} className={` ${BanSecStyle.ButtonImage}`} height={20} width={20} alt="PlaneImage" />
                Watch Demo
              </button>
            </div>
          </div>
          <div className={BanSecStyle.bannerContainer}>
            <Image priority src={PlaneImage} className={`planeani ${BanSecStyle.PlaneImage}`} height={31} width={35} alt="PlaneImage" />
            <Image priority src={PlaneImage} className={`planeani_two ${BanSecStyle.planeani_two}`} height={31} width={35} alt="PlaneImage" />
            <Image priority src={PlaneImage} className={`planeani ${BanSecStyle.PlaneImage_three}`} height={31} width={35} alt="PlaneImage" /> 
            <Image priority src={EarthImage} className={`EarthImage ${BanSecStyle.responsiveEarth}`} height={267} width={660} alt="EarthImage" />
            <Image priority src={LandMark} className={`mark ${BanSecStyle.LandMark}`} height={24} width={16} alt="EarthImage" />
          </div>
        </div>
        <div className={BanSecStyle.Cards}>
          <div className={BanSecStyle.First_twoImages}>
            <Image priority src={FirstTravel} className={BanSecStyle.TravelImages} height={300} width={272} alt="TravelOne" />
            <Image priority src={Second_Travel} className={BanSecStyle.TravelImages} height={300} width={272} alt="TravelTwo" />
          </div>
          <Image priority src={Third_Travel} className={`${BanSecStyle.TravelImagesThree} ${BanSecStyle.TravelImages}`} height={300} width={272} alt="TravelThree" />
        </div>
      </div>
      
    );
};

export default BannerSection;
