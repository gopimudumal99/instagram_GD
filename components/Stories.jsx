import React, { useEffect, useState } from "react";
import { createRandomUser } from "../utils/FakerData";
import Story from "./Story"

const USERS = [];

function Stories() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    [...Array(20)].map(() => {
      USERS.push(createRandomUser());
    });
    setSuggestions(USERS)
  }, []);

  return (
    <div className="flex space-x-2 p-6 mt-4 bg-white border-gray-20
     border rounded-sm overflow-x-scroll  
     scrollbar-thin scrollbar-thumb-black 
     ">
        {suggestions.map(profile =>{
            return <Story key={profile.userId} img={profile.avatar} username={profile.username}/>
        })}
      {/* story */}
      {/* story */}
      {/* story */}
      {/* story */}
      {/* story */}
    </div>
  );
}

export default Stories;
