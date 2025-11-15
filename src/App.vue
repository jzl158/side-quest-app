<script setup lang="ts">
import { ref } from 'vue'

// Sample data structure for topics and quests
const topics = ref([
  {
    id: 1,
    title: 'Adventure',
    icon: '🗺️',
    description: 'Explore new territories and discover hidden treasures.',
    quests: [
      { id: 1, title: 'Mountain expedition', completed: false },
      { id: 2, title: 'Cave exploration', completed: true },
      { id: 3, title: 'Forest trail discovery', completed: false },
      { id: 4, title: 'River crossing challenge', completed: false }
    ]
  },
  {
    id: 2,
    title: 'Learning',
    icon: '📚',
    description: 'Expand knowledge and develop new skills together.',
    quests: [
      { id: 5, title: 'Read 5 books this month', completed: false },
      { id: 6, title: 'Learn a new language', completed: false },
      { id: 7, title: 'Master a musical instrument', completed: true },
      { id: 8, title: 'Complete online course', completed: false }
    ]
  },
  {
    id: 3,
    title: 'Creativity',
    icon: '🎨',
    description: 'Express yourselves through art and creative projects.',
    quests: [
      { id: 9, title: 'Paint family portrait', completed: true },
      { id: 10, title: 'Build a craft project', completed: false },
      { id: 11, title: 'Write short stories', completed: false },
      { id: 12, title: 'Create photo album', completed: false }
    ]
  },
  {
    id: 4,
    title: 'Wellness',
    icon: '💪',
    description: 'Build healthy habits and stay active together.',
    quests: [
      { id: 13, title: 'Morning yoga routine', completed: false },
      { id: 14, title: 'Family bike rides', completed: true },
      { id: 15, title: 'Cook healthy meals', completed: false },
      { id: 16, title: 'Outdoor sports day', completed: false }
    ]
  },
  {
    id: 5,
    title: 'Connection',
    icon: '❤️',
    description: 'Strengthen bonds and create lasting memories.',
    quests: [
      { id: 17, title: 'Weekly game night', completed: false },
      { id: 18, title: 'Family movie marathon', completed: false },
      { id: 19, title: 'Plan weekend getaway', completed: true },
      { id: 20, title: 'Share daily gratitude', completed: false }
    ]
  }
])

const toggleQuest = (topicId: number, questId: number) => {
  const topic = topics.value.find(t => t.id === topicId)
  if (topic) {
    const quest = topic.quests.find(q => q.id === questId)
    if (quest) {
      quest.completed = !quest.completed
    }
  }
}
</script>

