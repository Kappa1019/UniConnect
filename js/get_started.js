
// Global state management
const appState = {
  currentUser: {
    name: "Rahul Sharma",
    university: "IIT Delhi",
    avatar: "R"
  },
  currentTab: "feed",
  posts: [],
  events: [],
  messages: []
};

// Initialize the app
document.addEventListener('DOMContentLoaded', function () {
  initializeApp();
  setupEventListeners();
  loadInitialData();
});

function initializeApp() {
  // Setup search functionality
  const searchInput = document.querySelector('.search-input');
  searchInput.addEventListener('input', debounce(handleSearch, 300));

  // Setup filter buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      filterButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      filterFeed(this.dataset.filter);
    });
  });

  // Setup post interactions
  setupPostInteractions();
}

function setupEventListeners() {
  // Close modals when clicking outside
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal(e.target.id);
    }
  });

  // Handle form submissions
  document.getElementById('createEventForm').addEventListener('submit', handleCreateEvent);
}

function loadInitialData() {
  // Simulate loading more posts
  setTimeout(() => {
    addPostsToFeed();
  }, 1000);
}

function switchTab(tab) {
  appState.currentTab = tab;
  // Update UI based on selected tab
  updateTabContent(tab);
}

function updateTabContent(tab) {
  const feedContainer = document.getElementById('feed-container');

  switch (tab) {
    case 'network':
      feedContainer.innerHTML = generateNetworkContent();
      break;
    case 'events':
      feedContainer.innerHTML = generateEventsContent();
      break;
    case 'jobs':
      feedContainer.innerHTML = generateJobsContent();
      break;
    default:
      loadFeedContent();
  }
}

function generateNetworkContent() {
  return `
                <div class="post-card">
                    <h3 style="margin-bottom: 16px;">People you may know</h3>
                    ${generateNetworkSuggestions()}
                </div>
                <div class="post-card">
                    <h3 style="margin-bottom: 16px;">Your Network Activity</h3>
                    ${generateNetworkActivity()}
                </div>
            `;
}

function generateNetworkSuggestions() {
  const suggestions = [
    { name: "Aditi Sharma", university: "IIT Bombay", connections: 45 },
    { name: "Vikram Patel", university: "NIT Warangal", connections: 23 },
    { name: "Sneha Gupta", university: "IIIT Hyderabad", connections: 67 }
  ];

  return suggestions.map(person => `
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid var(--border);">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div class="post-avatar" style="background: var(--accent);">${person.name[0]}</div>
                        <div>
                            <div style="font-weight: 500;">${person.name}</div>
                            <div style="font-size: 12px; color: var(--text-secondary);">${person.university} • ${person.connections} connections</div>
                        </div>
                    </div>
                    <button class="btn btn-primary" style="padding: 4px 12px; font-size: 12px;">Connect</button>
                </div>
            `).join('');
}

function generateNetworkActivity() {
  return `
                <div style="color: var(--text-secondary); text-align: center; padding: 40px;">
                    Your network activity will appear here once you start connecting with people.
                </div>
            `;
}

function generateEventsContent() {
  return `
                <div class="post-card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                        <h3>All Events</h3>
                        <button class="btn btn-primary" onclick="showCreateEventModal()">Create Event</button>
                    </div>
                    ${generateEventsList()}
                </div>
            `;
}

