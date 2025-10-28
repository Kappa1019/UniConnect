import { Plus, Heart, MessageCircle, Share2 } from 'lucide-react';

const feedPosts = [
  {
    id: 1,
    author: 'Priya Sharma',
    university: 'IIT Delhi',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    timeAgo: '2 hours ago',
    content: 'Just got selected for Google Summer of Code! Excited to contribute to open source projects this summer.',
    likes: 234,
    comments: 18,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop',
  },
  {
    id: 2,
    author: 'Rahul Patel',
    university: 'BITS Pilani',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    timeAgo: '4 hours ago',
    content: 'Our startup just raised $500k in seed funding! Looking for passionate developers to join our team.',
    likes: 567,
    comments: 42,
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=400&fit=crop',
  },
  {
    id: 3,
    author: 'Anjali Singh',
    university: 'Delhi University',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    timeAgo: '6 hours ago',
    content: 'Hosting a web dev workshop next week. Free for all students! Register here.',
    likes: 145,
    comments: 28,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop',
  },
];

export default function Feed() {
  return (
    <div className="space-y-6">
      {/* Create Post Card */}
      <div className="bg-white rounded-2xl border border-border p-6 hover:shadow-lg transition-all">
        <div className="flex gap-4">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
            alt="Your profile"
            className="w-12 h-12 rounded-full object-cover flex-shrink-0"
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/150?text=You';
            }}
          />
          <div className="flex-1">
            <input
              type="text"
              placeholder="What's on your mind?"
              className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-100 transition-all"
            />
          </div>
          <button className="p-3 bg-primary text-white rounded-lg hover:bg-primary-700 transition-all flex-shrink-0">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Feed Posts */}
      {feedPosts.map((post) => (
        <div key={post.id} className="bg-white rounded-2xl border border-border p-6 hover:shadow-lg transition-all animate-slide-up">
          {/* Post Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex gap-3">
              <img 
                src={post.avatar} 
                alt={post.author}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                onError={(e) => {
                  const initials = post.author.split(' ').map(n => n[0]).join('');
                  e.currentTarget.src = `https://via.placeholder.com/150?text=${initials}`;
                }}
              />
              <div>
                <h3 className="font-semibold text-foreground">{post.author}</h3>
                <p className="text-sm text-muted-foreground">{post.university}</p>
                <p className="text-xs text-muted-foreground">{post.timeAgo}</p>
              </div>
            </div>
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <span className="text-xl">⋮</span>
            </button>
          </div>

          {/* Post Content */}
          <p className="text-foreground mb-4 leading-relaxed">{post.content}</p>

          {/* Post Image */}
          {post.image && (
            <div className="mb-4 rounded-lg overflow-hidden">
              <img 
                src={post.image} 
                alt="Post content"
                className="w-full h-64 object-cover"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  e.currentTarget.src = 'https://via.placeholder.com/800x400/0077b5/ffffff?text=UniConnect';
                }}
              />
            </div>
          )}

          {/* Engagement Stats */}
          <div className="flex items-center justify-between py-3 px-4 bg-muted rounded-lg mb-4 text-sm text-muted-foreground">
            <span>{post.likes} likes</span>
            <span>{post.comments} comments</span>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <button className="flex-1 flex items-center justify-center gap-2 py-2 text-muted-foreground hover:text-primary hover:bg-primary-50 rounded-lg transition-all font-medium">
              <Heart className="w-5 h-5" />
              Like
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-2 text-muted-foreground hover:text-primary hover:bg-primary-50 rounded-lg transition-all font-medium">
              <MessageCircle className="w-5 h-5" />
              Comment
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-2 text-muted-foreground hover:text-primary hover:bg-primary-50 rounded-lg transition-all font-medium">
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
