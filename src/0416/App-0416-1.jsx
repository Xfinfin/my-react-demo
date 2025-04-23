import { useEffect, useState } from "react";

function App() {
    // 使用 useState 建立變數
    const [location, setLocation] = useState([]);

    // 渲染後，先使用 useEffect 取得天氣資料
    useEffect(() => {
        (async () => {
            // 取得遠端資料（用 fetch 取代 axios）
            const res = await fetch('https://coffeeteacher.github.io/weather/F-C0032-001.json');
            const data = await res.json();

            // 解構各縣市氣象資訊
            const { location } = data.cwaopendata.dataset;

            // 將取得天氣資料，透過 setLocation 方法，更新 location 變數資料
            setLocation(location);
        })();
    }, []);

    return (
        <>
            <h2>36小時天氣預報</h2>

            {/* 一列兩欄 */}
            <div className="row row-cols-2 g-4">
                {/* 使用回圈，顯示所有縣市 */}
                {
                    location.map((city) => {
                        // 抓出 Wx（天氣狀況）和 PoP（降雨機率）
                        const wx = city.weatherElement.find(el => el.elementName === "Wx");
                        const pop = city.weatherElement.find(el => el.elementName === "PoP");

                        return (
                            // 城市欄
                            <div className="col" key={city.locationName}>
                                {/* 卡片樣式 */}
                                <div className="card text-center">
                                    {/* 頭：卡片標題 */}
                                    <div className="card-header">
                                        <div className="h4 my-0">
                                            {/* 顯示城市名稱 */}
                                            {city.locationName}
                                        </div>
                                    </div>

                                    {/* 身：卡片內容 */}
                                    <div className="row row-cols-3">
                                        {/* 顯示每個縣市的 3 個欄位資訊 */}
                                        {
                                            wx.time.map((item, index) => {
                                                const popItem = pop?.time[index];

                                                return (
                                                    <div className="col" key={index}>
                                                        {/* 日期 */}
                                                        <div className="h4 my-0">
                                                            {item.startTime.slice(8, 10)}日
                                                        </div>
                                                        {/* 時間 */}
                                                        {item.startTime.slice(11, 16)}<br />
                                                        ~<br />
                                                        {item.endTime.slice(11, 16)}<br />
                                                        {/* 天氣圖（對應天氣名稱） */}
                                                        <img
                                                            src={`./weatherIcon/${item.parameter.parameterName}.svg`}
                                                            alt={item.parameter.parameterName}
                                                        />
                                                        {/* 天氣名稱 */}
                                                        <div className="mt-2">
                                                            {item.parameter.parameterName}
                                                        </div>
                                                        {/* 降雨機率 */}
                                                        <div className="mt-2">
                                                            {/* icon */}
                                                            <i className="bi bi-umbrella">
                                                                {popItem?.parameter.parameterName ?? 'N/A'}%
                                                            </i>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default App;
