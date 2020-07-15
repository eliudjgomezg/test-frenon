
export const getReportsFakeApi = async () => {
    let resp = ''
    const body = {
        "token": "psKMxYfTQ5O4AtnTL0BgYQ",
        "data": {
            "id": "numberInt",
            "name": "name",
            "company": "companyName",
            "reportContent": "stringLong",
            "departament": "companyDepartment",
            "_repeat": 3
        }
    }
    await fetch('https://app.fakejson.com/q', {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(resp => { return resp.json() })
        .then(data => { return resp = data })
    return resp
}

export const getNotificationsFakeApi = async () => {
    let resp = ''
    const body = {
        "token": "psKMxYfTQ5O4AtnTL0BgYQ",
        "data": {
            "id": "numberInt",
            "name": "name",
            "date": "date",
            "message": "stringShort",
            "_repeat": 10
        }
    }
    await fetch('https://app.fakejson.com/q', {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(resp => { return resp.json() })
        .then(data => { return resp = data })
    return resp
}

export const getHotelFakeApi = async () => {
    let resp = ''
    const body = {
        "token": "psKMxYfTQ5O4AtnTL0BgYQ",
        "data": {
            "id": "numberInt",
            "email": "internetEmail",
            "hotelName": "companyName",
            "phone": "phoneHome",
            "address": "addressFullStreet",
            "_repeat": 10
        }
    }
    await fetch('https://app.fakejson.com/q', {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(resp => { return resp.json() })
        .then(data => { return resp = data })
    return resp
}

export const getUserFakeApi = async () => {
    let resp = ''
    const body = {
        "token": "psKMxYfTQ5O4AtnTL0BgYQ",
        "data": {
            "id": "numberInt",
            "name": "name",
            "nickname": "personNickname",
            "email": "internetEmail",
            "address": "addressFullStreet",
            "phone": "phoneMobile",
            "job": "companyName",
            "showInfo": false,
            "_repeat": 10
        }
    }
    await fetch('https://app.fakejson.com/q', {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(resp => { return resp.json() })
        .then(data => { return resp = data })
    return resp
}

export const getAll = async (collection) => {
    let resp = ''
    await fetch('/api/v1/' + collection, {
        headers: {
            'Content-Type': 'application/json',
            //"access-token": store.loginUserData.token
        }
    })
        .then(resp => { return resp.json() })
        .then(data => { return resp = data })
    return resp
}

export const getOne = async (collection, id) => {
    let resp = ''
    await fetch("/api/v1/" + collection + '/' + id, {
        headers: {
            'Content-Type': 'application/json',
            //"access-token": store.loginUserData.token
        }
    })
        .then(resp => { return resp.json(); })
        .then(data => { return resp = data })
    return resp
}

export const post = async (postData, collection) => {
    let resp = ''
    await fetch('/api/v1/' + collection, {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json',
            //"access-token": store.loginUserData.token
        }
    })
        .then(resp => { return resp.json() })
        .then(data => { return resp = data })
    return resp
}

export const put = async (putData, collection, id) => {
    let resp = ''
    await fetch("/api/v1/" + collection + '/' + id, {
        method: "PUT",
        body: JSON.stringify(putData),
        headers: {
            'Content-Type': 'application/json',
            //"access-token": store.loginUserData.token
        }
    })
        .then(resp => { return resp.json(); })
        .then(data => { return resp = data })
    return resp
}

export const deleteOne = async (collection, id) => {
    let resp = ''
    await fetch("/api/v1/" + collection + '/' + id, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            //"access-token": store.loginUserData.token
        }
    })
        .then(resp => { return resp.json(); })
        .then(data => { return resp = data })
    return resp
}

export const deleteAll = async (collection) => {
    let resp = ''
    await fetch("/api/v1/" + collection, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            //"access-token": store.loginUserData.token
        }
    })
        .then(resp => { return resp.json(); })
        .then(data => { return resp = data })
    return resp
}