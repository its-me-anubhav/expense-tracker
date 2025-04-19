This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# 💸 Income Expense Tracker

A powerful and intuitive expense tracking application built with **Next.js**. Stay in control of your finances with real-time insights, personalized budgeting tools, and seamless user experience.

## 🚀 Features

- 🔐 **Authentication with NextAuth**
- 🧠 **AI-powered Receipt Scanning & Smart Categorization**
- 📊 **Real-Time Expense Insights**
- 📅 **Recurring Transactions & Budget Alerts**
- 💰 **Personalized Budgeting Tools**
- 💻 Built with **Next.js App Router** and **Tailwind CSS**
- ☁️ **Deployed on Vercel**

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env.local` file at the root and add:

```env
NEXTAUTH_SECRET=your_secret_here
NEXTAUTH_URL=http://localhost:3000

# Add your authentication provider secrets (e.g., GitHub, Google)
GITHUB_ID=your_github_id
GITHUB_SECRET=your_github_secret
```

### 4. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

---

## 🧾 File Structure

```
/app
  /api
  /dashboard
  /components
  /auth
/public
/styles
/utils
.env.local
```

---

## 🔧 Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [Inngest (for background jobs)](https://www.inngest.com/)
- [React Email](https://react.email/)
- [Vercel](https://vercel.com/) for deployment

---

## 📦 Deployment

Deploy your app instantly using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [NextAuth.js Guide](https://next-auth.js.org/getting-started/introduction)

---

## 🛠 TODOs

- [ ] Add analytics dashboard
- [ ] Export transactions as CSV/PDF
- [ ] Add dark mode
- [ ] Improve mobile responsiveness

---

## 📬 Feedback & Contributions

Got suggestions? Open an [issue](https://github.com/your-username/your-repo-name/issues) or submit a PR.

