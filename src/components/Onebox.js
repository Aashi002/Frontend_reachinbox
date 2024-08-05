import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

const Onebox = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [threads, setThreads] = useState([]);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [darkMode, setDarkMode] = useState(false);

  const handleReply = async (threadId, replyContent) => {
    const token = await getAccessTokenSilently();
    await axios.post(`/reply/${threadId}`, {
      from: "your-email@example.com",
      to: "recipient@example.com",
      subject: "Your Subject",
      body: replyContent,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
  
  useEffect(() => {
    const fetchData = async () => {
      const token = await getAccessTokenSilently();
      const response = await axios.get('/onebox/list', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setThreads(response.data);
    };

    fetchData();
  }, [getAccessTokenSilently]);

  const handleKeyDown = (event) => {
    if (event.key === 'd') {
      // handle delete
    } else if (event.key === 'r') {
      // handle reply
    }
  };

  const handleSave = () => {
    // handle save
  };

  const handleVariables = () => {
    // handle variables
  };

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'} onKeyDown={handleKeyDown}>
      <div>
        {threads.map(thread => (
          <div key={thread.id}>
            <h3>{thread.title}</h3>
            <p>{thread.body}</p>
          </div>
        ))}
      </div>
      <Editor editorState={editorState} onChange={handleEditorChange} />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleVariables}>Variables</button>
    </div>
  );
};

export default Onebox;
