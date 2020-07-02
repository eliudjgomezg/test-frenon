const getState = ({ getStore, setStore, getActions }) => {
    return {
        store: {
            hideSuspendSon: false,
            getData: [],
            getOneData: {},
            getOptionalData: [],
            getByParams: [],
            getByParamsOptional: [],
            postData: [],
            loginUserData: {
                user: {
                    name: '',
                    rol: '',
                    idNumber: '',
                    email: '',
                    phone: '',
                    disabled: false,
                    classroom: {
                        _id: '',
                    }
                },
                family: {
                    familyName: ''
                },
                mainParent: {
                    name: '',
                    idNumber: '',
                    email: '',
                    phone: ''
                },
                token: '',
                isPasswordChanged: true,
                status: false
            },
            putData: [],
            newsLength: '',
            newsPages: '',
            isLoading: false, 
            helloView:'Hello World'
        },

        actions: {
            //Classroom calls api
            getAll: async (collection) => {
                const store = getStore();

                setStore({ isLoading: true, getData: [] })
                await fetch('/api/v1/' + collection, {
                    headers: {
                        'Content-Type': 'application/json',
                        "access-token": store.loginUserData.token
                    }
                })
                    .then(resp => { return resp.json() })
                    .then(data => {
                        if (data.status === 'token error') {
                            setStore({
                                getData: [],
                                loginUserData: {
                                    user: {
                                        name: '',
                                        rol: '',
                                        idNumber: '',
                                        email: '',
                                        phone: '',
                                        disabled: false,
                                        classroom: {
                                            _id: '',
                                        }
                                    },
                                    family: {
                                        familyName: ''
                                    },
                                    mainParent: {
                                        name: '',
                                        idNumber: '',
                                        email: '',
                                        phone: ''
                                    },
                                    token: '',
                                    isPasswordChanged: true,
                                    status: 'token error',
                                },
                                isLoading: false
                            })
                        } else {
                            setStore({ getData: data, isLoading: false })
                        }
                    })
            },

            getAllOptional: async (collection) => {
                const store = getStore();
                setStore({ isLoading: true, getOptionalData: [] })
                await fetch('/api/v1/' + collection, {
                    headers: {
                        'Content-Type': 'application/json',
                        "access-token": store.loginUserData.token
                    }
                })
                    .then(resp => { return resp.json() })
                    .then(data => {
                        if (data.status === 'token error') {
                            setStore({
                                getOptionalData: [],
                                loginUserData: {
                                    user: {
                                        name: '',
                                        rol: '',
                                        idNumber: '',
                                        email: '',
                                        phone: '',
                                        disabled: false,
                                        classroom: {
                                            _id: '',
                                        }
                                    },
                                    family: {
                                        familyName: ''
                                    },
                                    mainParent: {
                                        name: '',
                                        idNumber: '',
                                        email: '',
                                        phone: ''
                                    },
                                    token: '',
                                    isPasswordChanged: true,
                                    status: 'token error',
                                },
                                isLoading: false
                            })
                        } else {
                            setStore({ getOptionalData: data, isLoading: false })
                        }
                    })
            },

            getByParams: async (collection, params) => {
                const store = getStore();
                setStore({ isLoading: true, getByParams: [] })
                await fetch('/api/v1/' + collection + '/' + params, {
                    headers: {
                        'Content-Type': 'application/json',
                        "access-token": store.loginUserData.token
                    }
                })
                    .then(resp => { return resp.json() })
                    .then(data => {
                        if (data.status === 'token error') {
                            setStore({
                                getByParams: [],
                                loginUserData: {
                                    user: {
                                        name: '',
                                        rol: '',
                                        idNumber: '',
                                        email: '',
                                        phone: '',
                                        disabled: false,
                                        classroom: {
                                            _id: '',
                                        }
                                    },
                                    family: {
                                        familyName: ''
                                    },
                                    mainParent: {
                                        name: '',
                                        idNumber: '',
                                        email: '',
                                        phone: ''
                                    },
                                    token: '',
                                    isPasswordChanged: true,
                                    status: 'token error',
                                },
                                isLoading: false
                            })
                        } else {
                            setStore({ getByParams: data, isLoading: false })
                        }
                    })
            },

            getByParamsOptional: async (collection, params) => {
                const store = getStore();
                setStore({ isLoading: true, getByParamsOptional: [] })
                await fetch('/api/v1/' + collection + '/' + params, {
                    headers: {
                        'Content-Type': 'application/json',
                        "access-token": store.loginUserData.token
                    }
                })
                    .then(resp => { return resp.json() })
                    .then(data => {
                        if (data.status === 'token error') {
                            setStore({
                                getByParamsOptional: [],
                                loginUserData: {
                                    user: {
                                        name: '',
                                        rol: '',
                                        idNumber: '',
                                        email: '',
                                        phone: '',
                                        disabled: false,
                                        classroom: {
                                            _id: '',
                                        }
                                    },
                                    family: {
                                        familyName: ''
                                    },
                                    mainParent: {
                                        name: '',
                                        idNumber: '',
                                        email: '',
                                        phone: ''
                                    },
                                    token: '',
                                    isPasswordChanged: true,
                                    status: 'token error',
                                },
                                isLoading: false
                            })
                        } else {
                            setStore({ getByParamsOptional: data, isLoading: false })
                        }
                    })
            },

            getClassroonList: async (collection) => {
                const store = getStore();
                await fetch('/api/v1/' + collection, {
                    headers: {
                        'Content-Type': 'application/json',
                        "access-token": store.loginUserData.token
                    }
                })
                    .then(resp => { return resp.json() })
                    .then(data => {
                        if (data.status === 'token error') {
                            setStore({
                                getOptionalData: [],
                                loginUserData: {
                                    user: {
                                        name: '',
                                        rol: '',
                                        idNumber: '',
                                        email: '',
                                        phone: '',
                                        disabled: false,
                                        classroom: {
                                            _id: '',
                                        }
                                    },
                                    family: {
                                        familyName: ''
                                    },
                                    mainParent: {
                                        name: '',
                                        idNumber: '',
                                        email: '',
                                        phone: ''
                                    },
                                    token: '',
                                    isPasswordChanged: true,
                                    status: 'token error',
                                },
                                isLoading: false
                            })
                        } else {
                            setStore({ getOptionalData: data })
                        }
                    })
            },

            getNewsPaginated: async (item, rol) => {
                const store = getStore();
                setStore({ isLoading: true })
                await fetch('/api/v1/new/' + item + '/' + rol, {
                    headers: {
                        'Content-Type': 'application/json',
                        "access-token": store.loginUserData.token
                    }
                })
                    .then(resp => { return resp.json() })
                    .then(data => {
                        if (data.status === 'token error') {
                            setStore({
                                getData: [],
                                newsLength: 0,
                                newsPages: 0,
                                loginUserData: {
                                    user: {
                                        name: '',
                                        rol: '',
                                        idNumber: '',
                                        email: '',
                                        phone: '',
                                        disabled: false,
                                        classroom: {
                                            _id: '',
                                        }
                                    },
                                    family: {
                                        familyName: ''
                                    },
                                    mainParent: {
                                        name: '',
                                        idNumber: '',
                                        email: '',
                                        phone: ''
                                    },
                                    token: '',
                                    isPasswordChanged: true,
                                    status: 'token error',
                                },
                                isLoading: false
                            })
                        } else {
                            setStore({ getData: data.news, newsLength: data.length, newsPages: data.pages, isLoading: false })
                        }
                    })
            },

            postToLogin: async (postData, collection) => {
                const store = getStore();
                setStore({ isLoading: true, postData: [] })
                await fetch('/api/v1/' + collection, {
                    method: "POST",
                    body: JSON.stringify(postData),
                    headers: {
                        'Content-Type': 'application/json',
                        'public-request': 'ok'
                    }
                })
                    .then(resp => { return resp.json() })
                    .then(data => {
                        switch (data.historyPath) {
                            case '/classroom':
                                localStorage.setItem("admin", JSON.stringify(data));
                                setStore({ loginUserData: JSON.parse(localStorage.getItem("admin")), isLoading: false })
                                break
                            case '/class':
                                localStorage.setItem("teacher", JSON.stringify(data));
                                setStore({ loginUserData: JSON.parse(localStorage.getItem("teacher")), isLoading: false })
                                break
                            case '/family':
                                localStorage.setItem("family", JSON.stringify(data));
                                setStore({ loginUserData: JSON.parse(localStorage.getItem("family")), isLoading: false })
                                break
                            default:
                                localStorage.setItem("checkin", JSON.stringify(data));
                                setStore({ loginUserData: JSON.parse(localStorage.getItem("checkin")), isLoading: false })
                        }

                    })
            },

            publicPost: async (postData, collection) => {
                const store = getStore();
                setStore({ isLoading: true, postData: [] })
                await fetch('/api/v1/' + collection, {
                    method: "POST",
                    body: JSON.stringify(postData),
                    headers: {
                        'Content-Type': 'application/json',
                        'public-request': 'ok'
                    }
                })
                    .then(resp => { return resp.json() })
                    .then(data => { setStore({ postData: data, isLoading: false }) })
            },

            postAll: async (postData, collection) => {
                const store = getStore();
                setStore({ isLoading: true, postData: [] })
                await fetch('/api/v1/' + collection, {
                    method: "POST",
                    body: JSON.stringify(postData),
                    headers: {
                        'Content-Type': 'application/json',
                        "access-token": store.loginUserData.token
                    }
                })
                    .then(resp => { return resp.json() })
                    .then(data => {
                        if (data.status === 'token error') {
                            setStore({
                                postData: [],
                                loginUserData: {
                                    user: {
                                        name: '',
                                        rol: '',
                                        idNumber: '',
                                        email: '',
                                        phone: '',
                                        disabled: false,
                                        classroom: {
                                            _id: '',
                                        }
                                    },
                                    family: {
                                        familyName: ''
                                    },
                                    mainParent: {
                                        name: '',
                                        idNumber: '',
                                        email: '',
                                        phone: ''
                                    },
                                    token: '',
                                    isPasswordChanged: true,
                                    status: 'token error',
                                },
                                isLoading: false
                            })
                        } else {
                            setStore({ postData: data, isLoading: false })
                        }
                    })
            },

            putAll: async (putData, collection, id) => {
                const store = getStore();
                setStore({ isLoading: true, putData: [] })
                await fetch("/api/v1/" + collection + '/' + id, {
                    method: "PUT",
                    body: JSON.stringify(putData),
                    headers: {
                        'Content-Type': 'application/json',
                        "access-token": store.loginUserData.token
                    }
                })
                    .then(resp => { return resp.json(); })
                    .then(data => {
                        if (data.status === 'token error') {
                            setStore({
                                putData: [],
                                loginUserData: {
                                    user: {
                                        name: '',
                                        rol: '',
                                        idNumber: '',
                                        email: '',
                                        phone: '',
                                        disabled: false,
                                        classroom: {
                                            _id: '',
                                        }
                                    },
                                    family: {
                                        familyName: ''
                                    },
                                    mainParent: {
                                        name: '',
                                        idNumber: '',
                                        email: '',
                                        phone: ''
                                    },
                                    token: '',
                                    isPasswordChanged: true,
                                    status: 'token error',
                                },
                                isLoading: false
                            })
                        } else {
                            setStore({ putData: data, isLoading: false })
                        }
                    })
            },

            putAssistance: async (putData, collection, id) => {
                const store = getStore();
                await fetch("/api/v1/" + collection + '/' + id, {
                    method: "PUT",
                    body: JSON.stringify(putData),
                    headers: {
                        'Content-Type': 'application/json',
                        "access-token": store.loginUserData.token
                    }
                })
                    .then(resp => { return resp.json(); })
                    .then(data => {
                        if (data.status === 'token error') {
                            setStore({
                                putData: [],
                                loginUserData: {
                                    user: {
                                        name: '',
                                        rol: '',
                                        idNumber: '',
                                        email: '',
                                        phone: '',
                                        disabled: false,
                                        classroom: {
                                            _id: '',
                                        }
                                    },
                                    family: {
                                        familyName: ''
                                    },
                                    mainParent: {
                                        name: '',
                                        idNumber: '',
                                        email: '',
                                        phone: ''
                                    },
                                    token: '',
                                    isPasswordChanged: true,
                                    status: 'token error',
                                },
                                isLoading: false
                            })
                        }
                    })
            },

            deleteAll: async (collection, id) => {
                const store = getStore();
                setStore({ isLoading: true })
                await fetch("/api/v1/" + collection + '/' + id, {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json',
                        "access-token": store.loginUserData.token
                    }
                })
                    .then(resp => { return resp.json(); })
                    .then(data => {
                        if (data.status === 'token error') {
                            setStore({
                                putData: [],
                                loginUserData: {
                                    user: {
                                        name: '',
                                        rol: '',
                                        idNumber: '',
                                        email: '',
                                        phone: '',
                                        disabled: false,
                                        classroom: {
                                            _id: '',
                                        }
                                    },
                                    family: {
                                        familyName: ''
                                    },
                                    mainParent: {
                                        name: '',
                                        idNumber: '',
                                        email: '',
                                        phone: ''
                                    },
                                    token: '',
                                    isPasswordChanged: true,
                                    status: 'token error',
                                },
                                isLoading: false
                            })
                        } else {
                            setStore({ isLoading: false })
                        }
                    })
            },

            deleteAllAssistance: async (collection) => {
                const store = getStore();
                setStore({ isLoading: true })
                await fetch("/api/v1/" + collection, {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json',
                        "access-token": store.loginUserData.token
                    }
                })
                    .then(resp => { return resp.json(); })
                    .then(data => {
                        if (data.status === 'token error') {
                            setStore({
                                putData: [],
                                loginUserData: {
                                    user: {
                                        name: '',
                                        rol: '',
                                        idNumber: '',
                                        email: '',
                                        phone: '',
                                        disabled: false,
                                        classroom: {
                                            _id: '',
                                        }
                                    },
                                    family: {
                                        familyName: ''
                                    },
                                    mainParent: {
                                        name: '',
                                        idNumber: '',
                                        email: '',
                                        phone: ''
                                    },
                                    token: '',
                                    isPasswordChanged: true,
                                    status: 'token error',
                                },
                                isLoading: false
                            })
                        } else {
                            setStore({ isLoading: false })
                        }
                    })
            },

            deleteAssistance: async (collection, sonId, classroomId) => {
                const store = getStore();
                setStore({ isLoading: true })
                await fetch("/api/v1/" + collection + '/' + sonId + '/' + classroomId, {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json',
                        "access-token": store.loginUserData.token
                    }
                })
                    .then(resp => { return resp.json(); })
                    .then(data => {
                        if (data.status === 'token error') {
                            setStore({
                                putData: [],
                                loginUserData: {
                                    user: {
                                        name: '',
                                        rol: '',
                                        idNumber: '',
                                        email: '',
                                        phone: '',
                                        disabled: false,
                                        classroom: {
                                            _id: '',
                                        }
                                    },
                                    family: {
                                        familyName: ''
                                    },
                                    mainParent: {
                                        name: '',
                                        idNumber: '',
                                        email: '',
                                        phone: ''
                                    },
                                    token: '',
                                    isPasswordChanged: true,
                                    status: 'token error',
                                },
                                isLoading: false
                            })
                        } else {
                            setStore({ isLoading: false })
                        }
                    })
            },

            setEditedFamily: () => {
                const store = getStore();
                const loginUserData = {
                    family: store.putData,
                    mainParent: store.loginUserData.mainParent,
                    historyPath: '/family',
                    familyId: store.loginUserData.familyId,
                    user: store.loginUserData.user,
                    token: store.loginUserData.token,
                    message: store.loginUserData.message
                }
                setStore({ loginUserData })
            },
            setEditedMainParent: () => {
                const store = getStore();
                const loginUserData = {
                    family: store.loginUserData.family,
                    mainParent: store.putData,
                    historyPath: '/family',
                    familyId: store.loginUserData.familyId,
                    user: store.loginUserData.user,
                    token: store.loginUserData.token,
                    message: store.loginUserData.message
                }
                setStore({ loginUserData })
                localStorage.setItem("family", JSON.stringify(store.loginUserData));
            },
            setEditedUser: () => {
                const store = getStore();
                const loginUserData = {
                    user: store.putData,
                    historyPath: store.loginUserData.historyPath,
                    userId: store.loginUserData.userId,
                    isPasswordChanged: store.loginUserData.isPasswordChanged,
                    token: store.loginUserData.token,
                }
                setStore({ loginUserData })
                switch (loginUserData.historyPath) {
                    case '/classroom':
                        localStorage.setItem("admin", JSON.stringify(store.loginUserData));
                        break
                    case '/class':
                        localStorage.setItem("teacher", JSON.stringify(store.loginUserData));
                        break
                    case '/family':
                        localStorage.setItem("family", JSON.stringify(store.loginUserData));
                        break
                    default:
                        localStorage.setItem("checkin", JSON.stringify(store.loginUserData));
                }
            },

            clearGetByParams: () => {
                setStore({ getByParams: [] })
            },

            checkFullClassroom: (i) => {
                const store = getStore();
                const getByParams = store.getByParams
                getByParams[i].fullClassroom = true
                setStore({ getByParams })
            },

            uncheckFullClassroom: (i, son) => {
                const store = getStore();
                const getByParams = store.getByParams
                getByParams.filter(item => item.classroom.classroomName === son.classroom.classroomName)
                    .map(item => Object.assign(item, { fullClassroom: false }))
                setStore({ getByParams })
            },

            sonAlreadyExist: (i) => {
                const store = getStore();
                const getByParams = store.getByParams
                getByParams[i].sonAlreadyExist = true
                setStore({ getByParams })
            },

            setLocalstorage: (user) => {
                setStore({ loginUserData: user })
            },

            clearStore: () => {
                const store = getStore();
                switch (store.loginUserData.historyPath) {
                    case '/classroom':
                        localStorage.removeItem("admin");
                        break
                    case '/class':
                        localStorage.removeItem("teacher");
                        break
                    case '/family':
                        localStorage.removeItem("family");
                        break
                    default:
                        localStorage.removeItem("checkin");
                }
                setStore({
                    loginUserData: {
                        user: {
                            name: '',
                            rol: '',
                            idNumber: '',
                            email: '',
                            phone: '',
                            disable: false,
                            classroom: {
                                _id: '',
                            }
                        },
                        family: {
                            familyName: ''
                        },
                        mainParent: {
                            name: '',
                            idNumber: '',
                            email: '',
                            phone: ''
                        },
                        token: '',
                        isPasswordChanged: true,
                        status: false
                    },
                    putData: [],
                    newsLength: '',
                    newsPages: '',
                    isLoading: false
                })
            }
        }
    }
}
export default getState;