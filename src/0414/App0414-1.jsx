function App() {






    return (
        <>
            {/* 事件處裡 */}
            {/* 在HTML標籤上榜定事件 */}
            <button onClick={
                function () {
                    alert('hello1');
                }
            }>打招呼1</button>

            <button onClick={
                () => {
                    alert; { 'hello2'; };
                }
            }>打招呼2</button>


            {/* 事件處理2 */}
            {/*呼叫函式 */}
            <button onClick={sayhi3}>打招呼3</button>
            <button onClick={sayhi4}>打招呼4</button>



        </>
    )
}
export default App