import React from 'react';
import { MainWrapper } from './styles.modules';
import { AiOutlineSearch } from 'react-icons/ai';
import { WiHumidity } from 'react-icons/wi';
import { LuWind } from 'react-icons/lu';
import { BsSunFill, BsCloudyFill, BsFillCloudRainFill, BsCloudFog2Fill } from 'react-icons/bs';
import { RiLoaderFill } from 'react-icons/ri';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import axios from 'axios';

interface WeatherDataProps {
    name: string;
    main: {
        temp: number;
        humidity: number;
    };
    sys: {
        country: string;
    };
    weather: {
        main: string;
    }[];
    wind: {
        speed: number;
    };
}

function DisplayWeather() {
    const api_key = "0cc86d16bf572f78cdc96c096c7627e5";
    const api_endpoint = "https://api.openweathermap.org/data/2.5/";

    const [weatherData, setWeatherData] = React.useState<WeatherDataProps | null>(null);
    const [searchCity, setSearchCity] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);

    const fetchCurrentWeather = async (lat: number, lon: number) => {
        const url = `${api_endpoint}weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
        const response = await axios.get(url);
        return response.data;
    };

    const fetchWeatherData = async (city: string) => {
        try {
            const url = `${api_endpoint}weather?q=${city}&appid=${api_key}&units=metric`;
            const searchResponse = await axios.get(url);
            const currentSearchResults: WeatherDataProps = searchResponse.data;
            return currentSearchResults;
        } catch (error) {
            console.error("No Data Found");
            return undefined;
        }
    };

    const handleSearch = async () => {
        if (searchCity.trim() === "") {
            return;
        }

        try {
            const currentWeatherData = await fetchWeatherData(searchCity);
            if (currentWeatherData) {
                setWeatherData(currentWeatherData);
            } else {
                console.error("No Results Found");
            }
        } catch (error) {
            console.error("No Results Found");
        }
    };

    const iconchanger = (weather: string) => {
        let iconElement: React.ReactNode;
        let IconColor: string;

        switch (weather) {
            case "Rain":
                iconElement = <BsFillCloudRainFill />;
                IconColor = "#FFC436";
                break;
            case "Clear":
                iconElement = <TiWeatherPartlySunny />;
                IconColor = "#272829";
                break;
            case "Clouds":
                iconElement = <BsCloudyFill />;
                IconColor = "#102C57";
                break;
            case "Mist":
                iconElement = <BsCloudyFill />;
                IconColor = "#102C57";
                break;
            default:
                iconElement = <TiWeatherPartlySunny />;
                IconColor = "#7B2869";
        }

        return (
            <span className='icon' style={{ color: IconColor }}>
                {iconElement}
            </span>
        );
    };

    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            fetchCurrentWeather(latitude, longitude).then((currentWeather) => {
                setWeatherData(currentWeather);
            });
        });
    }, []);

    return (
        <MainWrapper>
            <div className='container'>
                <div className="searchArea">
                    <input
                        type='text'
                        placeholder='enter a city'
                        value={searchCity}
                        onChange={(e) => setSearchCity(e.target.value)}
                    />
                    <div className='searchCircle'>
                        <AiOutlineSearch className='searchIcon' onClick={handleSearch} />
                    </div>
                </div>

                {weatherData && (
                    <>
                        <div className='weatherArea'>
                            <h1>{weatherData.name}</h1>
                            <span>{weatherData.sys.country}</span>
                            <div className='icon'>
                                {iconchanger(weatherData.weather[0].main)}
                            </div>
                            <h1>{weatherData.main.temp}°C</h1>
                            <h2>{weatherData.weather[0].main}</h2>
                        </div>
                        <div className='bottomInfoArea'>
                            <div className="humiditylevel">
                                <WiHumidity className='windIcon' />
                                <div className="humidinfo">
                                    <h1>{weatherData.main.humidity}%</h1>
                                    <p>Humidity</p>
                                </div>
                            </div>
                            <div className="wind">
                                <LuWind className='windIcon' />
                                <div className='humidinfo'>
                                    <h1>{weatherData.wind.speed} km/h</h1>
                                    <p>WindSpeed</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </MainWrapper>
    );
}

export default DisplayWeather;
