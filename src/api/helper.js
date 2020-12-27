export const fetchAPi = async (link, data = {}, method = 'POST', headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' }) => {
    return (new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(site_url + link, {
                method: method,
                headers: headers,
                body: JSON.stringify(data)
            });
            if (response.status == 201) {
                var json = response.json();
                resolve(json);
            } else {
                reject(response.status);
            }
        } catch (err) {
            reject(err);
        }
    })
    );
}