function requestapi(url, resolved, reject) {

    // send api call to get image from XmlHttpRquestObject 
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'blob';

    // When the request loads, check whether it was successful
    request.onload = function () {

        if (request.status === 200) {

            // If successful, resolve the promise by passing back the request response
            resolved(request.response);
        } else {

            // If it fails, reject the promise with a error message
            reject(Error('Image didn\'t load successfully; error code:' + request.statusText));
        }
    };

    request.onerror = function () {
        // Also deal with the case when the entire request fails to begin with
        // This is probably a network error, so reject the promise with an appropriate message
        reject(Error('There was a network error.'));
    };

    // Send the request
    request.send();
};



        
function imagelink(imageurl) {
    console.log(`sending image to api ${imageurl}`);
    let myPromise = new Promise((resolved, reject) => {
        requestapi(imageurl, resolved, reject);
    });
    return myPromise;
}

function addimagebody(image) {
    let body = document.querySelector('body');
    let myimg = document.createElement('img');

    let myimgurl =URL.createObjectURL(image);
    myimg.src=myimgurl;
    myimg.width=300;
    myimg.height=200;

    body.append(myimg);
}



imagelink(`https://mdn.github.io/js-examples/promises-test/myLittleVader.jpg`)

    .then((sucess) => {
        addimagebody(sucess);
    },
        (error) => {

    });