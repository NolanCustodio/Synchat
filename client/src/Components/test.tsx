

async function testNode(data: any): Promise<any> {
    const options = {
        method: "POST",
        body: data
    }

    try{
        const response = await fetch("http://localhost:3001/test", options);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

export default () =>{
    return(
        <div>
            <button onClick={() => {
                testNode({work: 'pls'});
            }} style='background-color:skyblue'>Click</button>
        </div>
    )
}