function generateEventsList() {
  const events = [
    {
      title: "AI/ML Workshop by Google",
      date: "March 8, 2025",
      time: "2:00 PM",
      location: "Online",
      category: "Workshop",
      attendees: 234,
      organizer: "Google Developers"
    },
    {
      title: "Coding Championship 2025",
      date: "March 15, 2025",
      time: "10:00 AM",
      location: "IIT Delhi",
      category: "Competition",
      attendees: 456,
      organizer: "CodeChef"
    }
  ];

  return events.map(event => `
                <div class="event-item" style="border: 1px solid var(--border); border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                        <div>
                            <h4 style="margin-bottom: 4px;">${event.title}</h4>
                            <div style="font-size: 12px; color: var(--text-secondary);">by ${event.organizer}</div>
                        </div>
                        <div class="event-category ${event.category.toLowerCase()}">${event.category}</div>
                    </div>
                    <div style="font-size: 14px; color: var(--text-secondary); margin-bottom: 8px;">
                        📅 ${event.date} at ${event.time}<br>
                        📍 ${event.location}<br>
                        👥 ${event.attendees} registered
                    </div>
                    <button class="btn btn-primary" style="padding: 6px 16px; font-size: 14px;">Register</button>
                </div>
            `).join('');
}

function generateJobsContent() {
  return `
                <div class="post-card">
                    <h3 style="margin-bottom: 16px;">Recommended Jobs & Internships</h3>
                    ${generateJobsList()}
                </div>
            `;
}

function generateJobsList() {
  const jobs = [
    {
      title: "Software Engineering Intern",
      company: "Microsoft",
      location: "Hyderabad",
      type: "Internship",
      duration: "3 months",
      stipend: "₹80,000/month",
      posted: "2 days ago"
    },
    {
      title: "Data Scientist - Entry Level",
      company: "Flipkart",
      location: "Bangalore",
      type: "Full-time",
      duration: "Permanent",
      stipend: "₹12-15 LPA",
      posted: "1 week ago"
    }
  ];

  return jobs.map(job => `
                <div style="border: 1px solid var(--border); border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                        <div>
                            <h4 style="margin-bottom: 4px;">${job.title}</h4>
                            <div style="font-size: 14px; color: var(--primary-color); font-weight: 500;">${job.company}</div>
                        </div>
                        <div class="event-category internship">${job.type}</div>
                    </div>
                    <div style="font-size: 14px; color: var(--text-secondary); margin-bottom: 12px;">
                        📍 ${job.location}<br>
                        ⏱️ ${job.duration}<br>
                        💰 ${job.stipend}<br>
                        📅 Posted ${job.posted}
                    </div>
                    <div style="display: flex; gap: 8px;">
                        <button class="btn btn-primary" style="padding: 6px 16px; font-size: 14px;">Apply Now</button>
                        <button class="btn" style="padding: 6px 16px; font-size: 14px; background: var(--background); border: 1px solid var(--border);">Save</button>
                    </div>
                </div>
            `).join('');
}

function loadFeedContent() {
  // Reset to default feed view - this would typically reload from server
  location.reload();
}

function handleSearch(e) {
  const query = e.target.value.toLowerCase();
  if (query.length > 2) {
    // Simulate search results
    showSearchResults(query);
  }
}

function showSearchResults(query) {
  // In a real app, this would make an API call
  console.log('Searching for:', query);
}

function filterFeed(filter) {
  const posts = document.querySelectorAll('.post-card');
  posts.forEach(post => {
    const category = post.querySelector('.post-category')?.textContent.toLowerCase();
    if (filter === 'all' || category === filter) {
      post.style.display = 'block';
    } else {
      post.style.display = 'none';
    }
  });
}

function setupPostInteractions() {
  // Add click handlers to like, comment, share buttons
  document.addEventListener('click', function (e) {
    if (e.target.closest('.action-btn')) {
      const action = e.target.closest('.action-btn');
      const actionType = action.textContent.toLowerCase();

      if (actionType.includes('like')) {
        toggleLike(action);
      } else if (actionType.includes('save')) {
        toggleSave(action);
      }
    }
  });
}

function toggleLike(button) {
  const likeCount = button.querySelector('span:last-child');
  const currentCount = parseInt(likeCount.textContent.match(/\d+/)[0]);

  if (button.style.color === 'var(--primary-color)') {
    button.style.color = '';
    likeCount.textContent = `${currentCount - 1} Likes`;
  } else {
    button.style.color = 'var(--primary-color)';
    likeCount.textContent = `${currentCount + 1} Likes`;
  }
}

