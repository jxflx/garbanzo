interface CardProps {
  body: string;
}

function Card(props: CardProps) {
  const { body } = props;
  return (
    <div className="max-w-fit p-5 border rounded-md flex-col justify-center flex m-9">
      <CardBody title={"pene"} text={"isisisisdsdfjkdsh fdsjkf hdskjhf"} />
    </div>
  );
}

interface CardBodyProps {
  title: string;
  text: string;
}
export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <>
      <h1 className="text-lg font-bold mb-7">{title}</h1>
      <p>{text}</p>
    </>
  );
}

export default Card;
