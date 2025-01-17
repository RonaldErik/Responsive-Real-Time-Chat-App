import { useAppStore } from "@/store";
import React from "react";

const Profile = () => {
    const { userInfo } = useAppStore();
    
    return (
        <>
            <div>Profile
                <div>Email: {userInfo.email}</div>
                <div>ID: {userInfo.id}</div>
            </div>
        </>
    )
}

export default Profile;