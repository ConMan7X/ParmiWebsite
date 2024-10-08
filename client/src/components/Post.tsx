interface Props {
  title: string;
  author: string;
  content: string;
  createdAt: Date;
}

function Post({ title, author, content, createdAt }: Props) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
}

export default Post;
