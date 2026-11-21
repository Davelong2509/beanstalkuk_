import RoomDetailPage from "@/components/sections/RoomDetailPage";
import { roomDetails } from "@/content/room-details";

export const metadata = {
  title: "The Preschool Room",
  description:
    "Confident, independent learners getting ready for school at Beanstalk Day Nursery."
};

export default function PreschoolRoomPage() {
  return <RoomDetailPage room={roomDetails["preschool-room"]} />;
}
