export const getCallFromLocalDB = () =>{
    const allCalls = localStorage.getItem('storeCalls');
    if (allCalls) return JSON.parse(allCalls);

    return [];
}

export const addCallInLocalDB = (call) => {
    const allCalls = getCallFromLocalDB();
    const isAlreadyExist = allCalls.find(cl => cl.id === call.id)
    const newEntry = { ...call, type: 'call', date: new Date().toISOString() };
    if(!isAlreadyExist){
        allCalls.push(newEntry)
        localStorage.setItem("storeCalls", JSON.stringify(allCalls));

    };
}

// text
export const getTextFromLocalDB = () =>{
    const allTexts = localStorage.getItem('storeTexts');
    if (allTexts) return JSON.parse(allTexts);

    return [];
}

export const addTextInLocalDB = (text) => {
    const allTexts = JSON.parse(localStorage.getItem('storeTexts') || '[]');
    const isExist = allTexts.find(t => t.id === text.id);
    if (!isExist) {
        allTexts.push({ ...text, type: 'text', date: new Date().toISOString() });
        localStorage.setItem("storeTexts", JSON.stringify(allTexts));
    }
}

// video
export const getVideoFromLocalDB = () =>{
    const allVideo = localStorage.getItem('storeVideo');
    if (allVideo) return JSON.parse(allVideo);

    return [];
}

export const addVideoInLocalDB = (video) => {
    const allVideos = JSON.parse(localStorage.getItem('storeVideos') || '[]');
    const isExist = allVideos.find(v => v.id === video.id);
    if (!isExist) {
        allVideos.push({ ...video, type: 'video', date: new Date().toISOString() });
        localStorage.setItem("storeVideos", JSON.stringify(allVideos));
    }
}

export const getAllTimeline = () => {
    const calls = JSON.parse(localStorage.getItem('storeCalls') || '[]');
    const texts = JSON.parse(localStorage.getItem('storeTexts') || '[]');
    const videos = JSON.parse(localStorage.getItem('storeVideos') || '[]');
    return [...calls, ...texts, ...videos].sort((a, b) => new Date(b.date) - new Date(a.date));
}