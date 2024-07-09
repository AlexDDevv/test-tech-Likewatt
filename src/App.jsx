import { useEffect, useState } from "react"
import Array from "./components/Array";
const APIKEY = import.meta.env.VITE_APIKEY
import Weather from "./components/Weather";

function App() {
    const [data, setData] = useState([])
    const [weatherData, setWeatherData] = useState(null)

    const arrayURL = 'https://apitest.likewatt-infra.com/entry-test/2'
    const weatherURL = `https://api.weatherbit.io/v2.0/forecast/daily?lat=43.2926781&lon=5.5676425&lang=fr&key=${APIKEY}`

    useEffect(() => {
        const fetchData = async () => {
            const resultArray = await fetch(arrayURL)
            resultArray.json().then(dataArray => {
                setData(dataArray.data)
            })

            const resultWeather = await fetch(weatherURL)
            resultWeather.json().then(dataWeather => {
                setWeatherData(dataWeather)
            })
        }
        fetchData()
    }, []);

    console.log(weatherData);

    const addRow = () => {
        const newRow = {
            id: Date.now().toString(),
            isActive: false,
            tilt: 0,
            capacity: 0,
            model: ''
        };
        setData([...data, newRow]);
    };

    const onDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    return (
        <div className="app-container">
            <div className="array-container">
                <div className="array">
                    <div className="left-part">
                        <h2>Non éditable</h2>
                        {data.length > 0 && (
                            data.map((item, i) => (
                                <Array
                                    key={item.id ? item.id : i}
                                    model={item.model}
                                    tilt={item.tilt}
                                    capacity={item.capacity}
                                    isActive={item.isActive}
                                    onDelete={() => onDelete(item.id)}
                                    isEditable={false}
                                />
                            ))
                        )}
                    </div>
                    <div className="right-part">
                        <h2>Éditable</h2>
                        {data.length > 0 && (
                            data.map((item, i) => (
                                <Array
                                    key={item.id ? item.id : i}
                                    model={item.model}
                                    tilt={item.tilt}
                                    capacity={item.capacity}
                                    isActive={item.isActive}
                                    onDelete={() => onDelete(item.id)}
                                    isEditable={true}
                                />
                            ))
                        )}
                    </div>
                </div>
                <button onClick={addRow} className="add-row">+</button>
            </div>
            <div className="weather-app-container">
                <Weather
                    weatherData={weatherData}
                />
            </div>
        </div>
    )
}

export default App
