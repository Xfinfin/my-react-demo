function MyComponent(props) {
    console.log(props)

    //執行父元件傳送過來德C屬性
    props.c()
    //使用大括號{props,屬性名稱}
    return <>
        <div>我是子元件，主元件告訴我:{props.a}</div>
        {props.c()}
    </>
}

//子元件
//由於props是物件，所以可以使用解構方式，來取得資料
function MyComponent2({ a, c }) {
    c()
    return <>
        <div>第一個屬性:{a}</div>

        <div>第三個屬性:{c()}</div>
    </>
}

function App() {
    return (
        <>
            {/* 回調函式 =>callback function*/}
            <MyComponent
                a="我是屬性a"
                c={() => { console.log("我是屬性c") }}

            />
            <MyComponent2
                a="我是屬性a"
                c={() => { console.log("我是屬性c") }}
            />

        </>
    )
}
export default App