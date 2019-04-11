export const fetchAll = async() => {
    try {
        let response = await fetch(`https://randomuser.me/api/?results=10 `);
        let data = await response.json();
        return data;
    } catch(e) {
        return e;
    }
}