import Layout from '@/components/Layout';
import { useRouter } from 'next/router';

const BlogPage = () => {
    const router = useRouter();
    const query = router.query.q;
    return (
        <Layout title='Blog'>
            <div>
                <h1>Blog</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus tempore earum impedit eos harum minus, nemo
                    dicta blanditiis necessitatibus! Illum adipisci porro est
                    odit asperiores quisquam veniam ducimus pariatur ad.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci magnam, dolorum odio autem quia iusto quibusdam
                    eveniet, dolor iure nam omnis doloribus itaque! Ad quisquam
                    odio illum delectus vitae. Nostrum?
                </p>
            </div>
        </Layout>
    );
};

export default BlogPage;