<template>
  <div class="side-quest-page">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Side Quest</h1>
        <p class="hero-description">
          Transform everyday moments into meaningful adventures through purposeful activities and shared experiences.
        </p>

        <!-- Family SVG Illustration -->
        <svg class="family-illustration" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
          <!-- Sun -->
          <circle cx="350" cy="40" r="25" fill="#FFD93D" opacity="0.6"/>

          <!-- Parent 1 (Left) -->
          <g class="person">
            <circle cx="80" cy="90" r="18" fill="#FFA07A"/>
            <rect x="67" y="108" width="26" height="40" rx="5" fill="#4A90E2"/>
            <rect x="55" y="115" width="12" height="5" rx="2" fill="#4A90E2"/>
            <rect x="93" y="115" width="12" height="5" rx="2" fill="#4A90E2"/>
            <rect x="70" y="148" width="8" height="25" rx="3" fill="#2C3E50"/>
            <rect x="82" y="148" width="8" height="25" rx="3" fill="#2C3E50"/>
          </g>

          <!-- Child 1 -->
          <g class="person">
            <circle cx="140" cy="110" r="14" fill="#FFDAB9"/>
            <rect x="129" y="124" width="22" height="30" rx="4" fill="#FF6B9D"/>
            <rect x="119" y="130" width="10" height="4" rx="2" fill="#FF6B9D"/>
            <rect x="151" y="130" width="10" height="4" rx="2" fill="#FF6B9D"/>
            <rect x="132" y="154" width="6" height="20" rx="2" fill="#2C3E50"/>
            <rect x="142" y="154" width="6" height="20" rx="2" fill="#2C3E50"/>
          </g>

          <!-- Child 2 -->
          <g class="person">
            <circle cx="190" cy="115" r="12" fill="#FFE4B5"/>
            <rect x="181" y="127" width="18" height="25" rx="3" fill="#98D8C8"/>
            <rect x="172" y="132" width="9" height="3" rx="1" fill="#98D8C8"/>
            <rect x="199" y="132" width="9" height="3" rx="1" fill="#98D8C8"/>
            <rect x="184" y="152" width="5" height="18" rx="2" fill="#2C3E50"/>
            <rect x="191" y="152" width="5" height="18" rx="2" fill="#2C3E50"/>
          </g>

          <!-- Parent 2 (Right) -->
          <g class="person">
            <circle cx="245" cy="90" r="18" fill="#F4A460"/>
            <rect x="232" y="108" width="26" height="40" rx="5" fill="#9B59B6"/>
            <rect x="220" y="115" width="12" height="5" rx="2" fill="#9B59B6"/>
            <rect x="258" y="115" width="12" height="5" rx="2" fill="#9B59B6"/>
            <rect x="235" y="148" width="8" height="25" rx="3" fill="#2C3E50"/>
            <rect x="247" y="148" width="8" height="25" rx="3" fill="#2C3E50"/>
          </g>

          <!-- Heart above family -->
          <path d="M 162.5 50 C 162.5 45 158 42 154 42 C 150 42 147.5 45 147.5 45 C 147.5 45 145 42 141 42 C 137 42 132.5 45 132.5 50 C 132.5 56 147.5 65 147.5 65 C 147.5 65 162.5 56 162.5 50 Z" fill="#FF6B9D" opacity="0.6"/>
        </svg>
      </div>
    </div>

    <!-- Topics Section -->
    <div class="topics-section">
      <div class="topics-grid">
        <div
          v-for="topic in topics"
          :key="topic.id"
          class="topic-card"
        >
          <!-- Icon -->
          <div class="topic-icon">
            <span>{{ topic.icon }}</span>
          </div>

          <!-- Title -->
          <h2 class="topic-title">{{ topic.title }}</h2>

          <!-- Description -->
          <p class="topic-description">{{ topic.description }}</p>

          <!-- Quests List -->
          <ul class="quests-list">
            <li
              v-for="quest in topic.quests"
              :key="quest.id"
              class="quest-item"
              @click="toggleQuest(topic.id, quest.id)"
            >
              <span class="quest-check" :class="{ completed: quest.completed }">
                <svg v-if="quest.completed" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
              <span class="quest-title">{{ quest.title }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Global Styles */
.side-quest-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #0a0e27 0%, #1a1d35 100%);
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
}

/* Hero Section */
.hero-section {
  padding: 80px 20px 60px;
  text-align: center;
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0 0 1.5rem 0;
  color: #ffffff;
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.hero-description {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #a0a4b8;
  margin: 0 auto 3rem;
  max-width: 700px;
}

.family-illustration {
  max-width: 400px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: block;
  opacity: 0.9;
}

.family-illustration .person {
  animation: wave 3s ease-in-out infinite;
}

.family-illustration .person:nth-child(2) {
  animation-delay: 0.3s;
}

.family-illustration .person:nth-child(3) {
  animation-delay: 0.6s;
}

.family-illustration .person:nth-child(4) {
  animation-delay: 0.9s;
}

@keyframes wave {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

/* Topics Section */
.topics-section {
  padding: 40px 60px 80px;
  width: 100%;
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 32px;
  width: 100%;
}

/* Topic Cards */
.topic-card {
  background: linear-gradient(135deg, rgba(30, 41, 82, 0.8) 0%, rgba(20, 28, 58, 0.9) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 32px 28px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.topic-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.topic-card:hover {
  transform: translateY(-8px);
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.topic-card:hover::before {
  opacity: 1;
}

/* Topic Icon */
.topic-icon {
  width: 56px;
  height: 56px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 28px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Topic Title */
.topic-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: #ffffff;
  letter-spacing: -0.01em;
}

/* Topic Description */
.topic-description {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #a0a4b8;
  margin: 0 0 24px 0;
}

/* Quests List */
.quests-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.quest-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 6px;
  margin: 0 -8px;
  padding-left: 8px;
}

.quest-item:hover {
  background: rgba(255, 255, 255, 0.05);
}

.quest-check {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.2s ease;
  color: #0a0e27;
}

.quest-check.completed {
  background: #10b981;
  border-color: #10b981;
  color: #ffffff;
}

.quest-title {
  font-size: 0.9375rem;
  color: #d1d5e0;
  line-height: 1.5;
}

.quest-item:hover .quest-title {
  color: #ffffff;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .topics-section {
    padding: 40px 20px 80px;
  }

  .topics-grid {
    grid-template-columns: 1fr;
  }

  .topic-card {
    padding: 28px 24px;
  }
}

@media (min-width: 769px) and (max-width: 1100px) {
  .topics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
