import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { addAnswer, addQuestion } from 'store/changeLanguage/changeLanguageSlice';
import Answer from 'components/conversation/Conversation';
import AlgorithmForm from 'components/Form/AlgorithmForm';

export default function SolveAlgorithm() {
  const languageList = ['Python3', 'C++', 'C', 'Java', 'Ruby', 'Kotlin', 'Swift', 'C#', 'node.js', 'Go', 'D', 'Rust'];
  const conversation = useSelector((state) => state.changeLanguage.conversation);
  const chatBoxRef = useRef();

  const scrollToBottom = useCallback(() => {
    chatBoxRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }, [conversation]);

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  return (
    <div ref={chatBoxRef}>
      {conversation.map((item) => {
        return <Answer key={item.id} data={item} isAnswer={item.isAnswer} />;
      })}
      <AlgorithmForm
        camelCaseAPI='solveAlgorithm'
        placeholder='해결할 문제 번호를 입력하세요.'
        addQuestion={addQuestion}
        addAnswer={addAnswer}
        dropdownList={languageList}
      />
      <div className='flex-shrink-0 h-36 md:h-48'></div>
    </div>
  );
}
