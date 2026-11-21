import RoomDetailPage from "@/components/sections/RoomDetailPage";
import { roomDetails } from "@/content/room-details";

export const metadata = {
  title: "The Babies Room",
  description:
    "A calm, caring start at Beanstalk Day Nursery, with close attention to each baby's own rhythm."
};

export default function BabiesRoomPage() {
  return <RoomDetailPage room={roomDetails["babies-room"]} />;
}
