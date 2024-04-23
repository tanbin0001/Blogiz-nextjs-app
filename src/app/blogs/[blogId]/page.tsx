
import BlogDetails from "@/components/ui/BlogDetails";
import { Blog } from "@/types";


interface BlogId {
 
    params: {
        blogId:string
    }
}



export const generateStaticParams = async () => {
    const res = await fetch(`http://localhost:5000/blogs`);
    const blogs = await res.json();
    return blogs.slice(0,3).map((blog: Blog) => {
        blogId:blog.id
    })
}
const BlogDetailsPage =  async({params}: BlogId) => {

    console.log(params);
    const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`);
      const blog = await res.json();
      console.log(blog);
    return (
        <div>
           <BlogDetails key={blog.id} blog={blog}/>
        </div>
    );
};

export default BlogDetailsPage;