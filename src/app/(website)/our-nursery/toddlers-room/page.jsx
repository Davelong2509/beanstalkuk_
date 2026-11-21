import RoomDetailPage from "@/components/sections/RoomDetailPage";
import { roomDetails } from "@/content/room-details";

export const metadata = {
  title: "The Toddlers Room",
  description:
    "Busy, curious days of movement, first words and new friends at Beanstalk Day Nursery."
};

export default function ToddlersRoomPage() {
  return <RoomDetailPage room={roomDetails["toddlers-room"]} />;
}
