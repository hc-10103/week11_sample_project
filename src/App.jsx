import CourseList from './components/CourseList.jsx';

export default function App() {
  return (
    <main className="page">
      <header className="hero">
        <div><p className="topline">OSS 11</p><h1>과목 관리 매니저</h1><p className="subtitle">이수하는 과목 관리 도우미</p></div>
        <span className="tag">STUDENT STARTER</span>
      </header>
      <CourseList />
      <footer className="bottom"><span>OSS Week 11 · React</span><span>Local state only · Refresh resets data</span></footer>
    </main>
  );
}
