const REQUEST_PORT = import.meta.env.VITE_REQUEST_PORT;

interface newUserSignUp{
    username: string,
    email: string,
    password: string,
    action: string
}

interface verifyUser{
    username: string,
    password: string,
    action: string
}


export async function signUp(data: newUserSignUp): Promise<any>{

    const options: any = {
        method: 'POST',
        credentials:'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    try {
        const response = await fetch(`http://localhost:${REQUEST_PORT}/users/signUp`, options);
        // console.log("signup helper:", response.json());
        return response.json();
    } catch (error) {
        return {error: error};
    }
}

export async function login(data: verifyUser){
    const options: any = {
        method: "POST",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(data)
    }

    try{
        const response = await fetch(`http://localhost:${REQUEST_PORT}/users/login`, options);

        console.log(response);
        return response;

        // return response.json();
    }catch (error){
        return {error: error};
    }
}
