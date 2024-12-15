interface CardProps {
  top: string;
  bottom: string;
}

function Card(props: CardProps) {
  const { top, bottom } = props;
  return (
    <div className="max-w-fit p-5 border rounded-md flex-col justify-center flex m-9">
      <CardWithText title={top} text={bottom} />
    </div>
  );
}

interface CardTextProps {
  title: string;
  text: string;
}
export function CardWithText(props: CardTextProps) {
  const { title, text } = props;
  return (
    <>
      <h1 className="text-lg font-bold mb-7">{title}</h1>
      <p>{text}</p>
    </>
  );
}

export default Card;
