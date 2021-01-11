export default function() {
    
    const BASE_URI = "http://localhost:8000/api";
    const headers = {
        headers: {
            "Content-type": "application/json;charset=UTF-8",
            "Accept": "application/json"
        }
    }

    const login = async (args) => {
        const endPoint  = args["endPoint"];
        const body =  args["body"];
        const method = args["method"];
        const uri = BASE_URI+endPoint; 
        const options = {
            method: method,
            headers: headers["headers"],
            body: JSON.stringify(body)
        }
        return await fetch(uri,options)
        .then(res => res.json())
        .then(res => res)
        .catch(err => err)
    }

    const register = async (args) => {
        const endPoint  = args["endPoint"];
        const body =  args["body"];
        const method = args["method"];
        const uri = BASE_URI+endPoint; 
        const options = {
            method: method,
            headers: headers["headers"],
            body: JSON.stringify(body)
        }
        return await fetch(uri,options)
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
    }

    const logout = async (args) =>  {
        const endPoint  = args["endPoint"];
        const method =  args["method"];
        const authorization = `Bearer ${args["token"]}`;

        headers["headers"]["Authorization"] = authorization;
        const uri = BASE_URI+endPoint;
        console.log(headers)
        const options = {
            method: method,
            headers: headers["headers"]
        };
        
        return await fetch(uri, options)
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err))
    }

    return {
        login,register, logout
    }
}