function toggleSave(button) {
  if (button.style.color === 'var(--primary-color)') {
    button.style.color = '';
    button.querySelector('span:last-child').textContent = 'Save';
  } else {
    button.style.color = 'var(--primary-color)';
    button.querySelector('span:last-child').textContent = 'Saved';
  }
}

function createPost() {
  const textarea = document.querySelector('.create-post-input');
  const content = textarea.value.trim();

  if (content) {
    // Add the post to feed
    addNewPost(content);
    textarea.value = '';
    showNotification('Post created successfully!', 'success');
  }
}

function addNewPost(content) {
  const feedContainer = document.getElementById('feed-container');
  const newPost = document.createElement('div');
  newPost.className = 'post-card';
  newPost.style.opacity = '0';
  newPost.style.transform = 'translateY(20px)';

  newPost.innerHTML = `
                <div class="post-header">
                    <div class="post-avatar">${appState.currentUser.avatar}</div>
                    <div class="post-meta">
                        <h3>${appState.currentUser.name}</h3>
                        <div class="post-time">Just now • ${appState.currentUser.university}</div>
                    </div>
                    <div class="post-category">Update</div>
                </div>
                <div class="post-content">${content}</div>
                <div class="post-actions">
                    <div class="action-group">
                        <div class="action-btn">
                            <span>👍</span>
                            <span>0 Likes</span>
                        </div>
                        <div class="action-btn">
                            <span>💬</span>
                            <span>0 Comments</span>
                        </div>
                        <div class="action-btn">
                            <span>↗️</span>
                            <span>Share</span>
                        </div>
                    </div>
                    <div class="action-btn">
                        <span>🔖</span>
                        <span>Save</span>
                    </div>
                </div>
            `;

  feedContainer.insertBefore(newPost, feedContainer.firstChild);

  // Animate in
  setTimeout(() => {
    newPost.style.transition = 'all 0.3s ease';
    newPost.style.opacity = '1';
    newPost.style.transform = 'translateY(0)';
  }, 100);
}

function showCreateEventModal() {
  document.getElementById('createEventModal').classList.add('active');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
}

function handleCreateEvent(e) {
  e.preventDefault();
  // Handle event creation
  showNotification('Event created successfully!', 'success');
  closeModal('createEventModal');
  e.target.reset();
}

function toggleMessages() {
  showNotification('Messages feature coming soon!', 'info');
}

function showNotifications() {
  showNotification('You have 5 new notifications', 'info');
}

function showProfile() {
  showNotification('Profile feature coming soon!', 'info');
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.style.cssText = `
                position: fixed;
                top: 80px;
                right: 20px;
                background: var(--surface);
                border: 1px solid var(--border);
                border-radius: 8px;
                padding: 12px 16px;
                box-shadow: var(--shadow-lg);
                z-index: 3000;
                max-width: 300px;
                transform: translateX(100%);
                transition: transform 0.3s ease;
            `;

  if (type === 'success') {
    notification.style.borderColor = 'var(--success)';
    notification.style.color = 'var(--success)';
  } else if (type === 'error') {
    notification.style.borderColor = 'var(--error)';
    notification.style.color = 'var(--error)';
  }

  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);

  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function addPostsToFeed() {
  // Simulate loading more posts
  const additionalPosts = [
    {
      author: "Tech Club IIT Kanpur",
      avatar: "T",
      time: "1 day ago",
      category: "Workshop",
      content: "<strong>🤖 Introduction to Machine Learning Workshop</strong><br><br>Join us for a hands-on workshop covering basic ML concepts, Python libraries, and practical projects. Perfect for beginners!<br><br>📅 Date: March 12, 2025<br>⏰ Time: 2:00 PM - 6:00 PM<br>📍 Venue: Computer Science Department<br>💻 Bring your laptop!",
      likes: 67,
      comments: 12
    }
  ];

  // Add these posts to the feed (simplified implementation)
}
