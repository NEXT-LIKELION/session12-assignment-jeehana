import React, { useState } from "react";

function App() {
    const [responseData, setResponseData] = useState(null);

    // GET 요청
    const handleGet = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await res.json();
        console.log("GET 응답:", data);
        setResponseData(data);
    };

    // POST 요청
    const handlePost = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: "새 게시글",
                body: "게시글 내용입니다!",
                userId: 1,
            }),
        });
        const data = await res.json();
        console.log("POST 응답:", data);
        setResponseData(data);
    };

    // PUT 요청
    const handlePut = async () => {
        const res = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: 1,
                    title: "수정된 제목",
                    body: "수정된 내용",
                    userId: 1,
                }),
            }
        );
        const data = await res.json();
        console.log("PUT 응답:", data);
        setResponseData(data);
    };

    // DELETE 요청
    const handleDelete = async () => {
        const res = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1",
            {
                method: "DELETE",
            }
        );
        console.log("DELETE 상태코드:", res.status);
        setResponseData({ message: "삭제 완료", status: res.status });
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>JSON Placeholder Fetch 실습</h2>

            <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                <button onClick={handleGet}>GET</button>
                <button onClick={handlePost}>POST</button>
                <button onClick={handlePut}>PUT</button>
                <button onClick={handleDelete}>DELETE</button>
            </div>

            <pre style={{ background: "#f4f4f4", padding: "10px" }}>
                {responseData
                    ? JSON.stringify(responseData, null, 2)
                    : "여기에 응답 결과가 표시됩니다."}
            </pre>
        </div>
    );
}

export default App;
