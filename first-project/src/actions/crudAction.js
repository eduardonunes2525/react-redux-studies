import axios from "axios";

export const createOrUpdateAction = (data = {}, method = "post", url = "", message = "") => {
    return async (dispatch) => {
        try {
            const response = await axios[method](url, data);
            dispatch(successAction(method, message));
            console.log(response)
            // TODO
            // Create action to update list without make a get in api
        }
        catch (error) {
            throw (error);
        }
    }
};

export const successAction = (method, message, utters = []) => {
    let action = {}
    
    if (method === "get") {
        action = {
            type: "GET_UTTERS",
            utters: utters
        }
    }
    else {
        action = {
            type: "SUCESS_ACTION_UTTER",
            text: message,
        }
    }
    
    return action;
};


export const getOrRemoveAction = (method = "get", url = "", message = "") => {
    return async (dispatch) => {
        try {
            const response = await axios[method](url);
            dispatch(successAction(method, message, response.data));
        }
        catch (error) {
            throw (error);
        }
    }
};