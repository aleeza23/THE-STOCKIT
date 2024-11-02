import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogData } from '@/Data/BlogsData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
    return blogData.map(post => ({
        id: post.id.toString(),
    }));
}

const BlogPost = ({ params }) => {
    const { id } = params;
    const post = blogData.find(blog => blog.id === parseInt(id));

    if (!post) {
        notFound();
    }

    return (
        <>
            <div className="pt-10">
                <Header />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 my-10 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    {/* Blog post header */}
                    <div className="py-8">
                        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
                        <p className="text-gray-500 text-sm">
                            Published on <time dateTime={post.date}>{post.date}</time>
                        </p>
                    </div>

                    {/* Featured image */}
                    <Image src={post.imageUrl} alt="Featured image" className="w-full h-auto mb-8" width={800} height={400} />

                    {/* Blog post content */}
                    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
                        {post.sections && post.sections.map((section, index) => {
                             if (section.type === 'heading') {
                                return <h2 key={index} className="text-2xl font-bold mb-4">{section.content}</h2>;
                            }
                            if (section.type === 'paragraph') {
                                return <p key={index}>{section.content}</p>;
                            }                           
                            if (section.type === 'image') {
                                return <Image key={index} src={section.content} alt="Blog Image" width={800} height={400} className="mb-6" />;
                            }
                            return null;
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BlogPost;