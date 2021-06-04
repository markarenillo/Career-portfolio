import React,{useState, useEffect} from 'react'
import './Homepage.css';
import {motion,AnimatePresence, useAnimation} from 'framer-motion'
import {Link} from 'react-router-dom'
import footage from './../../footage/footage.mp4' 
import cloud1 from './../../images/cloud1.png'
import cloud2 from './../../images/cloud2.png'
import cloud3 from './../../images/cloud3.png'
import cloud4 from './../../images/cloud4.png'
import cloud5 from './../../images/cloud5.png'
import mountain from './../../images/mountain.png'

const transition = {duration :1, ease: [0.43,0.30,0.23,0.96], when: "beforeChildren"}
const animate = {position: 'fixed',top: '50%',left: '50%', translateX:'-50%', translateY:'-50%',scale:[1,30]}


const Homepage = ({mainText,tagLine, section1, section2, section3, section4, bodyText }) => {
    const [tinyButton, setTinyButton] = useState(false)

    const callTiny = () => {
        setTinyButton(!tinyButton)
    }

    const buttonVariant= {
        hover: {
           originX:"25px 25px"
        }
    }
    const circleVariantsSvg = {
        hover: {
            width: "20vh",
            height: "20vh",
            viewBox: "-5 0 1000 1200"
        },
        tiny:{
            width: "2vh",
            height: "2vh",
        },
        init: {
            width: "5vh",
            height: "5vh",
        }
    }
    const circleVariants = {
        hover: {
            fill: "#C3E8DA"
        },
        tiny:{
            fill: "#C3E8DA"
        },
        init: {
            fill: "none"
        }
    }
    
    return (
        <>
            
            <div className = 'homePage-container'>
                <div className = "clouds">
                        <img src = {cloud1}/>
                        <img src = {cloud2}/>
                        <img src = {cloud3}/>
                        <img src = {cloud4}/>
                        <img src = {cloud5}/>
                        <img src = {cloud1}/>
                        <img src = {cloud2}/>
                        <img src = {cloud3}/>
                        <img src = {cloud4}/>
                        <img src = {cloud5}/>
                </div>
                <header className = "header-homePage">

                    <svg id = 'loadingPill' width="618" height="278" viewBox="0 0 618 278" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.5" y="1.5" width="615" height="275" rx="137.5" stroke="#C3E8DA" stroke-width="3"/>
                    </svg>
                    <div className = 'mainText'>{mainText}</div>
                </header>
                <div className = "main-container-homePage">

                    <div className = 'sidebar-homePage'>
                        <div className = "tagLine">{tagLine}</div>
                        <div className = "sidebar-line"> </div>
                    </div>

                    <div className = 'body-homePage'>
                        <img className = "mountain" src = {mountain}/>
                        <div className = "bodyTitle-container">
                            <motion.div transition = {transition} initial = {{opacity: 0}} animate = {{opacity:100}}  className = "bodyTitle"> m </motion.div>
                            <motion.div transition = {transition} initial = {{opacity: 0}} animate = {{opacity:100}} className = "bodyTitle"> n</motion.div>
                            <motion.div transition = {transition} initial = {{opacity: 0}} animate = {{opacity:100}} className = "bodyTitle"> a </motion.div>
                        </div>
                        <div className = "bodyText-container">
                            <div className = "bodyText"> {bodyText} </div>
                        </div>
                        <div className = "baybayinText-container">
                            <svg  id = "baybayin" width="78" height="414" viewBox="0 0 78 414" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M37.688 212.552C38.12 209.912 38.576 207.248 39.056 204.56C39.296 203.072 39.56 201.584 39.848 200.096C40.184 198.56 40.448 197.12 40.64 195.776C40.832 194.384 41.288 193.664 42.008 193.616C42.632 193.472 43.28 193.328 43.952 193.184C44.624 193.04 45.248 192.968 45.824 192.968C48.464 193.016 50.816 194.096 52.88 196.208C54.848 198.176 56.192 200.6 56.912 203.48C57.056 204.056 57.464 205.376 58.136 207.44C59.384 211.232 60.032 213.152 60.08 213.2C60.8 213.728 61.544 212.864 62.312 210.608C64.376 204.56 63.56 199.16 59.864 194.408C56.12 189.512 51.248 186.896 45.248 186.56C38.864 186.8 32.504 188.768 26.168 192.464C19.496 196.352 14.192 200.552 10.256 205.064C9.632 205.784 8.072 207.344 5.576 209.744C3.752 211.472 2.552 213.224 1.976 215C2.024 216.92 2.144 217.952 2.336 218.096C4.592 217.616 7.256 215.984 10.328 213.2C14.792 209.168 19.544 205.232 24.584 201.392C27.896 198.608 31.016 196.736 33.944 195.776C34.088 195.728 34.064 196.64 33.872 198.512C33.392 202.832 33.128 205.064 33.08 205.208C32.36 208.856 31.856 211.808 31.568 214.064C31.376 215.456 31.088 216.848 30.704 218.24C31.712 219.152 33.176 218.816 35.096 217.232C36.104 216.416 36.968 214.856 37.688 212.552Z" fill="black"/>
                                <path d="M11.336 259.08C10.376 259.512 9.512 260.04 8.744 260.664C8.024 261.24 7.544 261.72 7.304 262.104L6.944 262.608C6.368 263.04 5.312 263.928 3.776 265.272C2.288 266.616 1.448 267.408 1.256 267.648C0.536 268.368 0.152 269.04 0.104 269.664C0.0560002 270.24 0.344 270.576 0.968 270.672C1.592 270.72 2.528 270.48 3.776 269.952C6.752 268.56 9.128 267.48 10.904 266.712C11.624 266.424 12.224 266.208 12.704 266.064C13.232 265.872 13.64 265.752 13.928 265.704C14.216 265.656 14.672 265.584 15.296 265.488C15.968 265.392 16.592 265.272 17.168 265.128C17.36 265.128 17.552 265.272 17.744 265.56C17.936 265.8 18.152 266.184 18.392 266.712C18.488 266.856 18.536 266.952 18.536 267C18.632 267.144 18.536 267.768 18.248 268.872C18.008 269.976 17.672 271.464 17.24 273.336C16.808 275.16 16.472 276.576 16.232 277.584C15.608 280.512 14.936 283.536 14.216 286.656C13.784 288.144 13.664 289.392 13.856 290.4C14.096 291.36 14.792 292.128 15.944 292.704C16.712 292.896 17.648 292.944 18.752 292.848C20.672 292.656 22.688 292.2 24.8 291.48C26.96 290.76 28.64 290.064 29.84 289.392C45.872 279.216 55.76 272.904 59.504 270.456L63.68 268.152C63.824 268.056 65.144 267.408 67.64 266.208C70.184 265.008 72.128 263.976 73.472 263.112C74.816 262.2 75.296 261.528 74.912 261.096C74.336 260.424 73.736 259.944 73.112 259.656C72.536 259.368 71.84 259.272 71.024 259.368C70.208 259.464 69.512 259.584 68.936 259.728C68.408 259.872 67.616 260.16 66.56 260.592C66.224 260.736 65.96 260.832 65.768 260.88C60.488 262.848 56.6 264.528 54.104 265.92C53.192 266.448 50.816 267.984 46.976 270.528C43.184 273.024 40.64 274.824 39.344 275.928C37.808 277.224 35.168 278.976 31.424 281.184C27.68 283.392 24.896 284.592 23.072 284.784C22.64 284.832 22.4 284.448 22.352 283.632C22.304 282.816 22.4 281.784 22.64 280.536C22.928 279.288 23.216 278.064 23.504 276.864C23.84 275.664 24.152 274.584 24.44 273.624L24.872 272.184C25.016 271.416 25.208 270.6 25.448 269.736C25.736 268.824 25.904 268.032 25.952 267.36C26.096 265.536 26 263.712 25.664 261.888C25.616 261.648 25.52 261.384 25.376 261.096C25.232 260.76 25.088 260.496 24.944 260.304L24.728 260.016C24.536 259.632 24.104 259.2 23.432 258.72C22.808 258.24 22.112 257.976 21.344 257.928C21.152 257.928 21.032 257.808 20.984 257.568C20.936 257.28 20.96 256.92 21.056 256.488C21.2 256.008 21.368 255.48 21.56 254.904C21.752 254.28 21.968 253.56 22.208 252.744L22.928 250.296C23.168 249.48 23.408 248.568 23.648 247.56C23.888 246.504 24.056 245.52 24.152 244.608C24.152 244.464 24.224 244.104 24.368 243.528C24.512 242.904 24.608 242.352 24.656 241.872C24.752 241.392 24.776 240.912 24.728 240.432C24.728 239.952 24.608 239.64 24.368 239.496C23.408 238.92 22.4 238.584 21.344 238.488C20.288 238.392 19.376 238.68 18.608 239.352C18.368 239.64 18.08 240.144 17.744 240.864C17.408 241.536 17.144 242.136 16.952 242.664L16.592 243.528L13.064 257.784C12.728 258.408 12.152 258.84 11.336 259.08Z" fill="black"/>
                                <path d="M37.976 142.296C39.08 142.248 41.792 142.008 46.112 141.576C50.432 141.144 52.64 140.928 52.736 140.928C44.432 146.784 39.632 150.096 38.336 150.864C36.752 151.872 35.552 152.568 34.736 152.952C30.272 155.016 26.84 156.264 24.44 156.696C24.2 156.744 23.984 156.696 23.792 156.552C23.6 156.36 23.456 156.096 23.36 155.76C23.312 155.424 23.288 155.064 23.288 154.68C23.288 154.248 23.312 153.768 23.36 153.24C23.456 152.664 23.528 152.16 23.576 151.728C23.624 151.248 23.72 150.72 23.864 150.144C24.008 149.52 24.104 149.064 24.152 148.776C24.248 148.44 24.344 148.056 24.44 147.624C24.536 147.144 24.584 146.904 24.584 146.904L25.016 145.104C25.016 145.056 25.04 144.96 25.088 144.816C25.136 144.672 25.16 144.552 25.16 144.456C25.208 144.36 25.232 144.24 25.232 144.096C25.28 143.904 25.328 143.76 25.376 143.664C25.424 143.52 25.472 143.376 25.52 143.232C25.568 143.088 25.616 142.968 25.664 142.872C25.76 142.776 25.832 142.704 25.88 142.656C25.976 142.56 26.048 142.512 26.096 142.512C26.192 142.464 26.288 142.44 26.384 142.44C28.352 142.536 32.216 142.488 37.976 142.296ZM20.264 129.12C20.12 129.12 19.832 129.12 19.4 129.12C19.016 129.072 18.776 129.048 18.68 129.048C18.488 129.048 18.008 129.144 17.24 129.336C15.128 130.008 13.352 130.656 11.912 131.28C10.472 131.904 9.56 132.336 9.176 132.576C8.792 132.768 8.216 133.248 7.448 134.016C7.064 134.352 6.632 134.736 6.152 135.168C5.672 135.6 5.24 136.008 4.856 136.392C4.52 136.776 4.04 137.28 3.416 137.904C2.168 139.296 1.4 140.16 1.112 140.496C0.92 140.784 0.728 141.096 0.536 141.432C0.392 141.72 0.272 142.032 0.176 142.368C0.0800001 142.656 0.104 142.92 0.248 143.16C0.44 143.352 0.728 143.472 1.112 143.52C1.736 143.568 2.624 143.256 3.776 142.584C6.656 140.952 8.936 139.656 10.616 138.696C12.104 137.976 13.568 137.448 15.008 137.112C15.632 136.968 16.208 136.824 16.736 136.68C16.976 136.584 17.288 136.776 17.672 137.256C18.056 137.736 18.248 138.12 18.248 138.408C18.344 138.504 18.32 139.104 18.176 140.208C18.08 140.928 17.864 142.464 17.528 144.816C17.192 147.168 16.976 148.608 16.88 149.136C16.496 152.112 16.088 155.184 15.656 158.352C15.368 159.984 15.392 161.28 15.728 162.24C16.064 163.152 16.784 163.824 17.888 164.256C19.232 164.496 21.32 164.16 24.152 163.248C26.696 162.48 29.456 161.424 32.432 160.08C35.456 158.688 37.76 157.56 39.344 156.696C40.976 155.832 43.472 154.464 46.832 152.592C47.648 152.112 48.056 151.848 48.056 151.8C48.296 151.704 52.352 148.848 60.224 143.232C62.768 141.408 65.336 139.512 67.928 137.544C70.568 135.576 71.864 134.52 71.816 134.376C76.088 130.776 78.104 128.616 77.864 127.896C77.576 126.936 76.448 126.72 74.48 127.248C74.144 127.344 70.544 129.312 63.68 133.152C63.392 133.344 62.96 133.536 62.384 133.728L60.944 134.304C55.808 135.456 51.944 135.936 49.352 135.744L26.384 136.608L24.512 131.424C24.368 130.992 23.768 130.488 22.712 129.912C21.704 129.336 20.888 129.072 20.264 129.12Z" fill="black"/>
                                <line x1="37" y1="82" x2="37" stroke="black" stroke-width="2"/>
                                <line x1="37" y1="414" x2="37" y2="332" stroke="black" stroke-width="2"/>
                            </svg>
                        </div>
                    </div>
                    
                    <div className = 'menu-homePage'>
                            {/* <svg id = "menu-line" width="720" height="1024" viewBox="0 0 720 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="720.409" y1="0.287588" x2="0.409022" y2="1024.29" stroke="black"/>
                            </svg> */}
                            <div className = "menu-line"></div>

                            <motion.div variants = {buttonVariant} whileHover = "hover" onMouseOver = {callTiny} className = 'button'>
                                    <span className = "sectionTitle"> {section1} </span>
                                    <motion.svg  variants = {circleVariantsSvg} animate = {tinyButton ?  'tiny' : false}  id = "circles" width="5vh" height="5vh" viewBox="50 -100 900 1200" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <motion.circle variants = {circleVariants}  fill = "none" cx="496" cy="496" r="165.16" stroke="#C3E8DA" strokeWidth = "10px"/>
                                        <motion.circle  variants = {circleVariants} fill = "none" cx="496" cy="496" r="330.32" stroke="#C3E8DA" strokeWidth = "10px"/>
                                        <motion.circle  variants = {circleVariants} fill = "none" cx="496" cy="496" r="495.5" stroke="#C3E8DA" strokeWidth = "10px"/>
                                    </motion.svg>
                            </motion.div>
                            <motion.div variants = {buttonVariant} whileHover = "hover" onMouseOver = {callTiny} className = 'button2'>
                                    <span className = "sectionTitle"> {section2} </span>
                                    <motion.svg variants = {circleVariantsSvg} animate = {tinyButton ?  'tiny' : false} id =  "circles" width="5vh" height="5vh" viewBox="50 -100 900 1200" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                        <motion.circle variants = {circleVariants} fill = "none" cx="496" cy="496" r="165.16" stroke="#C3E8DA" strokeWidth = "10px"/>
                                        <motion.circle variants = {circleVariants} fill = "none" cx="496" cy="496" r="330.32" stroke="#C3E8DA" strokeWidth = "10px"/>
                                        <motion.circle variants = {circleVariants} fill = "none" cx="496" cy="496" r="495.5" stroke="#C3E8DA" strokeWidth = "10px"/>
                                    </motion.svg>
                            </motion.div>
                            <motion.div variants = {buttonVariant} whileHover = "hover" onMouseOver = {callTiny} className = 'button3'>
                                    <span className = "sectionTitle"> {section3} </span>
                                    <motion.svg variants = {circleVariantsSvg} animate = {tinyButton ?  'tiny' : false} id = "circles" width="5vh" height="5vh" viewBox="50 -100 900 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <motion.circle variants = {circleVariants} fill = "none" cx="496" cy="496" r="165.16" stroke="#C3E8DA" strokeWidth = "10px"/>
                                        <motion.circle variants = {circleVariants} fill = "none" cx="496" cy="496" r="330.32" stroke="#C3E8DA" strokeWidth = "10px"/>
                                        <motion.circle variants = {circleVariants} fill = "none" cx="496" cy="496" r="495.5" stroke="#C3E8DA" strokeWidth = "10px"/>
                                    </motion.svg>
                            </motion.div>
                            <motion.div variants = {buttonVariant} whileHover = "hover" onMouseOver = {callTiny} className = 'button4'>
                                    <span className = "sectionTitle"> {section4} </span>
                                    <motion.svg variants = {circleVariantsSvg} animate = {tinyButton ?  'tiny' : false} id = "circles" width="5vh" height="5vh" viewBox="50 -100 900 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <motion.circle variants = {circleVariants} fill = "none" cx="496" cy="496" r="165.16" stroke="#C3E8DA" strokeWidth = "10px"/>
                                        <motion.circle variants = {circleVariants} fill = "none" cx="496" cy="496" r="330.32" stroke="#C3E8DA" strokeWidth = "10px"/>
                                        <motion.circle variants = {circleVariants} fill = "none" cx="496" cy="496" r="495.5" stroke="#C3E8DA" strokeWidth = "10px"/>
                                    </motion.svg>
                            </motion.div>
                            <motion.div className = 'button5'>
                                <div className = "changeBg"></div>
                            </motion.div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage
