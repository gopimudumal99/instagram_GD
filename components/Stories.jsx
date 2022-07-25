import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { createRandomUser } from "../utils/FakerData";
import Story from "./Story";

const USERS = [];

function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    [...Array(20)].map(() => {
      USERS.push(createRandomUser());
    });
    setSuggestions(USERS);
  }, []);

  return (
    <div
      className="flex space-x-2 p-6 mt-4 bg-white border-gray-20
     border rounded-sm overflow-x-scroll  
     scrollbar-thin scrollbar-thumb-black 
     "
    >
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}
      {suggestions.map((profile) => {
        return (
          <Story
            key={profile.userId}
            img={profile.avatar}
            username={profile.username}
          />
        );
      })}
    </div>
  );
}

export default Stories;
