export const fetchrequest = async (endpoint, method, body) => {
    const url = `http://localhost:8000/api/${endpoint}`;
    const response = await fetch(url, {
        method: method,
        headers: {
        "Content-Type": "application/json",
        },
        ...(body && { body: JSON.stringify(body) }),
    });
    return await response.json();
    }