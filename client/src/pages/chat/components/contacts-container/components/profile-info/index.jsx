import { Avatar, AvatarImage } from "@/components/ui/Avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { getColor } from "@/lib/utils";
import { useAppStore } from "@/store";
import { HOST } from "@/utils/constants";
import { FiEdit2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ProfileInfo = () => {
  const { userInfo } = useAppStore();
  const navigate = useNavigate();

  return (
    <div className="absolute bottom-0 left-0 right-0 h-16 flex items-center justify-between px-10 bg-[#2a2b33] border-t border-[#3a3b43]">
      <div className="flex gap-3 items-center">
        <div className="w-12 h-12 relative">
          <Avatar className="h-12 w-12 rounded-full overflow-hidden">
            {userInfo.image ? (
              <AvatarImage
                src={`${HOST}/${userInfo.image}`}
                alt="profile"
                className="object-cover w-full h-full bg-black"
              />
            ) : (
              <div
                className={`uppercase h-12 w-12 text-lg border-[1px] flex items-center justify-center rounded-full ${getColor(
                  userInfo.color
                )}`}
              >
                {userInfo.firstName
                  ? userInfo.firstName.split("").shift()
                  : userInfo.email.split("").shift()}
              </div>
            )}
          </Avatar>
        </div>
        <div className="text-white">
          {userInfo.firstName && userInfo.lastName
            ? `${userInfo.firstName} ${userInfo.lastName}`
            : ""}
        </div>
      </div>
      <div className="flex gap-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <FiEdit2
                className="text-purple-500 text-xl font-medium cursor-pointer"
                onClick={() => navigate("/profile")}
              />
            </TooltipTrigger>
            <TooltipContent className="bg-[#1c1b1e] border-none text-white">
              <p>Edit Profile</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default ProfileInfo;