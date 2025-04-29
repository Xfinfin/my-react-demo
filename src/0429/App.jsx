import { useEffect, useState } from "react"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";



function App() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        { url: "./image/1.png" },
        { url: "./image/2.png" },
        { url: "./image/3.png" },
    ]

    //當currentIndex值改變時，會在觸發一次
    useEffect(() => {
        //每隔時常
        const autoplay = setInterval(() => {
            //換下一張圖
            nextSlide();
        }, 1000);

        return () => clearInterval(autoplay);
    }, [currentIndex]);

    //下一張
    const nextSlide = () => {
        //檢查圖片是否在最後一張，若是回到第一張，若不是則跳下一張。換圖輪播
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
    }

    //上一張
    const prevSlide = () => {
        //檢查圖片是否在最後一張，若是回到第一張，若不是則跳下一張。換圖輪播
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
    }

    //按鈕控制
    const Arrow = ({ direction, onClick }) => {
        return (
            <div style={{
                position: "absolute",
                top: "50%",
                cursor: "pointer",
                color: "white",
                [direction]: "20px",
            }}>
                {
                    direction === "left" ? (
                        <FaArrowLeft onClick={onClick} size={50} />
                    ) : (
                        <FaArrowRight onClick={onClick} size={50} />
                    )
                }
            </div>
        )
    }



    return (
        <>
            {/* 最外層 */}
            <div style={{
                maxWidth: "100vw",
                height: "100vh",
                margin: "auto",
            }}>
                <div style={{
                    backgroundImage: `url(${slides[currentIndex].url})`,
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",

                }}>
                    {/* 文字區 */}
                    <h2 style={{ color: "red" }}>{slides[currentIndex].title}</h2>
                    <Arrow direction="left" onClick={prevSlide} />
                    <Arrow direction="right" onClick={nextSlide} />
                </div>
            </div>
        </>

    )
}
export default App