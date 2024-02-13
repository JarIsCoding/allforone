const sayHelloApi = async (name) => {
    const promise = await fetch(`https://allendpoints.azurewebsites.net/Hello/Hello/${name}`);
    const data = await promise.text();
    console.log(data);
    return data;
}

const addNumApi = async (numone, numtwo) => {
    const promise = await fetch(`https://allendpoints.azurewebsites.net/SumOf/FindSum/${numone}/${numtwo}`);
    const data = await promise.text();
    console.log(data);
    return data;
}

const AskQApi = async (numone, numtwo) => {
    const promise = await fetch(`https://allendpoints.azurewebsites.net/WokeUpTime/TimeAndName/${numone}/${numtwo}`);
    const data = await promise.text();
    console.log(data);
    return data;
}

const GreaterOrLessApi = async (numone, numtwo) => {
    const promise = await fetch(`https://allendpoints.azurewebsites.net/GreaterOrLessThan/InputTwoNum/${numone}/${numtwo}`);
    const data = await promise.text();
    console.log(data);
    return data;
}

const MadLibApi = async (numone, numtwo, numthree, numfour, numfive) => {
    const promise = await fetch(`https://allendpoints.azurewebsites.net/Controller/Madlib/${numone}/${numtwo}/${numthree}/${numfour}/${numfive}`);
    const data = await promise.text();
    console.log(data);
    return data;
}

const OddEvenApi = async (numone) => {
    const promise = await fetch(`https://allendpoints.azurewebsites.net/OddOrEven/Number/${numone}`);
    const data = await promise.text();
    console.log(data);
    return data;
}

const ReverseAlphaApi = async (UserInput) => {
    const promise = await fetch(`https://allendpoints.azurewebsites.net/StringReverse/InputHere/${UserInput}`);
    const data = await promise.text();
    console.log(data);
    return data;
}

const ReverseNumpi = async (UserInput) => {
    const promise = await fetch(`https://allendpoints.azurewebsites.net/NumberReverse/InputHere/${UserInput}`);
    const data = await promise.text();
    console.log(data);
    return data;
}

const EightBallApi = async (UserInput) => {
    const promise = await fetch(`https://allendpoints.azurewebsites.net/EightBall/AskAQuestion/${UserInput}`);
    const data = await promise.text();
    console.log(data);
    return data;
}

const RestaurantApi = async (UserInput) => {
    const promise = await fetch(`https://allendpoints.azurewebsites.net/RestaurantPicker/Asian-American-Mexican/${UserInput}`);
    const data = await promise.text();
    console.log(data);
    return data;
}

export {sayHelloApi, addNumApi, AskQApi, GreaterOrLessApi, MadLibApi, OddEvenApi, ReverseAlphaApi, ReverseNumpi, EightBallApi, RestaurantApi}