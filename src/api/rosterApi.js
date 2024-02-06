
export function getNames() {
    const url = 'http://localhost:8080/names';
    return fetch(url)
    .then(response => {
        if(response.status === 200) {
            return response.json();
        } else {
            console.error(`Respnose error in getNames: ${response.status}`);
        }
    }).catch((e) => console.error(`Error in getNames: ${JSON.stringify(e)}`));
}
