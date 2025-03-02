// UserContext.tsx

import React, { createContext, useContext, useState, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface User {
  account: {
    id: string;
    email: string;
    emailVerified: boolean;
    phone: string;
    phoneVerified: boolean;
  };
  profile: {
    role: string;
    firstName: string;
    lastName: string;
    gender: string;
    birthday: string;
    profileImage: string;
    school: string;
    studentType: string;
    degree: string;
    graduation: string;
  };
  bio: {
    aboutMe: string;
    funFact: string;
  };
}

interface UserContextType {
  user: User;
  updateUser: (updates: Partial<User>) => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>({} as User);

  const updateUser = async (newUser: Partial<User>): Promise<void> => {
    return new Promise((resolve, reject) => {
      // Fetch the current user first (you can get this from state or AsyncStorage)
      AsyncStorage.getItem("user")
        .then((storedUser) => {
          let currentUser: User = {} as User;

          if (!storedUser) {
            // If there's no user in AsyncStorage, use newUser as the full user
            currentUser = newUser as User;
          } else {
            // Otherwise merge with existing user
            currentUser = { ...JSON.parse(storedUser), ...newUser };
          }

          // Set the updated user in AsyncStorage
          AsyncStorage.setItem("user", JSON.stringify(currentUser), (error) => {
            if (error) {
              reject("Error saving user: " + error);
            } else {
              setUser(currentUser); // Update the user state inside the promise
              resolve(); // Resolve once the state is updated
            }
          });
        })
        .catch((error) => {
          reject("Error fetching user from AsyncStorage: " + error);
        });
    });
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
