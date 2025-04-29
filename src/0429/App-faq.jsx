import { AnimatePresence, motion } from "motion/react";
import { color } from "motion";
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

//折疊QA =>According
function App() {
    //作用中的變數
    const [activeQuestion, setActiveQuestion] = useState(null);
    //FAQ得資料
    const questions = [
        {
            id: 1,
            questions: "題目1",
            ans: "答案1",
        },
        {
            id: 2,
            questions: "題目2",
            ans: "答案2",
        },
        {
            id: 3,
            questions: "題目3",
            ans: "答案3",
        },
    ];
    return (
        <>
            {/* 最外層 */}
            <div style={{
                maxWidth: "100vw",
                height: "100vh",
                backgroundColor: "#333",
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                {/* 題目區 */}
                <div style={{
                    width: "90%",
                    margin: "auto",
                    maxWidth: "1200px",
                    backgroundColor: "#aaa",
                    borderRadius: "5px",
                    padding: "10px",
                }}>
                    <h2 style={{
                        textAlign: "center",
                        marginBottom: "6px",
                    }}>FAQ標題</h2>
                    {
                        //帶出陣列
                        questions.map((q) => {
                            return (
                                <div key={q.id} style={{ marginBottom: "4px" }}>
                                    <button style={{
                                        border: "1px solid #fff",
                                        background: "none",
                                        width: "100%",
                                        textAlign: "left",
                                        color: "#333",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        fontWeight: "bold",
                                    }}
                                        onClick={() => { setActiveQuestion(activeQuestion === q.id ? null : q.id) }}>
                                        {q.questions}
                                        {activeQuestion === q.id ? <FaMinusCircle /> : <FaPlusCircle />}
                                    </button>

                                    {/* 摺疊扭動畫 */}
                                    <AnimatePresence>
                                        {
                                            //檢查是否作用中的題目，如果是，展開答案
                                            activeQuestion === q.id && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    style={{ marginTop: "5px", backgroundColor: "#333" }}
                                                >
                                                    {q.ans}

                                                </motion.div>
                                            )
                                        }
                                    </AnimatePresence>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default App