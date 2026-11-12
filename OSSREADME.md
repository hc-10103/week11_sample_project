## 소스코드 설명
### 주요 파일 3개의 역할

1. CourseItem.jsx : 부모 CourseList.jsx로부터 props을 상속받는 컴포넌트로, course 정보를 표시하는 기능을 담당한다.
2. CourseList.jsx : 메인화면을 담당하는 파일로, 생성된 course를 화면에 표시하는 기능을 담당한다.
3. courses.js : JavaScript 코드로 이루어진 데이터 파일로, 초기 데이터가 등록되어 있다.


### 컴포넌트 & Props
CourseList.jsx에서 콜백 함수를 이용하여 자식 CourseItem.jsx에 props를 넘긴다. 자식 CourseItem.jsx는 받아온 정보와 함수를 이용하여 처리하고, 다시 부모 컴포넌트에 정보를 전달한다.

### state & event
useState로 과목 목록을 상태로 관리하며, 상태가 바뀌면 화면도 자동으로 갱신된다.
삭제 버튼을 클릭하면 자식 CourseItem이 부모에게 받은 삭제 함수를 과목 id와 함께 호출한다.
부모는 삭제 확인 후 해당 과목을 제외한 새 목록으로 상태를 변경하여 화면에서 과목을 제거한다.

### Code Analysis
```jsx
const [courses, setCourses] = useState(initialCourses);

function handleDelete(id) {
  if (!window.confirm('이 과목을 삭제하시겠습니까?')) return;
  setCourses(previous => previous.filter(course => course.id !== id));
}
```

`courses`는 현재 과목 목록이고, `setCourses`는 목록을 변경하는 함수이다. 삭제를 확인하면 `filter`로 해당 id의 과목을 제외한 새 배열을 만든다. 이 배열로 상태를 변경하면 React가 화면을 다시 렌더링하여 삭제 결과를 보여준다.

```jsx
// CourseList.jsx: 각 과목의 정보와 콜백 함수를 자식에게 전달
{courses.map(course => (
  <CourseItem key={course.id} course={course} onDelete={handleDelete} onToggle={handleToggle} />
))}

// CourseItem.jsx: 삭제 버튼을 클릭하면 해당 과목의 id로 콜백 호출
<button className="btn danger" type="button" onClick={() => onDelete(course.id)}>
  Delete
</button>
```

`map`은 과목마다 `CourseItem`을 만들고, `course`와 콜백 함수를 props로 전달한다. 자식의 삭제 버튼을 클릭하면 `onDelete(course.id)`를 통해 부모의 `handleDelete`가 실행된다.


