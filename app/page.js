'use client'
import { createClient } from "@/utils/supabase/client";
import { useState, useEffect } from "react";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const supabase = createClient();
    const fetchUserDetails = async () => {
      try {
        const { data, error } = await supabase.auth.getUser();
        if (error) throw error;
        setUser(data.user);
      } catch (error) {
        console.error('Error fetching user details:', error.message);
      }
    };
    fetchUserDetails();
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {user ? (
        <>
          <p>Name: {user.user_metadata.full_name}</p>
          <p>Email: {user.email}</p>
          {/* Add more user details as needed */}
        </>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
}
