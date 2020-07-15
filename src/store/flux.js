const getState = ({ getStore, setStore, getActions }) => {
    return {
        store: {
            headerTitle: 'Dashboard',
            messageList: [],
            userLogged: {
                name: ''
            }
        },

        actions: {
            setHeaderTitle: (title) => {
                setStore({ headerTitle: title })
            },
            setMessageList: (list) => {
                setStore({ messageList: list })
            },
            setUserLogged: (user) => {
                setStore({ userLogged: user })
            },

        }
    }
}
export default getState;