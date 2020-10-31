export default function QueensImg({ id }) {
  return (
    <img
      src={`http://www.nokeynoshade.party/api/queens${id}`}
      alt="Queen"
      className="queen__image"
    />
  );
}
