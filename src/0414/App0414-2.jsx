function Component() {
    return <h1>React</h1>
}


function App() {
    //建立陣列1
    const listItem = [
        <Component key="0" />,
        <Component key="1" />
    ]
    //建立陣列2
    const listBooks = [
        { bookName: 'HTML', id: 'book1' },
        { bookName: 'CSS', id: 'book2' },
        { bookName: 'Javascript', id: 'book3' },
        { bookName: 'React', id: 'book4' },


    ]

    //過濾出陣列中，除了CSS書本
    const filterBooks = listBooks.filter((book) => {
        if (book.bookName  != 'CSS') {
            return true
        }
    })

    return (
        <>
            {/* 使用陣列1 */}
            {listItem}
            <hr />

            {/* 使用陣列2,使用map */}
            {
                listBooks.map((book) => {
                    return <div key={book.id}>{book.bookName}</div>
                })
            }
            <hr />

            {/* 顯示filter()過濾後的陣列資料 */}
            {
                filterBooks.map((book) => {
                    return <div key={book.id}>{book.bookName}</div>
                })
            }
        </>
    )
}
export default App
