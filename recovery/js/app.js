window.addEventListener('load', () => {
    fetch('https://cdn-api.co-vin.in/api/v2/admin/location/states', {
        method: "get",
        headers: {
            'accept': 'application/json',
            'Accept-Language': 'hi_IN'
        },
        mode: 'no-cors'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
})