// export const baseUrl = "https://basheq-server.onrender.com"
export const baseUrl = " http://localhost:8000"


export const login = async (body) => {
    const url = "/Login";

    return await fetchApi(url, "POST", JSON.stringify(body));
};


export const fetchApi = async (route, method, body) => {
    const url = baseUrl + route;
    return await fetch(url, {
        method: method || 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body,

    }).then(res => res.json())
        .catch((error) => {
            console.error("fetch Error", error?.message);
        });
}





