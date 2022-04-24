import postsApi from '../../../api/postsApi';

const getPosts = async () => {

    return await postsApi.get();
};

export default getPosts;