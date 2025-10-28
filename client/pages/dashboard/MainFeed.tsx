import { Heart, MessageCircle, Share2, Image, Video, FileText } from 'lucide-react';

const feedPosts = [
  {
    id: 1,
    author: 'Malik Gupta',
    title: 'Product Designer',
    company: 'Creatify',
    timeAgo: '1h',
    content: 'Excited to share our new product launch UI design process!',
    image: true,
    likes: 234,
    comments: 18,
    shares: 12,
  },
  {
    id: 2,
    author: 'Akshay Pachauri',
    title: 'Frontend Developer',
    company: 'Tech Startup',
    timeAgo: '3h',
    content: 'Finally! a tool to test that actually works! Recently implemented new features in our React app.',
    image: true,
    likes: 567,
    comments: 42,
    shares: 89,
  },
  {
    id: 3,
    author: 'Priya Sharma',
    title: 'Full Stack Developer',
    company: 'XYZ Corp',
    timeAgo: '5h',
    content: 'Getting Started with Varma - Check out our latest blog post on implementing responsive design patterns.',
    image: true,
    likes: 145,
    comments: 28,
    shares: 15,
  },
  {
    id: 4,
    author: 'Raj Kumar',
    title: 'Product Manager',
    company: 'Innovation Labs',
    timeAgo: '7h',
    content: 'Excited about the latest updates to our product roadmap. Looking forward to rolling out new features next quarter.',
    image: true,
    likes: 892,
    comments: 156,
    shares: 234,
  },
  {
    id: 5,
    author: 'Anjali Singh',
    title: 'UX Researcher',
    company: 'Design Studio',
    timeAgo: '9h',
    content: 'Conducting user research for our upcoming mobile app redesign. Any best practices you follow?',
    image: true,
    likes: 423,
    comments: 67,
    shares: 34,
  },
];

export default function MainFeed() {
  return (
    <div className="space-y-4">
      {/* Post Creation Box */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            SV
          </div>
          <input
            type="text"
            placeholder="Start a post"
            className="flex-1 px-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
          />
        </div>

        <div className="flex gap-4 border-t border-gray-200 pt-3">
          <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm font-medium flex-1 justify-center">
            <Image className="w-4 h-4" />
            <span className="hidden sm:inline">Photo</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm font-medium flex-1 justify-center">
            <Video className="w-4 h-4" />
            <span className="hidden sm:inline">Video</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm font-medium flex-1 justify-center">
            <FileText className="w-4 h-4" />
            <span className="hidden sm:inline">Article</span>
          </button>
        </div>
      </div>

      {/* Feed Posts */}
      {feedPosts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
          {/* Post Header */}
          <div className="flex items-start gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              {post.author.substring(0, 2).toUpperCase()}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{post.author}</h3>
              <p className="text-xs text-gray-600">{post.title} at {post.company}</p>
              <p className="text-xs text-gray-500">{post.timeAgo}</p>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <span className="text-gray-600">⋮</span>
            </button>
          </div>

          {/* Post Content */}
          <p className="text-gray-700 mb-3 text-sm leading-relaxed">{post.content}</p>

          {/* Post Image */}
          {post.image && (
            <div className="mb-4 h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-4xl">
              📷
            </div>
          )}

          {/* Engagement Stats */}
          <div className="flex items-center justify-between py-3 border-b border-gray-200 text-xs text-gray-500 mb-3">
            <span>{post.likes} likes</span>
            <div className="flex gap-4">
              <span>{post.comments} comments</span>
              <span>{post.shares} shares</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-0">
            <button className="flex-1 flex items-center justify-center gap-2 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:inline">Like</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:inline">Comment</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors">
              <Share2 className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:inline">Share</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
