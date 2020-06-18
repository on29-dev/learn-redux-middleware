const sleep = n => new Promise(resolve => setTimeout(resolve, n));

// { id, title, body }
const posts = [
  {
    id:1,
    title: '리덕스 미들웨어를 ',
    body: '바디'
  },
  {
    id:2,
    title: '리덕스 미들웨어를222',
    body: '바디22'
  },
  {
    id:3,
    title: '리덕스 미들웨어를333',
    body: '바디33'
  }
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
}

export const getPostsById = async id => {
  await sleep(500);
  return posts.find(post=>post.id===id);
};

