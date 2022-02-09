import { collection, getDocs, query } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase";

const MembersContext = createContext([]);

export const MembersContextProvider = ({ children }) => {
  const [members, setMembers] = useState();

  useEffect(() => {
    getMembers();
  }, []);

  const getMembers = async () => {
    const q = query(collection(db, "users"));
    const querySnapshot = await getDocs(q);

    let users = [];

    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });

    setMembers(users);
  };

  return (
    <MembersContext.Provider value={{ members }}>
      {children}
    </MembersContext.Provider>
  );
};

export const useMembers = () => useContext(MembersContext);
