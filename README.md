# 🍔 FoodWagen - Food Management System

A modern food management web application built with **Next.js 13**, **React 18**, and **Tailwind CSS** for the Eskalate.io technical assessment.

## 🚀 Live Demo

- **🌐 Live Application**: [Your Deployed Link Here]
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

## ✨ Features

### Core Functionality
- ✅ **CRUD Operations**: Create, Read, Update, Delete food items
- ✅ **Search & Filter**: Real-time search functionality
- ✅ **Responsive Design**: Mobile-first approach with Tailwind CSS
- ✅ **Form Validation**: Client-side validation with error handling
- ✅ **API Integration**: Connected to MockAPI for data persistence
- ✅ **Loading States**: Smooth loading indicators and transitions

### User Experience
- 🎨 **Modern UI/UX**: Clean, intuitive interface design
- 🔄 **Real-time Updates**: Instant feedback on all operations
- 📱 **Mobile Optimized**: Touch-friendly interface for mobile devices
- ⚡ **Fast Performance**: Optimized with Next.js 13 App Router
- 🎭 **Interactive Elements**: Hover effects and smooth animations

## 🛠️ Tech Stack

### Frontend
- **Next.js 13** - React framework with App Router
- **React 18** - Latest React with Server Components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons

### Backend & Data
- **MockAPI** - RESTful API for data persistence
- **Fetch API** - Modern HTTP client
- **Form Validation** - Custom validation logic

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Git** - Version control

## 📁 Project Structure

\`\`\`
foodwagen-app/
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Main page component
│   └── loading.tsx          # Loading component
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── Header.tsx           # Navigation header
│   ├── HeroSection.tsx      # Hero section with search
│   ├── FeaturedMeals.tsx    # Meals grid display
│   ├── MealCard.tsx         # Individual meal card
│   ├── MealModal.tsx        # Add/Edit meal modal
│   ├── DeleteModal.tsx      # Delete confirmation modal
│   └── Footer.tsx           # Footer component
├── lib/
│   ├── api.ts               # API integration layer
│   ├── validation.ts        # Form validation logic
│   └── utils.ts             # Utility functions
├── types/
│   └── food.ts              # TypeScript type definitions
├── tailwind.config.ts       # Tailwind CSS configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
\`\`\`

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ 
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/YOUR_USERNAME/eskalate-food-management.git
   cd eskalate-food-management
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

\`\`\`bash
# Build the application
npm run build

# Start production server
npm start
\`\`\`

## 🎯 Key Features Demonstration

### 1. **Food Management**
- Add new food items with complete details
- Edit existing food information
- Delete food items with confirmation
- View all foods in a responsive grid layout

### 2. **Search Functionality**
- Real-time search as you type
- Search by food name or restaurant
- Clear search results instantly

### 3. **Responsive Design**
- **Desktop**: Multi-column grid layout
- **Tablet**: Optimized 2-column layout  
- **Mobile**: Single-column stack layout
- Touch-friendly buttons and interactions

### 4. **Form Validation**
- Required field validation
- URL format validation for images
- Rating range validation (0-5)
- Real-time error feedback

## 🔧 API Integration

The application integrates with MockAPI for data persistence:

- **Base URL**: `https://6852821e0594059b23cdd834.mockapi.io`
- **Endpoints**:
  - `GET /Food` - Fetch all food items
  - `POST /Food` - Create new food item
  - `PUT /Food/:id` - Update food item
  - `DELETE /Food/:id` - Delete food item
  - `GET /Food?name=query` - Search food items

## 🎨 Design System

### Color Palette
- **Primary**: Orange (#FF9500) - Brand color for CTAs
- **Secondary**: Gray scale for text and backgrounds
- **Success**: Green for positive actions
- **Error**: Red for warnings and errors

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights for hierarchy
- **Body**: Regular weight for readability

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Consistent padding and hover states
- **Forms**: Clean inputs with focus states
- **Modals**: Centered overlays with backdrop

## 📱 Responsive Breakpoints

\`\`\`css
/* Mobile First Approach */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X Extra large devices */
\`\`\`

## 🧪 Testing

The application has been tested across:
- ✅ **Chrome** (Latest)
- ✅ **Firefox** (Latest)  
- ✅ **Safari** (Latest)
- ✅ **Edge** (Latest)
- ✅ **Mobile browsers** (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings (auto-detected for Next.js)
3. Deploy with one click

### Netlify Alternative
1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy

## 📈 Performance Optimizations

- **Next.js 13 App Router** for optimal performance
- **Image Optimization** with Next.js Image component
- **Code Splitting** for faster page loads
- **CSS Optimization** with Tailwind CSS purging
- **TypeScript** for better development experience

## 🤝 Contributing

This project was built as part of the Eskalate.io technical assessment. 

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain component modularity
- Write descriptive commit messages

## 👨‍💻 Developer

**Abebe Megibar Alemu**
- 📧 Email: abebe.megibar@a2sv.org
- 🎓 University: AASTU
- 👥 A2SV Group: [Your Group]
- 💼 Role: Full-stack Developer

## 📄 License

This project is part of the Eskalate.io technical assessment.

## 🙏 Acknowledgments

- **Eskalate.io** for the technical assessment opportunity
- **A2SV** for the training and support
- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework

---

**Built with ❤️ using Next.js 13 & React 18**
\`\`\`
