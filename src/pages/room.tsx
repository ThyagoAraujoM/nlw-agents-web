import { Navigate, useParams } from 'react-router-dom';

type Params = {
  roomId: string;
};

export function Room() {
  const params = useParams<Params>();

  if (!params.roomId) {
    return <Navigate replace to="/" />;
  }
  return (
    <div>
      <h3>Room details</h3>
      <p>{params.roomId}</p>
    </div>
  );
}
