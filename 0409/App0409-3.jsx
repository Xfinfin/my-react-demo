function App(){
    return(
        <>
            上課中
        </>
    )
}

/* //建立陣列
const arr1 = ['p1','p2','p3']
//一般寫法
console.log(arr1[0],arr1[1],arr1[2])

//陣列解構
const[pNo1,pNo2,pNo3]=arr1 */

const data = {
    s1:{
        id:'s001',
        subject:'HTML',
        score:'100',
    },
    s2:{
        id:'s002',
        subject:'HTML',
        score:'99',
    },
    s3:{
        id:'s003',
        subject:'HTML',
        score:'98',
    },
}
const{s2,...other}=data
console.log(s2)
console.log(other)
const{id,subject,score}=s2
console.log(id,subject,score)


export default App