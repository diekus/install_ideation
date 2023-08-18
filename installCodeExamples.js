const install = () => {
    return new Promise(function(resolve, reject) {
    
        const rand = Math.floor(Math.random() * 2);
        if (rand === 0){
            //onbeforeinstallprompt threshold passed
            resolve(new Promise(function(iResolve, iReject){
                    //second (install) Promise
                    const iRand = Math.floor(Math.random() * 2);
                    if(iRand === 0){
                        //app installed
                        iResolve({'mode': 'side_panel', 'campaignId':'campID1234'});
                    }else{
                        //user cancels the installation
                        iReject(new DOMException('AbortError'));
                    }
                })
            ); // resolve prompt
        }else{
            //prompt is not (can't be) shown
            reject(new DOMException('UnsupportedError'));
        }
    });
}; 

//promise .tehn .catch
//install().then((value)=>console.log(value)).catch((err)=>{console.log(err)});

//async await
const installApp = async () => {
    try{
        const value = await install();
        console.log('site installed');
        return value;
    }
    catch(err){console.error(err.message)}
};


/*
// Tries to install the current web site
const installApp = async () => {
    if('install' in navigator) {
        try{
            //this will resolve if prompt is shown
            const installPrompt = await navigator.install();

            //this will resolve if app is installed
            const appInstalled = await installPrompt.installed();

            console.log('App installed!');
        }
        catch(err){
            console.error(err);
        }
    }
};

// Tries to install the current web site in the side bar of the browser
const installAppInSidebar = async () => {
    if ('install' in navigator) {
        try{
            const installPrompt = await navigator.install({'mode':'side_panel'});
            const appInstalled = await installPrompt.installed();
            console.log(`App installed with mode: ${appInstalled.mode}`);
        }
        catch(err) {
            switch(err.name) {
                case 'NotAllowedError':
                    // No installation-origin permissions
                    break;
                case 'NotSupportedError':
                    // The web site is NOT installable
                    break;
                case 'AbortError':
                    // User cancelled the installation
                    break;
            }
        }
    }
};

*/