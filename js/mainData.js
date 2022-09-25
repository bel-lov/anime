const mainData = () => {
    // fetch('./db.json')
    fetch(' https://test-aec71-default-rtdb.firebaseio.com/anime.json')
        .then((response) => {
            return response.json();//распаковываем ответ от сервера
        })
        .then((data) => {
            console.log(data);
        })
}

mainData()