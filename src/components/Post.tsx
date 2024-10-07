interface Props {
  title: string;
  content: string;
}

function Post({ title, content }: Props) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
}

export default Post;
