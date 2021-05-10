  
    const BASE_URI = "http://localhost:8000/api";
    const headers = {
        headers: {
            "Content-type": "application/json;charset=UTF-8",
            "Accept": "application/json"
        }
    };

    const connect = async (args) => {
      
        const endPoint  = args["endPoint"];
        const body =  args["body"];
        const method = args["method"];
        const token  = args['token'] || '';
        const authorization = token ?  `Bearer ${token}` : '' ;
        headers["headers"]["Authorization"] = authorization;
        const uri = BASE_URI+endPoint; 
        const options = {
            method: method,
            headers: headers["headers"],
            body: JSON.stringify(body)
        }
        const response = await fetch(uri,options)
        if ( !response.ok ) {
            const { response: { message } } = await response.json();
            
            throw new Error(message);
        }

        return await response.json();
    };

export  const login = async (args) => {
        return await connect(args);
    };

export  const register = async (args) => {
        return await connect(args);
    };

export const forgotPassword = async (args) => {
        return await connect(args);
       
    };

export const resetPassword = async (args) => {
        return await connect(args);
    };

export const logout = async (args) =>  {
        return await connect(args);
    };
    
export const notifications =  async (args) => {
        const endPoint  = args["endPoint"];
        const uri = BASE_URI+endPoint; 
        const response = await fetch(uri)
        if ( !response.ok ) {
            const { response: { message } } = await response.json();
            
            throw new Error(message);
        }

        return await response.json();
    };

export const vote = async (args) => {
        return await connect(args);
    };

export const eviction = async (args) => {
        const endPoint  = args["endPoint"];
        const method = args["method"];
        const token  = args['token'] || '';
        const authorization = token ?  `Bearer ${token}` : '' ;
        headers["headers"]["Authorization"] = authorization;
        const uri = BASE_URI+endPoint; 
        const options = {
            method: method,
            headers: headers["headers"],
        }
        const response = await fetch(uri,options)
        if ( !response.ok ) {
            const {response : { message }} = await response.json();
            
            throw new Error(message);
        }

        return await response.json();
    };