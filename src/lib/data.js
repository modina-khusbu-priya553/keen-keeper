export const friendsData = async () =>{
    const res = await fetch("https://keen-keeper-six-xi.vercel.app/data.json")
    const data = await res.json();
    return data;


}