"use client";

import addFavorite, { removeFavorite } from "@/db/action";
import { useAuth } from "@/hooks/useAuth";
import useOptimistic from "@/hooks/useOptimistic";

import { useRouter } from "next/navigation";

const Favourite = ({ id }) => {
  
  const { auth, setAuth } = useAuth();
  const router = useRouter();

  const [isfavOptimistic, setIsfavOptimistic] = useOptimistic(auth?.favourites.includes(id));


 

  const handlefav = async (userId) => {
    console.log("click")
    if (!auth) {
      localStorage.setItem("id", id);
      router.push("/login");
      return;
    }

    setIsfavOptimistic(!isfavOptimistic);
    

    try {
      if (isfavOptimistic) {
        const result = await removeFavorite(userId, id);
      
        setAuth(result);
      } else {
        const result = await addFavorite(userId, id);
      
        setAuth(result);
      }
    } catch (error) {
      console.log("Error occurred:", error);
      setIsfavOptimistic(auth?.favourites.includes(id));
    }
  };

  return (
    <div
      onClick={() => handlefav(auth?._id)}
      className={`flex gap-2  ${
        isfavOptimistic ? "text-red-600" : "text-gray-600"
      }  cursor-pointer hover:text-[#eb4a36]`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={`${isfavOptimistic ? "#eb4a36" : "none"}`}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      </svg>
      <span>Favourite</span>
    </div>
  );
};

export default Favourite;
