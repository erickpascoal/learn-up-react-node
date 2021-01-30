import React, { useCallback, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import MarkdownView from '../../../../../components/MarkdownView';
import api from '../../../../../services/api';

interface ParamsProps {
  lessonId: string;
}

const LessonMarkdown: React.FC = () => {
  const [lesson, setLesson] = useState({} as any);
  const { params } = useRouteMatch<ParamsProps>();

  useEffect(() => {
    loadLesson();
  }, []);

  const loadLesson = useCallback(async () => {
    const response = await api.get(`/lessons/${params.lessonId}`);
    setLesson(response.data);
    console.log('response.data', response.data);

  }, [params.lessonId]);

  return (
    <MarkdownView value={lesson.markdownText}></MarkdownView>
  );
}

export default LessonMarkdown;