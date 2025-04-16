import { useState } from 'react'
import p1 from './image/p1.png'
import p2 from './image/p2.png'


function App() {
    const [currentImg, setCurrentImg] = useState(0);
    const arrPhotos = [p1, p2];
    return (
        <>
            <div className='main'>
                <div>
                    {/* <img src={p1} alt="" width={100} />
                    <img src={p2} alt="" width={100} /> */}
                    {
                        arrPhotos.map((photo, index) => {
                            return (
                                <img
                                    key={index} src={photo} alt="" width={100}
                                    //當滑鼠碰到時，取得圖片索引編號，透過setCurrentImg方法更改
                                    onMouseOver={e => setCurrentImg(index)}
                                    //變更鼠標為手型
                                    style={{ cursor: 'pointer' }}
                                />
                            )
                        })
                    }



                </div>


                <div>
                    <img src={arrPhotos[currentImg]} alt="" width={300} />
                </div>
            </div >
        </>
    )
}
export default App