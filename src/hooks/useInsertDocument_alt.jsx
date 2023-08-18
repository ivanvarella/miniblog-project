import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

//Reducer object
const initialState = {
  loading: null,
  error: null,
};

//Reducer function
const insertReducer = (state, action) => {
  console.log("Action: ", action);
  console.log("State: ", state);
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "INSERTED_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//Custom hook
export const useInsertDocument = (docColletion) => {
  const [response, dispatch] = useReducer(insertReducer, initialState);

  //Deal with memory leak
  // const [cancelled, setCancelled] = useState(false);

  // const checkCancelBeforeDispatch = (action) => {
  //   console.log("Canceled: ", cancelled);
  //   console.log("Action: ", action);
  //   if (!cancelled) {
  //     dispatch(action);
  //   }
  // };

  const insertDocument = async (document) => {
    dispatch({ type: "LOADING" });

    try {
      const newDocument = { ...document, createdAt: Timestamp.now() };

      const insertedDocument = await addDoc(
        collection(db, docColletion),
        newDocument
      );

      dispatch({
        type: "INSERTED_DOC",
        payload: insertedDocument,
      });
      return true;
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error.message,
      });
      return false;
    }
  };

  // useEffect(() => {
  //   return () => {
  //     console.log("Cleanup");
  //     setCancelled(true);
  //   };
  // }, []);
  console.log("Response: ", response);
  return { insertDocument, response };
};
