import { useRoomQuestions } from '@/http/use-room-questions';
import { QuestionItem } from './question-item';

type QuestionListProps = {
  roomId: string;
};

interface Question {
  id: string;
  question: string;
  answer?: string | null;
  createdAt: string;
  isGeneratingAnswer?: boolean;
}

export function QuestionList({ roomId }: QuestionListProps) {
  const { data } = useRoomQuestions(roomId);
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl text-foreground">
          Perguntas & Respostas
        </h2>
      </div>
      {data?.map((question: Question) => {
        return <QuestionItem key={question.id} question={question} />;
      })}
    </div>
  );
}
