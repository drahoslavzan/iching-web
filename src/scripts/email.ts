
const url = "https://script.google.com/macros/s/AKfycbxmjl_xiufxg75cKUvec0DiHw35xGr-7shvfjirJjoRWjgwjBY/exec";

interface EmailValues {
    Email: string;
}

export function captureEmail(values: EmailValues) {
    const requestOptions: RequestInit = {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
    };

    fetch(url, requestOptions);
}