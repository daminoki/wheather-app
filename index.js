// fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=e6970efb880b105e85f3508dd47a2c23')
//     .then(response => response.json())
//     .then(data => console.log(data))


const fetchData = async () => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=e6970efb880b105e85f3508dd47a2c23'
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
}

fetchData();