import { useState } from "react"

function CreateForm({ addTodo }) {
    //建立input變數
    const [content, setContent] = useState('');

    //建立buttom回傳
    const handleSubmit = (e) => {
        //取消網頁預設行為,不然會抓不到資料
        e.preventDefault();
        //增加todo內容
        addTodo(content);
        //消空input輸入列
        setContent('');
    }

    return (
        <form className="create-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="輸入代辦事項"
                value={content}
                //onChange為雙向綁定
                //當ui內容發生異動時，state會跟著改變
                //當state發生改變時，ui也會跟著改變

                onChange={(e) => {
                    setContent(e.target.value)//
                }}
            />
            <button type="submit">加入</button>
        </form>
    )
}
export default CreateForm