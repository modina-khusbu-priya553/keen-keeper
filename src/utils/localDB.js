export const getCallFromLocalDB = () =>{
    const allCalls = localStorage.getItem('storeCalls');
    if (allCalls) return JSON.parse(allCalls);

    return [];
}

export const addCallInLocalDB = (call) => {
    const allCalls = getCallFromLocalDB();
    const isAlreadyExist = allCalls.find(cl => cl.id === Call.id)
    if(!isAlreadyExist){
        allCalls.push(call);
        localStorage.setItem("storeCalls", JSON.stringify(allCalls));

    };
}