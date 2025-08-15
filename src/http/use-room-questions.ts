import { useQuery } from "@tanstack/react-query";
import type { GetRoomQuestionResponde } from "./types/get-room-questions-response";

export function useRoomQuestions(roomId: string) {
  return useQuery({
    queryKey: ["get-questions", roomId],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`
      );
      const result: GetRoomQuestionResponde = await response.json();

      return result;
    },
  });
}
