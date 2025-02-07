//for the given scaffold create event Listener and handler for the form.


let postsData = [
     { id: 1, author: 'John', content: 'Hello, Instagram!', likes: 10, comments: ['Great post!', 'Nice photo!'], image: 'https://files.codingninjas.in/image2-28694.jpg' },
     { id: 2, author: 'Jane', content: 'This is a great post!', likes: 15, comments: [], image: 'https://files.codingninjas.in/oip-28704.jpg' },
     { id: 3, author: 'Alice', content: 'Another post', likes: 8, comments: [], image: 'https://files.codingninjas.in/th-2-28706.jpg' },
     { id: 4, author: 'Bob', content: 'Check out this photo!', likes: 20, comments: [], image: 'https://files.codingninjas.in/image1-28708.jpg' },
];
const likedPosts = new Set();
function renderPosts() {
     const postsContainer = document.getElementById('posts');
     postsContainer.innerHTML = '';

     postsData.forEach((post) => {
          const postElement = document.createElement('div');
          postElement.classList.add('post');

          const authorElement = document.createElement('h3');
          authorElement.textContent = post.author;

          const contentElement = document.createElement('p');
          contentElement.textContent = post.content;

          const imageElement = document.createElement('img');
          imageElement.src = post.image;
          imageElement.alt = 'Post Image';

          const likeButton = document.createElement('button');
          likeButton.textContent = `Like`;
          likeButton.classList.add('like-button');

          // let likeColorView = document.querySelectorAll('.like-button')

          // console.log(likeButton);


          // likeColorView.forEach((btn) => {
          //      console.log(btn.className.split(" "));

          //      if (btn.className === 'btn-bkColor') {
          //           btn.classList.add('btn-bkColor')
          //           console.log('hii');

          //      }
          //      else {
          //           btn.classList.remove('btn-bkColor')
          //      }
          // })

          likeButton.addEventListener('click', () => {

               if (!likedPosts.has(post.id)) {
                    likePost(post.id);
                    likedPosts.add(post.id);
                    likeButton.disabled = true;
                    for (let ind of likedPosts) {
                         const button = document.querySelectorAll('.like-button')[ind - 1];
                         button.classList.add('btn-bkColor')
                         console.log(button);

                    }
               }
               else {
                    dislikePost(post.id)
                    likedPosts.delete(post.id);
                    likeButton.disabled = false;
                    for (let ind of likedPosts) {
                         const button = document.querySelectorAll('.like-button')[ind - 1];
                         button.classList.remove('btn-bkColor')
                    }

               }
          });

          const commentInput = document.createElement('input');
          commentInput.type = 'text';
          commentInput.placeholder = 'Write a comment...';

          const commentButton = document.createElement('button');
          commentButton.textContent = 'Comment';
          commentButton.classList.add('comment-button');
          commentButton.addEventListener('click', () => {
               if (commentInput.value === "") {
                    alert("Please write the comment to post...")
               }
               else {
                    addComment(post.id, commentInput.value);
                    commentInput.value = '';
               }
          });

          const postFooter = document.createElement('div');
          postFooter.classList.add('post-footer');
          postFooter.textContent = `Likes: ${post.likes}   Comments: ${post.comments.length}`;

          const commentsContainer = document.createElement('div');
          commentsContainer.classList.add('comments-container');
          commentsContainer.style.display = 'none';

          let cmntIndex = 0;
          post.comments.forEach((comment) => {

               const commentElement = document.createElement('p');

               const commentDeleteBtn = document.createElement('button');
               commentDeleteBtn.type = 'button'
               commentDeleteBtn.className = 'delete-cmnt'
               commentDeleteBtn.setAttribute(`data-postID${post.id}-cmntId`, cmntIndex)
               commentDeleteBtn.textContent = 'Delete';

               commentElement.textContent = comment;
               commentElement.append(commentDeleteBtn)
               commentsContainer.appendChild(commentElement);

               const cmntId = commentDeleteBtn.getAttribute(`data-postID${post.id}-cmntId`);

               commentDeleteBtn.addEventListener('click', () => {
                    deleteComment(post.id, cmntId);
               })

               cmntIndex++;

          });

          postElement.appendChild(authorElement);

          postElement.appendChild(imageElement);
          postElement.appendChild(contentElement);
          postElement.appendChild(likeButton);
          postElement.appendChild(commentInput);
          postElement.appendChild(commentButton);
          postElement.appendChild(postFooter);
          postElement.appendChild(commentsContainer);

          postFooter.addEventListener('click', () => {
               if (commentsContainer.style.display === 'none') {
                    commentsContainer.style.display = 'block';
               } else {
                    commentsContainer.style.display = 'none';
               }
          });

          postsContainer.appendChild(postElement);
     });
}

// Function to handle post liking
function likePost(postId) {
     const post = postsData.find(post => post.id === postId);
     if (post) {
          post.likes++;
          renderPosts();
     }
}

function dislikePost(postId) {

     const post = postsData.find(post => postId === post.id)
     if (post) {
          post.likes--;
          renderPosts();
     }

}

// Function to handle adding a comment
function addComment(postId, comment) {
     const post = postsData.find(post => post.id === postId);
     if (post) {
          post.comments.push(comment);
          renderPosts();
     }
}

function deleteComment(postId, commentID) {
     const postFind = postsData.find(post => postId === post.id)

     if (postFind) {
          postFind.comments.splice(parseInt(commentID), 1)
          renderPosts();
     }
}

// Create your function here to handle post creation and adding Post to the postsData. 
function addingNewPost(e) {

     e.preventDefault();

     const postInput = document.getElementById('postInput');
     const imageInput = document.getElementById('imageInput');
     const content = postInput.value;
     const image = imageInput.files[0];

     if (content.trim() === '' || !image) {
          return;
     }

     const imageURL = URL.createObjectURL(image);

     const newPost = {
          id: postsData.length + 1,
          author: 'You',
          content: content,
          likes: 0,
          comments: [],
          image: imageURL
     };

     postsData.push(newPost);
     postInput.value = '';
     imageInput.value = '';
     renderPosts();

}

// Add Event listeners to listen to the submit event of the form.
const postBtn = document.querySelector('.submit-button');
const postForm = document.getElementById('postForm');

postForm.addEventListener('submit', addingNewPost)

// Initial rendering                      
renderPosts();
