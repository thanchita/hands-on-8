import { BlogDTO } from "../types/dto";
import classes from "./Blog.module.css";
import Tag from "./Tag";

interface IBlogProps {
  blog: BlogDTO;
}

const Blog = ({ blog }: IBlogProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.metaData}>
        <p className={classes.author}>{blog.author}</p>
        <p className={classes.dateAndTime}>
          {blog.date} • {blog.readingTime}
        </p>
      </div>
      <h2 className={classes.blogHeader}>{blog.header}</h2>
      <p className={classes.description}>{blog.description}</p>
      <div className={classes.tagContainer}>
        {blog.tags.map((tag) => {
          return <Tag key={tag} tag={tag} />;
        })}
      </div>
    </div>
  );
};
export default Blog;
