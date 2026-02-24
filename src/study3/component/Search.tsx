import { useState, useRef } from "react";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const prevSearchTerm = useRef("");

  const fetchSearch = () => {
    console.log("API  호출 시작");
    // api 호출 내용
  };

  const handleSearch = () => {
    if (searchTerm === prevSearchTerm.current) {
      console.log("이전 검색어와 동일합니다. API 요청을 생략합니다.");
      return;
    }
    fetchSearch();
    prevSearchTerm.current = searchTerm;
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
}

// useRef는 컴포넌트가 리렌더링되어도 값이 유지되는 변수를 만들 때 사용한다.
// 이 예시에서는 prevSearchTerm이라는 useRef를 사용하여 이전 검색어를 저장하고, 현재 검색어와 비교하여 API 요청 여부를 결정한다.
