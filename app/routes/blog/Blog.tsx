import PageBanner from '~/components/layout/PageBanner';
import BlogList from '~/components/blog/BlogList';
import Spotlight from '~/components/blog/Spotlight';

function Blog() {
  return <>
    <PageBanner title="Shoko Blog"
                description="Stay informed with the latest news about Shoko's development, third-party plugins, and other relevant topics."
    />
    <div className="mx-auto size-full px-6 py-16">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between">
        <Spotlight />
        <BlogList />
      </div>
    </div>
  </>;
}

export default Blog;