import { useEffect } from 'react';
import { useChatStore } from '../store/useChatStore';
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";

const Sidebar = () => {
    const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore()

    useEffect(
        () => {

        },
        [getUsers]
    )
    if (isUsersLoading) return <SidebarSkeleton />
    return (
        
    )
}

export default Sidebar